import React, {} from "react";
import NavBar from "../navBar/NavBar";
import Categories from "../categories/Categories";


import "./Home.css";

export default function Home(){
    return(
        <div className="home">
            <NavBar />
            <Categories />
        </div>
    )
}

