import React from 'react'
import {baseUrl, axiosConfig} from '../Parameters'
import axios from 'axios'

export default class CreatePlaylists extends React.Component{

    state = {
        myPlaylist:''
    }

    handlePlaylist = (e) => {
        this.setState({playlist: e.target.value})
    };

    createUser = async () => {
        const body = {
            playlist: this.state.myplaylist,
        }
        try{
            await axios.post(baseUrl, body, axiosConfig)
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
            <div>
                <h2>CREATE A PLAYLIST</h2>
                <input placeholder='Sing-A-Long' value={this.state.myPlaylist} onChange={this.handlePlaylist}></input>
                <button onClick={this.createUser}>Enviar</button>
            </div>
        )
    }
} 