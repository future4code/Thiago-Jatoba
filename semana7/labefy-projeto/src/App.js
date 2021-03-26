import React from 'react'
import CreatePlaylist from './pages/CreatePlaylists'
import Playlists from './pages/Playlists'
import styled from 'styled-components'

const Header = styled.div`
  display: flex;
  justify-content: space-evenly;
  align-items:center;
  background-color: green;
  color: white;
`



export default class App extends React.Component {
  state = {
    page: true
  };

  changePage = () => {
    this.setState({ page: !this.state.page });
  };

  render() {
    return (
      <div>
        <Header>
          <h1>LABEFY</h1>
          <button onClick={this.changePage}>GO CREATE / VIEW PLAYLISTS</button>
        </Header>
        <div>
          {this.state.page ? <CreatePlaylist /> : <Playlists />}
        </div>
      </div>
      
    );
  }
}