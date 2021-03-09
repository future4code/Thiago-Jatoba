import React from 'react';
import './FormacaoAcademica.css'

function FormacaoAcademica(props) {
    return (
        <div className="formacao-container">
            <img src={ props.imagem } />
            <div>
                <h4>{ props.nome }</h4>
                <p>{ props.descricao }</p>
            </div>
        </div>
    )
}

export default FormacaoAcademica;