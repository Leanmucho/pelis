import { useFetch } from "../hooks/useFetch";

export function getMovies(){
    const api_key = `8ea666ccaa6aaa3bde0f7f63fdc80f64`;
    const url = "https://api.themoviedb.org/3/movie/550?api_key=" + api_key + "";
    const serch =' https://api.themoviedb.org/3/search/movie?api_key='+ api_key +'&language=es&page=1&include_adult=true'
    console.log(url)
return
}
