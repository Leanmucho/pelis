import "./Card.css"

export default function Card(props){
    const {svg,cardTitulo} = props;
    return(
        <div className="ct-card">
            <a href="#">
                <div className="card text-bg-dark">
                    <div className="card-img-overlay">
                        <h5 className="card-title">{svg}</h5>
                            <p className="card-text"><strong>{cardTitulo}</strong></p>
                    </div>
                </div>  
            </a>
        </div>
    )
}