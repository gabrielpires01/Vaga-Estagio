export const CoordY = ({yScale}) => 
    yScale.domain().map(tickValue => (
        <text
            key={tickValue}
            style={{textAnchor:'end'}}
            dy='0.32em'
            x='-9'
            y={yScale(tickValue) + yScale.bandwidth()/2} 
        >
            {tickValue}
        </text>
    ))

export const CoordYContrario = ({xScale,innerWidth,innerHeight}) => 
    xScale.ticks().map(tickValue => (
        <g className="tick" key={tickValue} transform={`translate(0,${xScale(tickValue)})`}>
            <line x2={innerWidth} y2={innerHeight} />
            <text
                style={{textAnchor: 'middle'}} 
                dx='.71em' 
                y='0'
                x='-60'
            >
                {tickValue}
            </text>
        </g> 
    ));