import axios from 'axios'
import {useEffect} from 'react'
import {useHistory} from 'react-router-dom'
import {goToAdminHomePage} from '../routes/coordinator'

function TripDetailPage() {
    const history = useHistory()

    useEffect(() => {
        getTripDetail()
    },[])

    const getTripDetail = async(id) => {
        const token = window.localStorage.getItem('token')

        try{
            const res = await axios.get(`https://us-central1-labenu-apis.cloudfunctions.net/labeX/darvas/trip/${id}`, {
                headers: {
                    auth: token
                }
            })
            console.log(res)
        }catch(error){
            console.log(error)
        }
    }
    
    return (
        <div>
            TripDetail
            <button onClick={() => goToAdminHomePage(history)}>Voltar</button>
        </div>
    );
}

export default TripDetailPage;