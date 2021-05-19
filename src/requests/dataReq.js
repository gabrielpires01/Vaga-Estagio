import React, { useEffect, useState } from 'react';
import { csv } from 'd3';

const csvUrl = 'https://gist.githubusercontent.com/gabrielpires01/2f2b2113a181f0bf1d48b1fb37956e80/raw/e01fd1d883f37194e7e5fcd360368539fea9906f/candidatos.csv'

export const useData = () => {
    const [data, setData] = useState(null)
    
    // fetching data
    useEffect(() => {
        csv(csvUrl).then(setData);
    }, []);

    if(!data) {
        return <pre>Loading...</pre>
    }

    return data
}