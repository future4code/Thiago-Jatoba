import React from 'react'
import styled from 'styled-components'

const DivConatiner = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    align-items:center;
`

export default class Step3 extends React.Component {
    render(){
        return(
        <DivConatiner>
        <h1>ETAPA 3 - DADOS:</h1>
            <label for="justify">7. Por que você não terminou um curso de graduação?</label><br/>
            <input type="text" id="justify" name="justify"/><br/>

            <label for="complement">8. Você fez algum curso complementar?</label><br/>
            <select>
                <option value="none" selected>Nenhum</option>
                <option value="english" >Curso de Inglês</option>
                <option value="other">Curso Técnico</option>
            </select>
        </DivConatiner>
        )
    }
}