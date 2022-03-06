import React from "react";
import axios from "axios";

const urlCreateUser =
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

const headers = {
  headers: {
    Authorization: "diego-rigo-guimaraes"
  }
};

class pageUm extends React.Component {

    state = {
        nameUser: [],
        emailUser: ""
      };

      componentDidMount() {
        this.getAllUsers ();
      }

      getAllUsers = () => {
        axios
          .get(urlCreateUser, headers)
          .then((res) => {
            // console.log(res.data.result.list);
    
            this.setState({ nameUser: res.data.result.list });
          })
          .catch((err) => {
            console.log(err.response);
          });
      };
    
      //Criando novos Usuarios

      createUser = () => {
       
        const body = {
            name: this.state.nameUser,
            email:this.state.emailUser,
          };
          axios
            .post(urlCreateUser, body, headers)
            .then((res) => {
             
        
              alert(`O usuario ${this.state.nameUser} foi adicionado com sucesso`);
              // Limpamos o imput após o usuário digitar
              this.setState({emailUser: ""});
              this.setState({nameUser: ['']});
              
              // Chamamos a função para pegar todas os usuarios
             // this.getAllUsers();
            })
            
            .catch((err) => {
              console.log(err.response.data.message);
              alert(`Error!! O usuario ${this.state.nameUser} não foi adicionado`);
            });
        };
    
        onTextNameChange = (event) => {
            this.setState({ nameUser: event.target.value });
          };
    
          onTextEmailChange = (event) => {
            this.setState({ emailUser: event.target.value });
          };


    render(){

       

        return(
       <div>
            <button onClick={this.props.onClickLogin}>Troca de tela</button>
            <input type="text"
            value={this.state.nameUser}
            placeholder="Nome"
            onChange={this.onTextNameChange}
            
            
            /> 
            <input type="email" 
            value={this.state.emailUser}
            placeholder="Email"
            onChange={this.onTextEmailChange}
            />
            <button onClick={this.createUser}>Enviar</button> 
      
       </div>
        )
    }

}

export default pageUm;