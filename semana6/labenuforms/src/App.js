import React from 'react';
import Step1 from './components/Step1';
import Step2 from './components/Step2';
import Step3 from './components/Step3';
import FinalStep from './components/FinalStep';
import styled from 'styled-components'

const DivConatiner = styled.div`
  display: flex;
  flex-direction: column;
  margin: auto;
  align-items:center;
`

export default class App extends React.Component {
  state = {
    step: 1
  }

  renderStep = () => {
    switch (this.state.step) {
      case 1:
        return <Step1/>
      case 2:
        return <Step2/>
      case 3:
        return <Step3/>
      case 4:
        return <FinalStep/>
      default:
        return "Error!"
    }
  }

  nextStep = () => {
    this.setState({step: this.state.step + 1})
  }

  render () {
    return (
      <DivConatiner>
        {this.renderStep()}
        <br></br>
        {this.state.step !== 4 && (<button onClick={this.nextStep}>Próxima Etapa</button>)}
      </DivConatiner>
    )
  }
}

