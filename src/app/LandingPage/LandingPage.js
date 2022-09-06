import Layout from "../../layouts/Layout";
import './style.css';
import { Link } from "react-router-dom";

const LandingPage = () => {
    return (
        <Layout disableNavbar={true}>
            <section className="landingPageSection">
                <div className="row justify-content-center">
                    <div className="col-lg-5 col-md-6 col-sm-7 col-12">
                        <div className="landingPageContents">
                            <div className="headerImgDiv">
                                <img
                                    src="https://res.cloudinary.com/ruthless-labs/image/upload/v1662443079/hurle-weather/41_govyki.png"
                                    alt="HeaderImg"
                                />
                            </div>
                            <div className="landingPageCaptionDiv">
                                <h1>Discover the Weather in Your City</h1>
                                <p>Get to know your weather maps and radar precipitation forecast</p>
                            </div>
                            <div className="buttonDiv">
                                <Link to="/app">
                                    Get Started
                                </Link>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </Layout>
    )
}

export default LandingPage;