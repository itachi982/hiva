import { Link } from "react-router-dom";
import { motion } from "framer-motion";
import bannerimg from "../assets/banner.png"
import { Footer } from "./Footer";


export const Banner = () => {
    return (
        <div>
            <div className="parent h-auto pt-40 pb-40 flex flex-col-reverse lg:flex-row items-center justify-between bg-slate-300">
                <motion.div
                    initial={{ x: "-100vw" }}
                    animate={{ x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <h1 className="text-2xl font-semibold ">Salary and Attendance Management Tool</h1>
                    <br/>
                    <p className="font-light ">A business-focused platform designed to streamline and 
                        integrate the employee payroll management process efficiently using digital technology.</p>
        
                </motion.div>
                <motion.div
                    className="w-full md:w-1/3"
                    initial={{ x: "100vw" }}
                    animate={{ x: 0 }}
                    transition={{ duration: 1 }}
                >
                    <div className="order-1  lg:order-3 lg:pt-0 md:pt-0 sm:pt-0">
                        <img
                            src={bannerimg}
                            title="Hiva Banner"
                            alt="Hiva Banner"
                        />
                    </div>
                </motion.div>
            </div>
            <div className="bg-slate-300">
                <motion.div className="bg-slate-300" initial={{ x: "100vw" }} animate={{ x: 0 }} transition={{ duration: 1 }}>
                    <div className=" bg-slate-300">
                        <Footer/>
                    </div>
                </motion.div>
            </div>
        </div>
    );
}