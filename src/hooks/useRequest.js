import { useState } from "react";
import axios from "axios";

const useRequest = () => {
    const [apiResponse, setApiResponse] = useState(null);
    const [loading, setLoading] = useState(false);
    const [error, setError] = useState(null);

    const makeApiRequest = async (name, location) => {
        try {
            const response = await axios.get(`${process.env.REACT_APP_API_URL}/${name}?key=${process.env.REACT_APP_API_KEY}&q=${location}&days=5`);
            setApiResponse(response.data);
            console.log("RSP: ", response.data);
            setLoading(false);
        } catch (error) {
            console.log("ERROR: ", error);
            setError(true);
            setLoading(false);
        }
    };

    return { apiResponse, loading, makeApiRequest, error };
};

export default useRequest;
