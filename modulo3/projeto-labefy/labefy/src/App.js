import React from 'react'
import './App.css';
import MenuEsquerdo from './components/MenuEsquerdo';
import Principal from './components/Principal';


class App extends React.Component {
  render() {
    return (
      <div className="App">
       <MenuEsquerdo />
       <Principal/>
      </div>
    );
  }
}


export default App;
