import { useEffect, useState } from 'react';

export const useData = (url) => {
    const [state, setState] = useState({
        loading: true,
        data: []
    })

    useEffect(() => {
        getDatos(url)
        // eslint-disable-next-line
    }, [url])

    const getDatos = async() => {
        setState({
            loading: true,
            data: []
        });
        const resp = await fetch(url);
        const data = await resp.json();
        setState({
            loading: false,
            data: data
        })
    }

    return state;
}