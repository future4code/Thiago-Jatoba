import React from 'react'
import { BrowserRouter, Switch, Route } from 'react-router-dom'
import AddPost from '../pages/AddPostPage/AddPost'
import HomePage from '../pages/HomePage/HomePage'
import PostDetail from '../pages/PostDetailPage/PostDetail'
import SignIn from '../pages/SignInPage/SignIn'
import SignUp from '../pages/SignUpPage/SignUp'
import ErrorPage from '../pages/ErrorPage/ErrorMsg'
import Header from '../components/Header/Header'
const Router = () => {
    return(
        <BrowserRouter>
        <Header/>
            <Switch>
                <Route exact path='/'>
                    <HomePage/>
                </Route>
                <Route exact path='/entrar'>
                    <SignIn/>
                </Route>
                <Route exact path='/cadastrar'>
                    <SignUp/>
                </Route>
                <Route exact path='/postar'>
                    <AddPost/>
                </Route>
                <Route exact path='/detalhe/:id'>
                    <PostDetail/>
                </Route>
                <Route>
                    <ErrorPage/>
                </Route>
            </Switch>
        </BrowserRouter>
    )
}

export default Router