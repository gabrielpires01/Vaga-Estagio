export const Marcas = ({x,xScale,yScale,numeros}) => 
    x.map((d, i)=> (
        <rect
            className='barras'
            key={d}
            x={0} 
            y={yScale(d)} 
            width={xScale(numeros[i])} 
            height={yScale.bandwidth()}
        />
    ))

export const MarcasContrario = ({innerHeight,x,xScale,yScale,numeros}) => 
    x.map((d, i)=> (
        <rect
            className='barras'
            key={d}
            y='0s' 
            x={yScale(d)} 
            height={xScale(numeros[i])} 
            width={yScale.bandwidth()}
        />
    ))
