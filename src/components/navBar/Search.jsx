import "./Search.css"
import iconoPelis from "../../assets/ico-pelis.png"


export default function Search(){
    return(
        <div className="nb-main">
            <div className="nb-container">
                <Searcher />
                <Logo />
            </div>
        </div>
    )
}

function Searcher(){
    return(
        <div className="nb-searcher">
            <form 
                action=""
                method="GET"
                className="nb-form"
            >
                <button
                    type="submit"
                    className="ico-search"
                ><svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" fill="currentColor" className="bi bi-search" viewBox="0 0 15 14">
                <path d="M11.742 10.344a6.5 6.5 0 1 0-1.397 1.398h-.001c.03.04.062.078.098.115l3.85 3.85a1 1 0 0 0 1.415-1.414l-3.85-3.85a1.007 1.007 0 0 0-.115-.1zM12 6.5a5.5 5.5 0 1 1-11 0 5.5 5.5 0 0 1 11 0z"/>
                </svg></button>

                <input 
                className="nb-input"
                autoComplete="off"
                placeholder="Buscar en peliculas y series...">
                </input>

            </form>
        </div>
    )
}

function Logo(){
    return(
        <div className="nb-logo">
            <img src={iconoPelis} />
            <div className="dropdown">
                <a className="btn btn-secondary dropdown-toggle" href="#" role="button" data-bs-toggle="dropdown" aria-expanded="false">
                    
                </a>

                <ul className="dropdown-menu">
                    <li><a className="dropdown-item" href="#">Login</a></li>
                    <li><a className="dropdown-item" href="#">Register</a></li>
                </ul>
            </div>  
        </div>
    )
}