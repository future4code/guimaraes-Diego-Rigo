import React from 'react'
import styled from 'styled-components'


const StyleEtapaDois = styled.div`
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
   
    button{
        margin-top:20px
    }
`


class Etapa2 extends React.Component {
    render() {
    return (
      <StyleEtapaDois >
        <h1>ETAPA 2 - INFORMAÇÕES DO ENSINO SUPERIOR</h1>
        <Formulario action="/pagina-processa-dados-do-form" method="post">

               <label for="nome">5. Qual Curso</label>
                <input type="text" id="nome" />

                <label for="nome">6. Qual Unidade de Ensino?</label>
                <input type="text" id="nome" />
            
        
            
            </Formulario>

      </StyleEtapaDois >
    );

    }
  }
  
  export default Etapa2;
  