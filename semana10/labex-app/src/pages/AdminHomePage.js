import { useHistory } from "react-router";
import {goToHomePage, goToCreateTripPage, goToLoginPage, goToTripDetailPage} from '../routes/coordinator'

function AdminHomePage() {
    const history = useHistory()

    return (
        <div>
            AdminHomePage
            <button onClick={() => goToHomePage(history)}>Voltar</button>
            <button onClick={() => goToCreateTripPage(history)}>Criar Viagem</button>
            <button onClick={() => goToLoginPage(history)}>Logout</button>
            <button onClick={() => goToTripDetailPage(history)}>Viagem Criada</button>
        </div>
    );
}

export default AdminHomePage;