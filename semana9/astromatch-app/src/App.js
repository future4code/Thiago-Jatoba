import React, {useState} from 'react'
import axios from 'axios'
import Likes from './pages/Likes'
import Matches from './pages/Matches'
import styled from 'styled-components'

const DivRender = styled.div`
display: flex;
flex-direction: column;
align-items: center;
justify-content: center;
margin: 10px;`

function App() {
  const [currentPage, setCurrentPage] = useState('likes')

  const renderPage = () => {
    if (currentPage === 'likes') {
      return <Likes change={changePages}/>
    }
    else if (currentPage === 'matches') {
      return <Matches change={changePages}/>
    }
  }

  const changePages = (newPage) => {
    setCurrentPage(newPage)
  }

  const cleanPage = async () => {
    if(!window.confirm('Tem certeza que deseja apagar seus Matches?')) {
      return
    }
    try {
      await axios.put(`https://us-central1-missao-newton.cloudfunctions.net/astroMatch/jatoba/clear`)
      setCurrentPage('matches')
      setCurrentPage('likes')
    }
    catch (error) {
      console.log(error)
    }
  }

  return (
    <DivRender>
      <button onClick={cleanPage}>Limpar Matches</button>
      {renderPage()}
    </DivRender>
  );
}

export default App;