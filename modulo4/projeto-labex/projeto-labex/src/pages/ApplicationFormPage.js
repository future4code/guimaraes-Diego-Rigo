import React from "react";

function AplicationFormPage() {
    return (
      <div className="App">
        <h1>Inscreva-se para uma viagem</h1>
       
        <form>
            <select>
                <option placeholder="Escolha uma viajem" value="">Jupiter</option>
                <option  value="">Marte</option>
            </select><br/>
            <input placeholder='Nome'></input><br/>
            <input placeholder='Idade'></input><br/>
            <input placeholder='Texto de candidatura'></input><br/>
            <input placeholder='Profissão'></input><br/>

            <select>
                <option placeholder="Escolha um país" value="">Brasil</option>
                <option  value="">Estados unidos</option>
            </select><br/>
                
        </form>

        <button>Voltar </button>
        <button>Enviar</button>
      </div>
    );
  }
  
  export default AplicationFormPage;