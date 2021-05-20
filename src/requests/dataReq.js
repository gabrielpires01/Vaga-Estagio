import React, { useEffect, useState } from 'react';
import { tsv } from 'd3';

const tsvUrl = 'https://gist.githubusercontent.com/gabrielpires01/c746854952365835d37513e932842572/raw/candidatos.tsv'

export const useData = () => {
    const [data, setData] = useState(null)
    
    // fetching data
    useEffect(() => {
        tsv(tsvUrl).then(setData);
    }, []);

    if(!data) {
        return <pre>Loading...</pre>
    }

    return data
}