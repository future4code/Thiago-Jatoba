import React from 'react'
import styled from 'styled-components';

const DivConatiner = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    align-items:center;
`

export default class Step1 extends React.Component {
    render(){
        return(
        <DivConatiner>
            <h1>ETAPA 1 - DADOS:</h1>
                <label for="username">1. Qual o seu nome?</label><br/>
                <input type="text" id="username" name="username"/><br/>

                <label for="userage">2. Qual sua idade?</label><br/>
                <input type="text" id="userage" name="userage"/><br/>

                <label for="usermail">3. Qual seu email?</label><br/>
                <input type="text" id="usermail" name="usermail"/><br/>

                <label for="education">4. Qual a sua escolaridade?</label><br/>
                <select>
                <option value="médioincompleto" selected>Ensino Médio Incompleto</option>
                <option value="médiocompleto" >Ensino Médio Completo</option>
                <option value="superiorincompleto">Ensino Superior Incompleto</option>
                <option value="valor3">Ensino Superior Incompleto</option>
                </select>
        </DivConatiner>
        )
    }
}