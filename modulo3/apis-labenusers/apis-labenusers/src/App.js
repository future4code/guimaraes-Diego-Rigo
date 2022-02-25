import React from "react";
import './App.css';
import PageUm from "./components/pageUm";
import PageDois from "./components/pageDois";


export default class App extends React.Component {
  state = {
    trocar: false
  };

 

  logar = () => {
    this.setState({ trocar: true });
    
  };

  logout = () => {
    this.setState({ trocar: false });
    
  };

  render() {
    let pagina = this.state.trocar ? (
      <PageDois onClickLogout={this.logout} />
    ) : (
      <PageUm onClickLogin={this.logar} />
    );

    return (
      <div className="App">
        {pagina}
        
        
      </div>
    );
  }
}
