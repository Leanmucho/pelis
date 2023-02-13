import { useState, useEffect } from 'react';

const api_key = `8ea666ccaa6aaa3bde0f7f63fdc80f64`;
const url = 'https://api.themoviedb.org/3/movie/550?api_key=' + api_key;

export const useFetch = (url) => {
    const [data, setData] = useState(null);
    const [isPending, setIsPending] = useState(true);
    const [error, setError] = useState(null);

    useEffect(()=>{
        const getData = async (url) => {
            try {
                let res = await fetch(url)

                if(!res.ok){
                    throw {
                        err:true, 
                        statu:res.status, 
                        statusText: !res.statusText ? "Ocurrio un error" : res.statusText}
                }
                
                let data = await res.json();

                setIsPending(false);
                setData(data);
                setError({err: false});

                
            } catch (err) {
                setIsPending(true);
                setError(err);
            }
            //console.log(json);


        };
        getData(url);
    },[url]);

    return {data, isPending, error}
}