import "./Card.css"

export default function Card(props){

    return(
        <div className="ct-card">
            <a href="#">
            <div class="card text-bg-dark">
                <div class="card-img-overlay">
                    <h5 class="card-title">{props.svg}</h5>
                    <p class="card-text"><strong>{props.cardTitulo}</strong></p>
                </div>
            </div>  
            </a>
        </div>
    )
}