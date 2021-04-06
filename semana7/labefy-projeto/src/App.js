import React from 'react'
import CreatePlaylist from './pages/CreatePlaylists'
import Playlists from './pages/Playlists'
import styled from 'styled-components'
import logo from './img/logo.png'

const DivContainer = styled.div`
  display: flex;
  flex-direction: column;
`
const Header = styled.div`
  display: flex;
  align-items: center;
  width: 100%;
  height: 8vh;
  background-color: #1ED760;
  justify-content: space-between;
`
const Footer = styled.div`
  height: 8vh;
  background-color: #1ED760;
  display: flex;
  justify-content: center;
  align-items: center;
`
const DivConteudo = styled.div`
  height: 84vh;
  display: flex;
  justify-content: center;
  align-items: center;
  background: #191414;
`
const PageButton = styled.button`
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
  padding: 11px;
  background-color: #555555;
  cursor: pointer;
}
`
const Logo = styled.img`
  margin-left: 5px;
  width:70px;
  height:70px;
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
      <DivContainer>
        <Header>
          <Logo src={logo} alt='logo labenu'/>
          <PageButton onClick={this.changePage}>GO CREATE / VIEW PLAYLISTS</PageButton>
        </Header>
        <DivConteudo>
          {this.state.page ? <CreatePlaylist /> : <Playlists />}
        </DivConteudo>

        <Footer>
          Made by ME!
        </Footer>
      </DivContainer>
    );
  }
}