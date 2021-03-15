import React from 'react'
import styled from 'styled-components'

const DivConatiner = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    align-items:center;
`

export default class Step2 extends React.Component {
    render(){
        return(
        <DivConatiner>
            <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR:</h1>

                <label for="course">5. Qual o seu curso?</label><br/>
                <input type="text" id="course" name="course"/><br/>

                <label for="unit">6. Qual sua unidade de ensino?:</label><br/>
                <input type="text" id="unit" name="unit"/><br/>
        </DivConatiner>
        )
    }
}