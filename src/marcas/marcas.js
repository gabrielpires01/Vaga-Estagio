export const Marcas = ({candidatos,xScale,yScale,numerosNot}) => 
    candidatos.map((d, i)=> (
        <rect
            key={d}
            x={0} 
            y={yScale(d)} 
            width={xScale(numerosNot[i])} 
            height={yScale.bandwidth()}
        />
    ))
