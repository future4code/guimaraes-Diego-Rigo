import React from 'react';
import './App.css';
import CardGrande from './components/CardGrande/CardGrande';
import ImagemButton from './components/ImagemButton/ImagemButton';
import CardPequeno from './components/CardPequeno/CardPequeno';
import styled from 'styled-components';

const Title = styled.h2`
  display: flex;
  justify-content: center;
  margin-bottom: 20px;
  
` 
// App.css

const AppContainer = styled.div `
  display: flex;
  flex-direction: column;
  align-items: center;
  margin-top: 30px;

`

const PageSectionContainer = styled.div`
  width: 40vw;
  margin: 10px 0;

` 

//CardGrande


function App() {
  return (
    <AppContainer>
      <PageSectionContainer>
        <Title>Dados pessoais</Title>
        <CardGrande 
          imagem="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcQi_NxyISQ2Re9OA6kYVSrMMQv5nH5J947sgRMI54d_BOs2pwsyj0gmOKJYdTARAurS7ww&usqp=CAU" 
          nome="Diego Rigo" 
          descricao="Oi, eu sou o Diego. Sou um dos alunos da Labenu. Estou amando a materia de React, e espero domina-la o mais breve possível."
        />
        
        <ImagemButton 
          imagem="https://image.flaticon.com/icons/png/512/117/117472.png" 
          texto="Ver mais"
        />
      </PageSectionContainer>

      <PageSectionContainer>
        <Title>Contatos</Title>
        <CardPequeno
        imagem="https://i2.wp.com/multarte.com.br/wp-content/uploads/2020/05/mail_122991.png?resize=512%2C512&ssl=1"
        nome="Email:"
        descricao="diegorigo2@gmail.com"  

        />
      </PageSectionContainer>

      <PageSectionContainer>
        <CardPequeno
        imagem="https://png.pngtree.com/png-vector/20190419/ourmid/pngtree-vector-location-icon-png-image_956397.jpg"
        nome="Endereço:"
        descricao="Rua Ruby, 757, Montreal - Belo horizonte/MG"  

        />
      </PageSectionContainer>

      <PageSectionContainer>
        <Title>Experiências profissionais</Title>
        <CardGrande 
          imagem="https://s3.amazonaws.com/future4.com.br/static/headf4-c492117ca2373dc85ca81bf715b3dc2a.png" 
          nome="Labenu" 
          descricao="Formando desenvolvedores para o mercado de trabalho!" 
        />
        
        <CardGrande 
          imagem="https://cio.com.br/wp-content/uploads/2019/11/por-que-a-linguagem-rust-esta-em-ascensao.jpg" 
          nome="Desenvolvedor Front-end" 
          descricao="Freelancer de desenvolvimento." 
        />

        <CardGrande 
          imagem="https://gestao-obra.engwhere.com.br/wp-content/uploads/sites/3/2018/11/controle-de-qualidade.png" 
          nome="Associação Brasileira de Angus" 
          descricao="Certificador de Qualidade." 
        />
      </PageSectionContainer>

      <PageSectionContainer>
        <Title>Minhas redes sociais</Title>
        <ImagemButton 
          imagem="https://d2v9ipibika81v.cloudfront.net/uploads/sites/261/2017/01/facebook-logo-3.png" 
          texto="Facebook" 
        />        

        <ImagemButton 
          imagem="https://logodownload.org/wp-content/uploads/2014/09/twitter-logo-1-1.png" 
          texto="Twitter" 
        />        
      </PageSectionContainer>
    </AppContainer >
  );
}

export default App;
