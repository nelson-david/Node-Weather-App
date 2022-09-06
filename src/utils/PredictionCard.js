import "./style.css";

const PredictionCard = ({ prediction }) => {
    return (
        <li className="predictionCard">
            <div className="predictionImgDiv">
                <img
                    src={prediction.img}
                    alt={prediction.img}
                />
            </div>
            <div className="predictionContents">
                <h3>{prediction.probability}</h3>
                <h4>{prediction.title}</h4>
            </div>
        </li>
    )
}

export default PredictionCard;