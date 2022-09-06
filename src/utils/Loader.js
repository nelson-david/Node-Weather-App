import { ImSpinner8 } from "react-icons/im";

const Loader = () => {
    return (
        <div className="loadingBar">
            <p className="spin">
                <ImSpinner8 />
            </p>
        </div>
    )
}

export default Loader;