import { useHistory } from "react-router";
import {goToHomePage, goToAdminHomePage} from '../routes/coordinator'

function LoginPage() {
    const history = useHistory()

    return (
        <div>
            LogIn
            <button onClick={() => goToHomePage(history)}>Voltar</button>
            <button onClick={() => goToAdminHomePage(history)}>Entrar</button>
        </div>
    );
}

export default LoginPage;