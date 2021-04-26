import axios from 'axios'
import {useState, useEffect} from 'react'
import styled from 'styled-components'

const CardMatches = styled.div`
border: 2px solid black;
width: 36vw;
padding: 2px;
min-height: 95vh;
`
const SwitchButtons = styled.div`
width: 100%;
display: flex;
justify-content: center;
button {
    width: 150px;
    font-size: 18px;

}
`
const MatchList = styled.div`
display: flex;
align-items: center;
margin: 0px 10px;
img {
    width: 50px;
    height: 50px;
    border-radius: 100px;
    margin: 0px 10px 0px 0px;
}
`

function Matches(props) {
    const [matches, setMatches] = useState([])
    const [loaded, setLoaded] = useState(false)

    useEffect(() => {
        getMatches()
    },[])

    const getMatches = async() =>{
        try{
            const res = await axios.get ('https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jatoba/matches')
            setMatches(res.data.matches)
            setLoaded(true)
            console.log(res.data.matches)
        }catch (error){
            console.log(error)
        }
    }

    return (
        <CardMatches>
            <SwitchButtons>
            <button onClick={()=> props.change('likes')}>Página Inicial</button>
            </SwitchButtons>
            {(matches.length === 0 && loaded) && <h2>Não há matches salvos!</h2>}
            {matches.map((profile) => {
                return(
                    <MatchList>
                    <img src={profile.photo} alt='profile_photo'/>
                    <h2>{profile.name}</h2>
                    </MatchList>
                )
            })

        }
        </CardMatches>
    );
}

export default Matches;