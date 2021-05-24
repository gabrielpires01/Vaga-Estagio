import { scaleLinear,max, scaleBand } from 'd3';
import { useData } from '../requests/dataReq'
import { CoordXContrario } from '../coords/coordX'
import { CoordYContrario } from '../coords/coordY'
import { MarcasContrario } from '../marcas/marcas'


const width = 600;
const height = 350;
const margin = {top:30,bottom:50,left:130,right:20}

function Jornais () {
    const data = useData();
    let jornais = [];
    let numeros = [];

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
        .domain([0,max(numeros.slice(0,10), d => d)]).nice()
        .range([innerHeight,0])

    const xScale = scaleBand()
        .domain(jornais.slice(0,10))
        .range([0, innerWidth])
        .padding(0.1)

    return (
        <svg className='graf' id='jornais' width={width} height={height}>
            <g transform ={`translate(${margin.left},${margin.right})`} >
                <CoordXContrario xScale={xScale}  innerHeight={innerHeight}/>
                <CoordYContrario yScale={yScale} innerWidth={innerWidth}/>
                <text className='label' x={innerWidth/2} textAnchor='middle' y={innerHeight + 50}>Principais Jornais</text>
                <text className='label' 
                    textAnchor='middle' 
                    transform= {`translate(${-85}, ${innerHeight/2}) rotate(270)`}
                >
                    Notícias por Jornal
                </text>
                <MarcasContrario 
                    x={jornais.slice(0,10)}
                    xScale={xScale}
                    yScale={yScale}
                    numeros={numeros}
                    innerHeight={innerHeight}
                />
            </g>
        </svg>
    )
}


export default Jornais