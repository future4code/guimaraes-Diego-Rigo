import React from 'react'
import styled from 'styled-components'

const StyleEtapaUm = styled.div`
    text-align:center;
   
`
const Formulario = styled.form`
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;

    label{
        margin:20px;
        
    }
    
    select{
        margin-top:5px
    }

`

class Etapa1 extends React.Component {
    render() {
    return (
      <StyleEtapaUm >
        <h1>ETAPA 1 - DADOS GERAIS</h1>
        <Formulario action="/pagina-processa-dados-do-form" method="post">
            
               <label for="nome">1. Qual o seu nome?</label>
                <input type="text" id="nome" />
            
            
                <label for="idade">2. Qual sua idade?</label>
                <input type="text" id="email" />
            
            
                <label for="email">3. Qual seu email?</label>
                <input id="text"></input>
            
                <label for="ensino">4. Qual a sua escolaridade?</label>
                <select name="select">
                    <option value="valor1">Ensino Medio completo</option>
                    <option value="valor2" selected>Ensino Médio Completo</option>
                    <option value="valor3">Superior Incompleto</option>
                    <option value="valor3">Superior Completo</option>
                    
                </select>
           
            </Formulario>

      </StyleEtapaUm >
    );

    }
  }
  
  export default Etapa1;
  