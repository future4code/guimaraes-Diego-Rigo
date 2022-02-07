import React from "react";
import styled from "styled-components";

const CardChat = styled.div`
  display: flex;
  justify-content: flex-end;
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


  deletaBalaoChat = (idChat) => {
   const alert = window.confirm( 'Deseja deletar mensagem?')
    if (alert === true){
      const copiaChat = [...this.state.chat];
      const deletarChat = copiaChat.filter((index) => {
        return index.id !== idChat;
      });

      this.setState({ chat: deletarChat });
    };
   }
   

  render() {

    const listaComponentes = this.state.chat.map((index) => {
      return (
        
        <CardChat className="chatCard" key={index.id} 
        onClick={() => this.deletaBalaoChat(index.id)}>
          <b>{index.usuario + ":  "}</b>
          <TextoLaranja>{index.mensagem}</TextoLaranja>
        </CardChat>
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
          <input className="inputMsg"
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
