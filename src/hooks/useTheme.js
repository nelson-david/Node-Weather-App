import { useState } from "react"

const useTheme = () => {

    const getTheme = () => {
        const appTheme = window.localStorage.getItem('hurle_theme');
        return appTheme===null?"light":appTheme;
    }

    const [theme, setTheme] = useState(getTheme());

    const toggleTheme = () => {
        if (theme==="dark"){
            window.localStorage.removeItem('hurle_theme');
            window.localStorage.setItem('hurle_theme', 'light');
            setTheme(getTheme());
        }else{
            window.localStorage.removeItem('hurle_theme');
            window.localStorage.setItem('hurle_theme', 'dark');
            setTheme(getTheme());
        }
    }

    return { theme, setTheme: toggleTheme }
}

export default useTheme;