import React from 'react'
import GetActivity from './pages/GetActivity'
import ActivityList from './pages/ActivityList'

export default class App extends React.Component{
  state = {
    page: 'random'
  }

  render(){
    return (
      <div>
        <button>Go to Activity List</button>

        <h1>BORED? "C'mon and random an Activity!"</h1>
        <GetActivity/>
      </div>
    );
  }
}
