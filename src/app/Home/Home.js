import Layout from "../../layouts/Layout";
import WeatherPrediction from "../../components/Card/WeatherPrediction";
import { useEffect, useState } from "react";
import Loader from "../../utils/Loader";
import WeatherImg from "../../utils/WeatherImg";
import axios from "axios";

const LandingPage = () => {

    const [weather, setWeather] = useState();
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("https://ipapi.co/json", { responseType: 'json' })
        .then((res) => {
            axios.get(`${process.env.REACT_APP_API_URL}/current.json?key=${process.env.REACT_APP_API_KEY}&q=${res.data.region}`)
            .then((res) => {
                setWeather(res.data);
                setLoading(false);
            })
            .catch((error) => {
                console.log("ERROR: ", error);
                setLoading(false);
            })
        })
        .catch((error) => {
            console.log("ERROR: ", error);
            setLoading(false);
        })
    }, [])

    return (
        <Layout>
        {
            loading?
            <Loader />
            :
            <section className="homeSection">
                <div className="row justify-content-center">
                    <div className="col-12">
                        <p className="title">
                            Today's Report
                        </p>
                        <div className="imgDiv">
                            <WeatherImg
                                weather={weather}
                            />
                        </div>
                        <div className="weatherDetails">
                            <h3>{weather?weather.current.condition.text:"Nothing"}</h3>
                            <h2>29</h2>
                        </div>

                        <div className="weatherPrediction">
                            <WeatherPrediction />
                        </div>
                    </div>
                </div>
            </section>
        }
        </Layout>
    )
}

export default LandingPage;