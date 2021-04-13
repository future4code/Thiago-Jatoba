import {BrowserRouter, Switch, Route} from 'react-router-dom'
import AdminHomePage from './pages/AdminHomePage'
import ApplicationFormPage from './pages/ApplicationFormPage'
import HomePage from './pages/HomePage'
import ListTripPage from './pages/ListTripPage'
import LoginPage from './pages/LoginPage'
import ErrorPage from './pages/ErrorPage'

function App() {
  return (
    <div>
      <BrowserRouter>
        <Switch>

          <Route exact path='/'>
            <HomePage/>
          </Route>

          <Route exact path='/list-trip'>
            <ListTripPage/>
          </Route>

          <Route exact path='/appform'>
            <ApplicationFormPage/>
          </Route>

          <Route exact path='/admin'>
            <AdminHomePage/>
          </Route>

          <Route exact path='/login'>
            <LoginPage/>
          </Route>

          <Route>
            <ErrorPage/>
          </Route>

        </Switch>
      </BrowserRouter>
    </div>
  );
}

export default App;
