import React from 'react'
import styled from 'styled-components'

const DivConatiner = styled.div`
    display: flex;
    flex-direction: column;
    margin: auto;
    align-items:center;
    text-align: center;
`


export default class FinalStep extends React.Component {
    render(){
        return(
        <DivConatiner>
        <h1>FIM DO FORMULÁRIO</h1>
        <p>Muito obrigado por participar.<br/>Entraremos em contato!</p>
        </DivConatiner>
        )
    }
}
