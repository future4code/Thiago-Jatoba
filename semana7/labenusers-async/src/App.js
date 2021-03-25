import React from 'react'
import LogIn from './components/LogIn'
import NameList from './components/NameList'
export default class App extends React.Component{

  state = {
    page: 0
  }

  changeStatus = () =>{
    if (this.state.page === 0){
      this.setState({page: 1})
    }else if (this.state.page === 1){
      this.setState({page: 0})
    }
  }

  changePage = () => {
    switch (this.state.page){
      case 0:
        return <LogIn/>
      case 1:
        return <NameList/>
      default:
        return <div></div>
    }

  }

  render(){
    return(
    <div>
      <h1>LabeUsers</h1>
      {this.changePage()}
      <button onClick={this.changeStatus}>Ir Para Lista de Usuários</button>
    </div>
    )
  }
}


