import React, { useEffect } from "react";
import Search from "../navBar/Search";
import Categories from "../categories/Categories";
import Carrousel from "../reusable/Carrousel";
import {getMovies} from "../reusable/apiFunction"


import "./Home.css";

export default function Home(){
    useEffect(()=>{
        getMovies()
    },[])
    return(
        <div className="home">
            <Search />
            <Categories />
            <Carrousel />

        </div>
    )
}

