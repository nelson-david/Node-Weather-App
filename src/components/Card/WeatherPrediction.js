import PredictionCard from "../../utils/PredictionCard";

const WeatherPrediction = () => {

    const predictions = [
        {
            title: "Sun",
            probability: "23 km/h",
            img: "https://res.cloudinary.com/ruthless-labs/image/upload/v1662410441/hurle-weather/6_osy70f.png"
        },
        {
            title: "Humidity",
            probability: "30%",
            img: "https://res.cloudinary.com/ruthless-labs/image/upload/v1662447876/hurle-weather/33_o0wlmg.png"
        },
        {
            title: "Chance of cloud",
            probability: "23 km/h",
            img: "https://res.cloudinary.com/ruthless-labs/image/upload/v1662447416/hurle-weather/39_bv0of9.png"
        },
    ];

    return (
        <ul>
            {
                predictions.map((prediction, index) => {
                    return (
                        <PredictionCard
                            key={index}
                            prediction={prediction}
                        />
                    )
                })
            }
        </ul>
    )
}

export default WeatherPrediction;