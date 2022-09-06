import "./style.css";
import { RiSearch2Line } from "react-icons/ri";
import { MdLightMode, MdNightlight } from "react-icons/md";
import { useState } from "react";
import { motion } from "framer-motion";
import Search from "../Modal/Search";

const Navbar = ({ theme, setTheme, location }) => {

    const [showModal, setShowModal] = useState(false);

    const changeLocation = (e) => {
        e.preventDefault();
        console.log("changed location");
    }

    return (
        <nav className="customNav">
            <Search
                showModal={showModal}
                setShowModal={setShowModal}
            />
            <ul>
                <li>
                    <span className="first" onClick={() => setShowModal(true)}>
                        <RiSearch2Line />
                    </span>
                </li>
                <li>
                    <a href="/location" onClick={changeLocation}>
                        {location?location.region:"Lagos, Nigeria"}
                    </a>
                </li>
                <li>
                    <span className="second">
                        <motion.i
                            onClick={setTheme}
                            className={theme==="light"?"active":""}
                            transition={{ duration: 0.5, stiffness: 100 }}
                        >
                            <MdLightMode />
                        </motion.i>

                        <motion.i
                            className="active move"
                            animate={theme==="light"?{ x: -30 }:{ x: 0 }}
                            transition={{ duration: 0.5, stiffness: 100, type: "spring" }}
                            exit="collapsed"
                            initial="collapsed"
                            variants={{
                                collapsed: { zIndex: "-10" }
                            }}
                        >
                        </motion.i>

                        <motion.i
                            className={theme==="dark"?"active":""}
                            onClick={setTheme}
                            transition={{ duration: 0.5, stiffness: 100 }}
                        >
                            <MdNightlight />
                        </motion.i>
                    </span>
                </li>
            </ul>
        </nav>
    )
}

export default Navbar;