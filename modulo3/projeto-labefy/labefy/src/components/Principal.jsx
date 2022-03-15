import React from 'react'
import styled from 'styled-components';
import axios from 'axios';



const Header = styled.div`
background-color: rgb(54, 54, 54);
width: 74vw;
height: 10vh;
  ul{
    display: flex;
    flex-direction: row;
    list-style: none;
    justify-content: end;
  }
  ul,li{
    padding: 10px;
    color:white;
    font-family: Arial, Helvetica, sans-serif;
    cursor: pointer;
  }
`

const Body = styled.div`

`
const Geral = styled.div`
display: flex;
  flex-direction: column;
`



class Principal extends React.Component {
    state = {
        playlists: []
    }

    componentDidMount() {
        this.pegarPlaylist()
    }
    pegarPlaylist = () =>{
        axios
        .get('https://us-central1-labenu-apis.cloudfunctions.net/labefy/playlists', 
        {
            headers: {
                Authorization: "diego-rigo-guimaraes"
            }
        }
      )
      .then((res) => {
          this.setState({playlists: res.data.result.list})
          console.log(res.data.result.list)})
      .catch((err) =>console.log(err))
    }
 
 
    render() {
    const playListsRenderizadas = this.state.playlists.map((playList) => {
        return <p key={playList.id}>{playList.name}</p>
    })
    return (
        <>
<Geral>
     <Header>
         <ul>
             <li>Premium</li>
             <li>Suporte</li>
             <li>Baixar</li>
         </ul>
     </Header>
     <Body>
        <h1>Minhas PlayList</h1>
        {playListsRenderizadas}
     </Body>

</Geral>
     </>
     
    );
  }
}


export default Principal;