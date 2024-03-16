import { TfiWorld } from "react-icons/tfi";
import { BsCodeSlash } from "react-icons/bs";
import './projects.css';
import { motion } from "framer-motion";
import bsfic from '../../assets/Image/project/bsfic.png';
import login from '../../assets/Image/project/login.png';
const Recentworks = () => {
    return (
        <section id="project" className='max-w-contentContainer mx-auto px-8 md:px-28'>
            <div className="text-center space-y-2 w-[50%] mx-auto my-10">
                <h1 className="text-center text-3xl font-bold text-indigo-800 uppercase">
                    Recent Works
                </h1>
                <p className="text-lg">
                    Lorem ipsum dolor sit, amet consectetur adipisicing elit. Lorem ipsum dolor sit, amet consectetur adipisicing elit. At, tempore
                </p>
            </div>
            <div className="projects-container grid grid-cols-1 md:grid-cols-2 py-5 md:gap-10">
                <motion.div initial={{ y: -2, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.1, delay: 0.2 }} className="project-card border border-indigo-200 hover:border-indigo-500 transition-all duration-1000 rounded-lg group">
                    <h2 className="text-xl p-5 text-center md:p-8">Smart Cane procurement & payment system</h2>
                    <div className="w-full relative overflow-hidden h-[300px]">
                        <img src={bsfic} alt="" className="group-hover:opacity-50 h-full group-hover:transition-all duration-1000"></img>
                        <p className="pro_details text-white w-full absolute -translate-x-[110%] group-hover:translate-x-0 transition-all duration-1000 top-10 p-5 bg-indigo-500 rounded-e-3xl">
                            Developed a dynamic dashboard allowing users to register as students, select and enroll in classes with Stripe payment integration.Empowered admins to manage users, roles, and class approvals, while instructors could add and update classes.
                        </p>
                        <div className="technologies text-white p-2 bg-indigo-500 rounded-e-3xl">HTML, Tailwind CSS, React, React Router, React query, stripe, React Hook Form, jsonwebtoken, Firebase, Express.js, MongoDB</div>
                    </div>
                    <div className="bottom-icons flex justify-between p-5 duration-1000 gap-5">
                        <a href="https://fashion-design-auth.web.app/" target="_blank" className="w-10 h-10 rounded-full flex justify-center items-center border border-indigo-500 hover:text-textGreen"><TfiWorld className="text-2xl" /></a>
                        <a href="https://github.com/delowar-prog/design-dreamers-school-client" target="_blank" className="w-10 h-10 rounded-full flex justify-center items-center border border-indigo-500 hover:text-textGreen"><BsCodeSlash className="text-2xl" /></a>
                    </div>
                </motion.div>
                <motion.div initial={{ y: -2, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.3, delay: 0.5 }} className="project-card border border-indigo-200 hover:border-indigo-500 transition-all duration-1000 rounded-lg group">
                    <h2 className="text-xl p-5 text-center md:p-8">Kalabhuna Reastuarent</h2>
                    <div className="w-full relative overflow-hidden h-[300px]">
                        <img src={login} alt="" className="group-hover:opacity-50 h-full group-hover:transition-all duration-1000"></img>
                        <p className="pro_details text-white w-full  absolute -translate-x-[110%] group-hover:translate-x-0 transition-all duration-1000 top-10 p-5 bg-indigo-500 rounded-e-3xl">
                            Implemented user registration and login functionality, allowing registered users to add and manage toy details. Implemented dynamic fetching, query routing, sorting, and indexing of toy information on the backend using Express.js and MongoDB technologies.
                        </p>
                        <div className="technologies text-white p-5 bg-indigo-500 rounded-e-3xl">Tailwind CSS, React, React Router, React Hook Form, Firebase, Express.js, MongoDB</div>
                    </div>
                    <div className="bottom-icons flex justify-between p-5 duration-1000 gap-5">
                        <a href="https://kalabhuna-auth.web.app/" target="_blank" className="w-10 h-10 rounded-full flex justify-center items-center border border-indigo-500 hover:text-textGreen"><TfiWorld className="text-2xl" /></a>
                        <a href="https://github.com/delowar-prog/kalabhuna-restaurant-client" target="_blank" className="w-10 h-10 rounded-full flex justify-center items-center border border-indigo-500 hover:text-textGreen"><BsCodeSlash className="text-2xl" /></a>
                    </div>
                </motion.div>
                <motion.div initial={{ y: -2, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.6 }} className="project-card border border-indigo-200 hover:border-indigo-500 transition-all duration-1000 rounded-lg group">
                    <h2 className="text-xl p-5 text-center md:p-8">Online Store BD</h2>
                    <div className="w-full relative overflow-hidden h-[300px]">
                        <img src={login} alt="" className="group-hover:opacity-50 h-full group-hover:transition-all duration-1000"></img>
                        <p className="pro_details text-white w-full absolute -translate-x-[110%] group-hover:translate-x-0 transition-all duration-1000 top-10 p-5 bg-indigo-500 rounded-e-3xl">
                            It is a PHP & laravel based E-commerce project. An user can add product to cart, order the product after login, see the previous purses history. Admin can add and manage product, add product category, product brand etc
                        </p>
                        <div className="technologies text-white p-5 bg-indigo-500 rounded-e-3xl">HTML, CSS, PHP, Laravel & Mysql</div>
                    </div>
                    <div className="bottom-icons flex justify-between p-5 duration-1000 gap-5">
                        <a href="https://myshop.dhmilton.xyz/" target="_blank" className="w-10 h-10 rounded-full flex justify-center items-center border border-indigo-500"><TfiWorld className="text-2xl hover:text-textGreen" /></a>
                        <a href="https://github.com/delowar-prog/my_shop" target="_blank" className="w-10 h-10 rounded-full flex justify-center items-center border border-indigo-500"><BsCodeSlash className="text-2xl hover:text-textGreen" /></a>
                    </div>
                </motion.div>
                <motion.div initial={{ y: -2, opacity: 0 }} whileInView={{ y: 0, opacity: 1 }} viewport={{ once: true }} transition={{ duration: 0.4, delay: 0.6 }} className="project-card border border-indigo-200 hover:border-indigo-500 transition-all duration-1000 rounded-lg group">
                    <h2 className="text-xl p-5 text-center md:p-8">Online Exam System</h2>
                    <div className="w-full relative overflow-hidden h-[300px]">
                        <img src={login} alt="" className="group-hover:opacity-50 h-full group-hover:transition-all duration-1000"></img>
                        <p className="pro_details text-white w-full absolute -translate-x-[110%] group-hover:translate-x-0 transition-all duration-1000 top-10 p-5 bg-indigo-500 rounded-e-3xl">
                            It is a raw PHP based Exam system project. An user can register & login & then can give exam. Admin can add question, edit question & manage.
                        </p>
                        <div className="technologies text-white p-5 bg-indigo-500 rounded-e-3xl">HTML, CSS, PHP & Mysql</div>
                    </div>
                    <div className="bottom-icons flex justify-between p-5 duration-1000 gap-5">
                        <a href="https://github.com/delowar-prog/Exam-System-Using-PHP-Ajax" target="_blank" className="w-10 h-10 rounded-full flex justify-center items-center border border-indigo-500"><BsCodeSlash className="text-2xl hover:text-textGreen" /></a>
                    </div>
                </motion.div>
            </div>
        </section>
    )
}

export default Recentworks
