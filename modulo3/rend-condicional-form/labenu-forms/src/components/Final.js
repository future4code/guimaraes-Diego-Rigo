import React from 'react'
import styled from 'styled-components'


const StyleFinal = styled.div`
    text-align:center;
   
`


class Final extends React.Component {
    render() {
    return (
      <StyleFinal  >
        <h3>O FORMULÁRIO ACABOU</h3>
        <p>Muito obrigado por participar! Entraremos em contato!</p>
      </StyleFinal  >
    );

    }
  }
  
  export default Final;