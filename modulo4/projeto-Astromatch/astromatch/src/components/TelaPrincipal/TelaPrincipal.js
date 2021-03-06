import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { DivContainer, DivCard, FotoPerfilImg, NomeP, IdadeP, BioP, DivBotoes, BtnInteracao, BtnVerMatches } from './StyledTelaPrincipal'

export const url = `https://us-central1-missao-newton.cloudfunctions.net/astroMatch/diego` 

const TelaPrincipal = (props) => {
  const [perfil, setPerfil] = useState([])

  const getProfile = () => {
    axios
      .get(`${url}/person`)
      .then((res) => setPerfil(res.data.profile))
      .catch((err) => console.log(err))
  }

  useEffect(() => getProfile(), [])

  const curtirPerfil = () => {
    const body = {
      id: perfil.id,
      choice: true,
    }

    axios
      .post(`${url}/choose-person`, body)
      .then((res) => getProfile())
      .catch((err) => console.log(err))
  }

  const descurtirPerfil = () => {
    const body = {
      id: perfil.id,
      choice: false,
    }

    axios
      .post(`${url}/choose-person`, body)
      .then((res) => getProfile())
      .catch((err) => console.log(err))
  }

  return (
    <DivContainer>
      <DivCard>
        <FotoPerfilImg src={perfil.photo}/>
        <NomeP>{perfil.name}</NomeP>
        <IdadeP>{perfil.age}</IdadeP>
        <BioP>{perfil.bio}</BioP>
      </DivCard>
      <DivBotoes>
        <BtnInteracao onClick={curtirPerfil}>&#128293;</BtnInteracao>
        <BtnInteracao onClick={descurtirPerfil}>&#128078;</BtnInteracao>
        <br/>
        <br/>
        <BtnVerMatches onClick={props.onChangeTelaMatch}>Ver matches</BtnVerMatches>
      </DivBotoes>

    </DivContainer>
  )
}

export default TelaPrincipal;