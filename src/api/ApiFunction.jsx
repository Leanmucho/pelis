import React,{useState, useEffect} from "react";
import { useFetch } from "../components/hooks/useFetch";



export default function ApiFunction(){
    const api_key = `8ea666ccaa6aaa3bde0f7f63fdc80f64`;
    const url = 'https://api.themoviedb.org/3/movie/550?api_key=' + api_key + "&language=es";
    const [movie, setMovie] = useState(null)
    let image_path = movie? 'https://image.tmdb.org/t/p/original/' + movie?.poster_path : null;

    const {data} = useFetch(url)
    useEffect(() => {
        setMovie(data)
    }, [data])
    
    console.log(image_path)
    console.log(data)
}
