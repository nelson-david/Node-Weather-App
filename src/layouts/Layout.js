import { Suspense } from "react";
import Navbar from "../components/Navbar/Navbar";
import useLocation from "../hooks/useLocation";
import useTheme from "../hooks/useTheme";
import withRouter from "../hooks/withRouter";
import Loader from "../utils/Loader";

const Layout = ({ children, disableNavbar }) => {

    const { theme, setTheme } = useTheme();
    const { loading, location } = useLocation();

    return (
        <div className={`App ${theme}`}>
            <Suspense fallback={<Loader />}>
            {
                loading?
                <Loader />
                :
                <div
                    className="container-fluid p-0"
                    style={{ overflowX: "hidden!important" }}
                >
                    {
                        !disableNavbar?(
                            <Navbar
                                theme={theme}
                                setTheme={setTheme}
                                location={location}
                            />
                        ):("")
                    }
                    {children}
                </div>
            }
            </Suspense>
        </div>
    )
}

export default withRouter(Layout);