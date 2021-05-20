import { scaleLinear,max, scaleBand } from 'd3';
import { useData } from '../requests/dataReq'
import { CoordXContrario } from '../coords/coordX'
import { CoordYContrario } from '../coords/coordY'
import { MarcasContrario } from '../marcas/marcas'


const width = 700;
const height = 600;
const margin = {top:30,bottom:30,left:100,right:20}

function Jornais () {
    const data = useData();
    let jornais = [];
    let numeros = []

    

    for (let i = 0; i < data.length; i++) {
        if (!jornais.includes(data[i].source)) {
            jornais.push(data[i].source)
        }
    }
    for (let i = 0; i < jornais.length; i++){
        let quantidade = 0;
        for(let j = 0; j < data.length; j++) {
            if(jornais[i] === data[j].source) {
                quantidade++
            }
        }
        numeros.push(quantidade)
    }

    const innerHeight = height - margin.top - margin.bottom
    const innerWidth = width - margin.left - margin.right

    const yScale = scaleLinear()
        .domain([0,max(numeros.slice(0,10), d => d)])
        .range([innerHeight, 0])

    const xScale = scaleBand()
        .domain(jornais.slice(0,10))
        .range([0, innerWidth])
        .padding(0.1)

    console.log(numeros.slice(0,10))
    
    return (
        <svg width={width} height={height}>
            <g transform ={`translate(${margin.left},${margin.right})`} >
                <CoordXContrario yScale={xScale} innerWidth={innerWidth} innerHeight={innerHeight}/>
                <CoordYContrario xScale={yScale}/>
                <text x={innerWidth/2} textAnchor='middle' y='-8'>Número de notícias por Jornal</text>
                <MarcasContrario 
                    x={jornais}
                    xScale={yScale}
                    yScale={xScale}
                    numeros={numeros}
                    innerHeight={innerHeight}
                />
            </g>
        </svg>
    )
}


export default Jornais