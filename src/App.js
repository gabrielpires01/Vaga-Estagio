import React from 'react';
import ReactDOM from 'react-dom';
import './index.css'
import * as d3 from 'd3'

const dadosLink = './dados.csv'

d3.csv('https://gist.githubusercontent.com/gabrielpires01/2f2b2113a181f0bf1d48b1fb37956e80/raw/e01fd1d883f37194e7e5fcd360368539fea9906f/candidatos.csv', function(dado) {
    console.log(dado)
})

function App()  {
    return (
        <div>
            <h1>Isso ira gerar graficos e outras coisas importantes sobre a disputa de Freixo e Crivella.</h1>
        </div>
    )
    
}

export default App;