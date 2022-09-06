import { useEffect, useState } from "react";
import axios from "axios";

const useLocation = () => {
    const [location, setLocation] = useState(undefined);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        axios.get("https://ipapi.co/json", { responseType: 'json' })
        .then((res) => {
            setLocation(res.data);
            setLoading(false);
        })
        .catch((error) => {
            console.log("ERROR: ", error);
            setLocation({ region: "Lagos" });
        })
    }, [])

    return { location, loading }
}

export default useLocation;