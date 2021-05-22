export const Marcas = ({x,xScale,yScale,numeros}) => 
    x.map((d, i)=> (
        <rect
            className='barras'
            key={d}
            x={0} 
            y={yScale(d)} 
            width={xScale(numeros[i])} 
            height={yScale.bandwidth()}
        >
            <title>{numeros[i]}</title>
        </rect>
    ))

export const MarcasContrario = ({innerHeight,x,xScale,yScale,numeros}) => 
    x.map((d, i)=> (
        <rect
            className='barras'
            key={d}
            y= {yScale(numeros[i])} 
            x={xScale(d)} 
            height={innerHeight - yScale(numeros[i])} 
            width={xScale.bandwidth()}
        >
            <title>{numeros[i]}</title>
        </rect>
    ))

export const MarcasLinha = ({x,line}) => 
    x.map((d)=> (
        <path
            d={line(d)}
        />
    ))