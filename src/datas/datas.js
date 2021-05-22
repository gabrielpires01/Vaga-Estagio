import React from 'react';
import { scaleLinear, max, extent, scaleTime, timeFormat} from 'd3';
import * as d3 from 'd3';
import { useData } from '../requests/dataReq';
import { CoordYContrario } from '../coords/coordY';
import { CoordXCircu } from '../coords/coordX';
import { MarcasLinha } from '../marcas/marcas';

const width = 900;
const height = 500;
const margin = {top:20,bottom:20,left:100,right:20}
const innerHeight = height - margin.top - margin.bottom
const innerWidth = width - margin.left - margin.right

function Datas () {
    const data = useData();

    if(!data) {
        return <pre>Loading...</pre>
    }

    let noticiasFrei = 0;
    let noticiasCriv = 0;
    let diasCriv = [];
    let diasFrei = [];
    let chaves = {};

    const xValue = d => d;


    for (let i = 0; i < data.length; i++) {
        if (data[i].candidato === "Crivella") {
            noticiasCriv += 1
            diasCriv.push(data[i].date_published)
        } else if (data[i].candidato === "Freixo") {
            noticiasFrei += 1
            diasFrei.push(data[i].date_published)
        }
    }

    const xTickFormat = timeFormat("%b %d");

    for (let i = 0; i < diasFrei.length; i++) {
        chaves[diasFrei[i]] = diasFrei.length - i;
    }

    let candidatos = {'Crivella':noticiasCriv,'Freixo':noticiasFrei}

    const line = d3.line()
        .x(d => xScale(d[0]))
        .y(d => yScale(d[1]))

    const xScale = scaleTime()
        .domain(extent(diasCriv, xValue))
        .range([0, innerWidth])
        .nice()
    
    const yScale = scaleLinear()
        .domain([0, max(Object.values(candidatos), d => d)])
        .range([innerHeight, 0])


    return (
    <svg className='noticiasTempo' width={width} height={height}>
        <g transform ={`translate(${margin.left},${margin.right})`} >
            <CoordXCircu xScale={xScale} innerHeight={innerHeight} tickFormat={xTickFormat}/>
            <CoordYContrario yScale={yScale} innerWidth={innerWidth}/>
            <MarcasLinha x={Object.entries(chaves)} line={line} />
        </g>
    </svg>
    )
}

export default Datas