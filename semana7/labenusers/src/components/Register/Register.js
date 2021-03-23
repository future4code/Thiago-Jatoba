import React from 'react'
import axios from "axios"
import styled from 'styled-components'

const MainContainer = styled.div`
    margin: auto;
    display: flex;
    flex-direction: column;
    border: 1px solid black;
    justify-content: center;
    align-items:center;
    width: 40%;
`
export default class Register extends React.Component {
    state = {
        inputName:'',
        inputMail:''
    };

    handleOnChangeName = (e) => {
        this.setState({inputName: e.target.value });
    };

    handleOnChangeEmail = (e) => {
        this.setState({inputMail: e.target.value})
    }

    createUser = () => {
        const body = {
            name: this.state.inputName,
            email: this.state.inputMail
        };
        axios
            .post(
            "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users",
            body,
            {
                headers: {
                Authorization: "thiago-jatoba-cruz"
                }
            }
            )
            .then((res) => {
            this.setState({inputName: ''})
            this.setState({inputMail: ''})
            alert("Cadastro realizado com Sucesso")
            })
            .catch((err) => {
                this.setState({inputName: ''})
                this.setState({inputMail: ''})
                alert("Nome ou Email Invalido")
            });
    };

    render(){
        return(
            <MainContainer>
            <label>Nome:
                    <input placeholder={"Nome do Usuario"}
                    value={this.state.inputName}
                    onChange={this.handleOnChangeName}></input>
                    </label>
                    <label>Email:
                    <input placeholder={"Email"}
                    value={this.state.inputMail}
                    onChange={this.handleOnChangeEmail}></input>
            </label>
            <button onClick = {(this.createUser)}>Enviar</button>
            </MainContainer>
                )
            }
    }