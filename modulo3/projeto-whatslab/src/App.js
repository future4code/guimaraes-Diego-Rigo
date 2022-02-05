import React from "react";
import styled from "styled-components";

const CardProf = styled.div`
  display: flex;
  margin: 8px 0;
  padding: 0 8px;
  align-items: center;
`;

const SectioInput = styled.div`
position: absolute;
bottom: 0;
`

const Arcticle = styled.div`
background-color: antiquewhite;
height: 100vh;
max-width: 50%;
margin: auto;
border: 1px solid black;
display: flex;
flex-direction: column-reverse;
`
const TextoLaranja = styled.p`
  color: black;
  padding-left: 10px
`;

class App extends React.Component {
  state = {
    inputUsuario: "",
    inputMensagem: "",
    chat: [ ]
  };

  guardaNome = (event) => {
    this.setState({ inputUsuario: event.target.value });
  };

  guardaIdade = (event) => {
    this.setState({ inputMensagem: event.target.value });
  };

  balaoChat = () => {
    const chatEnviado = {
      id: Math.random(),
      usuario: this.state.inputUsuario,
      mensagem:(this.state.inputMensagem)
    };

    
    const envioChat = [...this.state.chat, chatEnviado];


    this.setState({ chat: envioChat });
    this.setState({ inputUsuario: "", inputMensagem: "" });
  };

  // Essa é a função que vai ser chamada nos botões de deletar dos cards
  deletaBalaoChat = (idDoProfParaDeletar) => {
    const copiaChat = [...this.state.chat];

    const deletarChat = copiaChat.filter((prof) => {
      return prof.id !== idDoProfParaDeletar;
    });

    this.setState({ chat: deletarChat });
  };

  render() {
    const listaComponentes = this.state.chat.map((index) => {
      return (
        <CardProf key={index.id}>
          <b>{index.usuario + ":  "}</b>
          <TextoLaranja>{index.mensagem}</TextoLaranja>
           <button onClick={() => this.deletaBalaoChat(index.id)}>X</button> 
        </CardProf>
      );
    });

    return (
      <Arcticle>
          <SectioInput>
          <input
            value={this.state.inputUsuario}
            onChange={this.guardaNome}
            placeholder="Usuário"
          />
          <input
            value={this.state.inputMensagem}
            onChange={this.guardaIdade}
            placeholder="Mensagem"
          />
          <button onClick={this.balaoChat}>Adicionar</button>
          </SectioInput>
          {listaComponentes}
      </Arcticle>
    
    
    );
  }
}

export default App;
