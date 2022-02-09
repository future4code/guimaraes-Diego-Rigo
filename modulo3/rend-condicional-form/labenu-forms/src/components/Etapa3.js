import React from 'react'
import styled from 'styled-components'


const StyleEtapaTres = styled.div`
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
        margin-top:15px;
    }
   
    button{
        margin-top:20px
    }
`


class Etapa3 extends React.Component {
    render() {
    return (
      <StyleEtapaTres  >
        <h1>ETAPA 3 - INFORMAÇÕES GERAIS DE ENSINO</h1>
        <Formulario action="#" method="post">

               <label for="nome">7. Por que você não terminou um curso de graduação?</label>
                <input type="text" id="nome" />

                <label for="nome">8. Você fez algum curso complementar?</label>
                <input type="text" id="nome" />

                <select name="select">
                    <option value="valor2" selected>Nenhum</option>
                    <option value="valor1">Curso Técnico</option>
                    <option value="valor3">Curso de Inglês</option>
                    
                </select>
            
            </Formulario>

      </StyleEtapaTres  >
    );

    }
  }
  
  export default Etapa3;
  