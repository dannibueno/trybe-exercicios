// src/App.js
import React from 'react';

// 5 - Agora você vai converter sua aplicação para uma que conta o número de cliques dado em cada botão! Primeiramente, defina um estado inicial para a contagem de cada botão.
// 6 - Agora, quando um botão for clicado, altere de forma assíncrona o estado deste botão de zero para um.
// 7 - Por fim, baseie-se no estado anterior ao atual para incrementar a contagem de cliques cada vez que um botão for clicado!
// 8 - Defina uma lógica que estabeleça que, quando o número de cliques no botão for par, ele deve ser verde.
//  9 - A cor atual do botão deve ser impressa num console.log() de dentro da função do evento que lida com o clique. Faça isso acontecer!


class App extends React.Component {
  constructor() {
    super()
    this.handleButtonOne = this.handleButtonOne.bind(this)
    this.handleButtonTwo = this.handleButtonTwo.bind(this)
    this.handleButtonThree = this.handleButtonThree.bind(this)

    this.state = {
      clicksBtnOne: 0,
      clicksBtnTwo: 0,
      clicksBtnThree: 0,

    }
  }

  handleButtonOne() {
    this.setState(({ clicksBtnOne }) => ({
      clicksBtnOne: clicksBtnOne + 1,
    }), () => {
      console.log(`Botão 1 ${this.getButtonColor(this.state.clicksBtnOne)}`);
    });
  }

  handleButtonTwo() {
    // console.log('Clicou no botão 2!');
    this.setState((prevState) => ({
      clicksBtnTwo: prevState.clicksBtnTwo + 1,
    }));
  }

  handleButtonThree() {
    // console.log('Clicou no botão 3');
    this.setState((prevState) => ({
      clicksBtnThree: prevState.clicksBtnThree + 1,
    }));
  }

  getButtonColor(num) {
    // Essa função contém um ternário que realiza a lógica para mudarmos
    // a cor do botão para verde quando for um número par
    return num % 2 === 0 ? 'green' : 'white';
  }


  render() {
    const { clicksBtnOne, clicksBtnTwo, clicksBtnThree } = this.state;
    return (
      <div>
        <button
          onClick={this.handleButtonOne}
          style={{ backgroundColor: this.getButtonColor(clicksBtnOne) }}
        >
          Botão 1 | Count = {clicksBtnOne}
        </button>

        <button
          onClick={this.handleButtonTwo}
          style={{ backgroundColor: this.getButtonColor(clicksBtnTwo) }}
        >
          Botão 2 | Count = {clicksBtnTwo}
        </button>

        <button
          onClick={this.handleButtonThree}
          style={{ backgroundColor: this.getButtonColor(clicksBtnThree) }}
        >
          Botão 3 | Count = {clicksBtnThree}
        </button>
      </div>
    );
  }
}

// ********************************************************************************
// 1 Crie uma aplicação React com npx create-react-app fancy-buttons . Altere o componente App.js para que seja um componente de classe e contenha um botão associado a um evento que imprime um texto qualquer via console.log() . Não precisa se preocupar com a sintaxe correta para funções de eventos por enquanto!

// 2 - Faça com que sua aplicação exiba três botões lado a lado com textos diferentes. Cada botão clicado deve acionar um evento diferente, cada um escrevendo algo diferente no console do navegador via console.log() .
// ********************************************************************************

// import React from 'react';

// function handleButtonOne() {
//   console.log('Clicou no botão 1!');
// }

// function handleButtonTwo() {
//   console.log('Clicou no botão 2!');
// }

// function handleButtonThree() {
//   console.log('Clicou no botão 3');
// }

// class App extends React.Component {
//   render() {
//     return (
//       <div>
//         <button onClick={handleButtonOne}>Botão 1</button>
//         <button onClick={handleButtonTwo}>Botão 2</button>
//         <button onClick={handleButtonThree}>Botão 3</button>
//       </div>
//     )
//   }
// }

export default App;