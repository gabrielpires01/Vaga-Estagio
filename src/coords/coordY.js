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