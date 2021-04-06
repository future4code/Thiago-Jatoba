import React from 'react'
import axios from 'axios'
import {baseUrl, axiosConfig} from '../Parameters'
export default class LogIn extends React.Component{

    state = {
        users: []
    }

    componentDidMount(){ //mostra e mantém os valores na tela
        this.getAllUsers()
    }

    getAllUsers = async () => {
        try{
            const response = await axios.get(baseUrl, axiosConfig)
            this.setState({users: response.data})
        }catch (error){
            console.log(error)
        }
    }

    deleteUsers = async (userId) => {
        if (window.confirm('Deseja realmente deletar o usuário')){          
            try{
                
                const res = await axios.delete(`${baseUrl}/${userId}`, axiosConfig)
                this.getAllUsers()
                console.log(userId)
            }catch (error){
                console.log(error)
            }
        }
    }

    render(){
        return(
            <div>
                <h2>Name List</h2>
                {this.state.users.map((user) => {
            return (
                <div key={user.id}>
                    <p>{user.name}</p>
                    <button onClick={() => {this.deleteUsers(user.id)}}>Remover</button>
                </div>
            )
        })}
            </div>
        )
    }
}