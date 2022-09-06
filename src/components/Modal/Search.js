import { AnimatePresence, motion } from "framer-motion";
import { useState } from "react";
import "./style.css";

const Search = ({ showModal, setShowModal }) => {

    const [location, setLocation] = useState("");

    const searchCity = (e) => {
        e.preventDefault();
        console.log("SEARCHED FOR CITY");
    }

    return (
        <AnimatePresence>
            { showModal && (
                <motion.div
                    className="fixed-top customBackdrop"
                    onClick={() => setShowModal(false)}
                    initial={{ opacity: 0 }}
                    animate={{ opacity: 1}}
                    exit={{ opacity: 0 }}
                >
                    <motion.div onClick={(e) => {e.stopPropagation();}} className="customModal searchModal">
                        <form onSubmit={searchCity}>
                            <div className="form-group">
                                <input
                                    type="search"
                                    placeholder="Enter a search..."
                                    required={true}
                                    className="form-control searchInput"
                                    value={location}
                                    onChange={(e) => setLocation(e.target.value)}
                                />
                            </div>
                        </form>
                    </motion.div>
                </motion.div>
            )}
        </AnimatePresence>
    )
}

export default Search;