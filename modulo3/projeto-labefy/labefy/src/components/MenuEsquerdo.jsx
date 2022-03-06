import axios from 'axios';
import React from 'react'
import styled from 'styled-components';
import Principal from './Principal';



const Aside = styled.div`
background-color: black;
width: 26vw;
height: 100vh;

    h1, p{
        color:white;
        font-family: Arial, Helvetica, sans-serif;
    }
`

class MenuEsquerdo extends React.Component {
    state ={
        inputCriarPlayList: ""
    }
  
    criarPlaylist = () => {
        const body = {
            name: this.state.inputCriarPlayList 
        }

        axios
        .post("https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists",body, {
            headers: {
                Authorization: "diego-rigo-guimaraes"
            }
        }
      )
        .then(res => {
            alert("PlayList criada com sucesso")
            
        })
        .catch(err => console.log(err.response))
    }

    alterarInput = (event) =>{
        this.setState({inputCriarPlayList: event.target.value})
    }
  render() {
    return (
      <Aside>
        <h1>Labefy</h1>

        <div>
            <p>Inicio</p>
            <p>Criar Playlist</p>
            <input placeholder="Nome da PlayList" 
            value={this.state.inputCriarPlayList}
            onChange={this.alterarInput}
            />
            <button onClick={this.criarPlaylist}>Criar</button>

        </div>
        
      </Aside>
    );
  }
}


export default MenuEsquerdo;