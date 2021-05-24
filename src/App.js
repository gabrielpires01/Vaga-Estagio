import React from 'react';
import './index.css'
import { scaleBand, scaleLinear, max} from 'd3';
import { useData } from './requests/dataReq'
import { CoordX } from './coords/coordX'
import { CoordY } from './coords/coordY'
import { Marcas } from './marcas/marcas'

const width = 500;
const height = 200;
const margin = {top:20,bottom:60,left:100,right:20}

function App()  {
    const data= useData()
    let noticiasFrei = 0;
    let noticiasCriv = 0;
    let candidatos = [];
    // numero de noticias dos candidatos

    for (let i = 0; i < data.length; i++) {
        if (data[i].candidato === "Crivella") {
            noticiasCriv += 1
        } else if (data[i].candidato === "Freixo") {
            noticiasFrei += 1
        }
    }
    let numerosNot = [noticiasCriv,noticiasFrei]

    // array dos candidatos
    for(let i = 0; i < data.length; i++) {
        if(!candidatos.includes(data[i].candidato) && (data[i].candidato === "Crivella" || data[i].candidato === "Freixo")) {
            candidatos.unshift(data[i].candidato)
        }

    }

    const innerHeight = height - margin.top - margin.bottom
    const innerWidth = width - margin.left - margin.right

    // define a escala y em relacao ao nome dos candidatos
    const yScale = scaleBand()
        .domain(candidatos)
        .range([0, innerHeight])
        .padding(0.2)

    // define a escala x em relacao ao nome dos candidatos
    const xScale = scaleLinear()
        .domain([600, max(numerosNot, d => d)])
        .range([0, innerWidth])

    return (
        <svg className='graf' id='candNums' width={width} height={height}>
            <g transform ={`translate(${margin.left},${margin.right})`} >
                <CoordX xScale={xScale} innerHeight={innerHeight}/>
                <CoordY yScale={yScale} />
                <text className='label' x={innerWidth/2} textAnchor='middle' y={innerHeight + 40}>Número de notícias por candidato</text>
                <Marcas 
                    x={candidatos}
                    xScale={xScale}
                    yScale={yScale}
                    numeros={numerosNot} />
            </g>
        </svg>
    )
    
}

export default App;