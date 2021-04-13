import {useHistory} from 'react-router-dom'
import {goToAdminHomePage} from '../routes/coordinator'

function TripDetailPage() {
    const history = useHistory()
    
    return (
        <div>
            TripDetail
            <button onClick={() => goToAdminHomePage(history)}>Voltar</button>
        </div>
    );
}

export default TripDetailPage;