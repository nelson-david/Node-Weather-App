import { Routes, Route } from "react-router-dom";
import Home from "./app/Home/Home";
import LandingPage from "./app/LandingPage/LandingPage";

export const Router = () => {
    return (
        <Routes>
            <Route path="/" element={<LandingPage />} />
            <Route path="/app" element={<Home />} />
        </Routes>
    )
}