import React from 'react'
import {baseUrl, axiosConfig} from '../Parameters'
import axios from 'axios'

export default class LogIn extends React.Component{

    state = {
        userName:'',
        userMail:''
    }

    handleName = (e) => {
        this.setState({userName: e.target.value})
    };

    handleMail = (e) => {
        this.setState({userMail: e.target.value})
    };

    createUser = async () => {
        const body = {
            name: this.state.userName,
            email: this.state.userMail
        }
        try{
            const response = await axios.post(baseUrl, body, axiosConfig)
            this.setState({userName:'', userMail:''})
            alert("Usuário criado com sucesso!")
        }catch(error){
            console.log(error)
            this.setState({userName:'', userMail:''})
            alert("Erro criando usuário!")
            }
    }
    render(){
        return(
            <div>
                <h2>LogIn Page</h2>
                <input placeholder='Nome' value={this.state.userName} onChange={this.handleName}></input>
                <input placeholder='Email' value={this.state.userMail} onChange={this.handleMail}></input>
                <button onClick={this.createUser}>Enviar</button>
            </div>
        )
    }
}