import axios from "axios";
import { useState, useEffect } from "react";

function Likes(props) {
    const [profile, setProfile] = useState({})
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        getProfile()
    },[])
    
    const getProfile = async () => {
        try{
            const res = await axios.get ('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jatoba/person')
            setProfile(res.data.profile)
            setLoaded(true)
        }catch (error){
            console.log(error)
        }
    }

    const chooseProfile = async (answer) =>{
        if (!profile){
            alert('Não existem mais usuários próximos')
            return
        }
        const body = {
            id: profile.id,
            choice: answer
        }
        try{
            await axios.post('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jatoba/choose-person', body)
            setLoaded(false)
            getProfile()
        }catch (error){
            console.log(error)
        }
    }
    return (
        <div> 
            <button onClick={()=> chooseProfile(true)}>❤</button>
            <button onClick={()=> chooseProfile(false)}>X</button>
            <button onClick={()=> props.change('matches')}>Troca</button>
            {!loaded && <p>Carregando!</p>}
            {(loaded && profile) && <h2>{profile.name}, {profile.age}</h2>}
            {(loaded && profile) && <p>{profile.bio}</p>}
            {(loaded && profile) && <img src={profile.photo} alt='profile_photo'/>}
            {(loaded && !profile) && <h2>Não há mais usuários próximos</h2>}
        </div>
    );
}

export default Likes;