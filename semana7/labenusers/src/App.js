import React from 'react'
import Register from './components/Register/Register'
import UserList from './components/UsersList/UserList'
import styled from 'styled-components'



export default class App extends React.Component {
    state = { 
        currentPage: 0
    }

    changeCurrentPage = () => {
        if (this.state.currentPage === 0){
            return <Register/>
        }else if (this.state.currentPage === 1){
            return <UserList/>
        }
    }

    changeCurrentState = () => {
        if (this.state.currentPage === 0){
            this.setState({currentPage:1})
        }else if (this.state.currentPage === 1){
            this.setState({currentPage:0})
        }
    }

    actionButton = () =>{
        switch (this.state.currentPage){
            case 0:
                return <button onClick={this.changeCurrentState}>Ir para a lista de Usuários</button>
            case 1:
                return <button onClick={this.changeCurrentState}>Ir para a página de Login</button>
            default:
                return
        }
    }


    render(){
        return(
            <div>
            {this.changeCurrentPage()}
            {this.actionButton()}
            </div>
        )
    }
} 