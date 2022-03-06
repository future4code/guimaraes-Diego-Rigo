import React from "react";
import axios from "axios";

const urlCreateUser =
  "https://us-central1-labenu-apis.cloudfunctions.net/labenusers/users";

const headers = {
  headers: {
    Authorization: "diego-rigo-guimaraes"
  }
};


class pageDois extends React.Component {
    
    componentDidMount() {
        this.getAllUsers ();
      }

      getAllUsers = () => {
        axios
          .get(urlCreateUser, headers)
          .then((res) => {
             console.log(res.data.result.list);
    
            
          })
          .catch((err) => {
            console.log(err.response);
          });
      };
   
    render(){

        return(
            <div>
                <button onClick={this.props.onClickLogout}>Trocar</button>

                <p>Procurar Usuários</p>
                <input type="text" placeholder="Quem você procurar?"/>
                <button>Salvar</button>
            </div>
            
        )
    }
}

export default pageDois;