
export const CoordX = ({xScale,innerHeight}) => 
    xScale.ticks().map(tickValue => (
        <g className="tick" key={tickValue} transform={`translate(${xScale(tickValue)},0)`}>
            <line y2={innerHeight}/>
            <text
                style={{textAnchor: 'middle'}} 
                dy='.71em' 
                y={innerHeight + 3}
            >
                {tickValue}
            </text>
        </g> 
    ));

export const CoordXContrario = ({xScale,innerHeight}) => 
    xScale.domain().map(tickValue => (
        <text
            className="jornais"
            key={tickValue}
            style={{textAnchor:'end'}}
            dx='1.3em'
            y={innerHeight + xScale.bandwidth()/2 }
            x={xScale(tickValue)  + xScale.bandwidth()/2} 
        >
            {tickValue}
        </text>
    ))