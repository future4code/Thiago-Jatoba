import axios from "axios";
import { useState, useEffect } from "react";
import styled from 'styled-components'
import loading from '../imgs/loading.gif'

const CardPerson = styled.div`
border: 2px solid black;
width: 36vw;
padding: 2px;
height: 95vh;
display: flex;
flex-direction: column;
justify-content: space-between;
align-items: center;
text-align: center;
`
const SwitchButtons = styled.div`
width: 100%;
padding-top: 5px;
display: flex;
justify-content: center;
button {
    width: 150px;
    font-size: 18px;

}
`
const LikeButtons = styled.div`
width: 100%;
display: flex;
justify-content: space-between;
`
const LoadedImg = styled.img`
height: 60%;
width: 70%;
`
const LikeButton = styled.button`
font-size: 25px;
width: 50%;
border-radius:50%;
`
const DenyButton = styled.button`
font-size: 25px;
width: 50%;
border-radius:50%;
`
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
        <CardPerson>
            <SwitchButtons>
                <button onClick={()=> props.change('matches')}>Meus Matches</button>
            </SwitchButtons> 
            {!loaded && <img src={loading} alt='loadin_gif'/>}
            {(loaded && profile) && <LoadedImg src={profile.photo} alt='profile_photo'/>}
            {(loaded && profile) && <h2>{profile.name}, {profile.age}</h2>}
            {(loaded && profile) && <p>{profile.bio}</p>}
            {(loaded && !profile) && <h2>Não há mais usuários próximos</h2>}
            <LikeButtons>
                <LikeButton onClick={()=> chooseProfile(true)}>❤</LikeButton>
                <DenyButton onClick={()=> chooseProfile(false)}>X</DenyButton>
            </LikeButtons>
        </CardPerson>
    );
}

export default Likes;