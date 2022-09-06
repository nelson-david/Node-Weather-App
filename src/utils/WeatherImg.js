import { weatherIcons } from "../data/weatherIcons";

const img = "https://res.cloudinary.com/ruthless-labs/image/upload/v1662410896/hurle-weather/27_o5xsvg.png";

const WeatherImg = ({ weather }) => {

    console.log("WTH: ", weather);

    return (
        <img
            src={weather?weatherIcons["rain"].icon:img}
            alt={img}
        />
    )
}

export default WeatherImg;