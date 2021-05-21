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

export const CoordYContrario = ({yScale,innerWidth,innerHeight}) => 
    yScale.ticks().map(tickValue => (
        <g className="tick" key={tickValue} transform={`translate(0,${yScale(tickValue)})`}>
            <line x2={innerWidth}/>
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