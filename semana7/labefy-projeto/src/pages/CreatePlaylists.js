import React from 'react'
import {baseUrl, axiosConfig} from '../Parameters'
import axios from 'axios'
import styled from 'styled-components'


const MainContainer = styled.div`
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
    margin: 10px;
    padding: 10px;
    border: 1px solid black;
    width: 450px;
    height: 200px;
    background-color: #1ED760 ;
`;
const InputPlaylist = styled.input`
    width: 250px;
    margin: 20px;
    padding:10px;
    border: none;
    border-radius: 16px;
    outline: 0;
`;
const SendButton = styled.button`
    outline: 0;
    border: none;
    background-color: #191414;
    color: white;
    display: flex;
    justify-content: center;
    margin: 0 10px;
    padding: 10px;
    border-radius: 16px;
    width: 180px;
&:hover {
    background-color: #555555;
    cursor: pointer;
}
`
export default class CreatePlaylists extends React.Component{

    state = {
        myPlaylist:''
    }

    handlePlaylist = (e) => {
        this.setState({myPlaylist: e.target.value})
    };

    createPlaylist = async () => {
        const body = {
            playlist: this.state.myPlaylist
        }
        try{
            await axios.post (baseUrl, body, axiosConfig)
            this.setState({myPlaylist:''})
            alert("Playlist Criada com Sucesso!")
        }catch(error){
            console.log(error)
            this.setState({myPlaylist:''})
            alert("Erro criando Playlist!")
        }
    }
    render(){
        return(
            <MainContainer>
                <h2>CREATE A PLAYLIST</h2>
                <InputPlaylist placeholder='Sing-A-Long' value={this.state.myPlaylist} onChange={this.handlePlaylist}></InputPlaylist>
                <SendButton onClick={this.createPlaylist}>Enviar</SendButton>
            </MainContainer>
        )
    }
} 