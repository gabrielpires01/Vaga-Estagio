import React, { useEffect, useState } from 'react';
import { tsv } from 'd3';

const tsvUrl = 'https://gist.githubusercontent.com/gabrielpires01/c746854952365835d37513e932842572/raw/candidatos.tsv'

export const useData = () => {
    const [data, setData] = useState(null)
    
    // fetching data
    useEffect(() => {
        const row = d => {
            d.date_published = new Date(d.date_published);
            return d
        }

        tsv(tsvUrl, row).then(setData);
    }, []);

    if(!data) {
        return <pre>Loading...</pre>
    }

    return data
}