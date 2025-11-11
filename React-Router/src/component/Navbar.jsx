import React, {useContext} from "react";
import {Link} from "react-router";
import {BgChangerContext} from "../context/BgChangerContext.jsx";

function Navbar() {
    const {theme, toggleTheme} = useContext(BgChangerContext);
    return (
        <nav
            className={`fixed top-0 left-0 w-full shadow-md py-3 px-8 flex items-center justify-between z-50 transition-colors duration-300 ${
                theme === "white" ? "bg-white text-black" : "bg-black text-white"
            }`}
            >
            {/* Logo */}
            <h1 className="text-2xl font-extrabold text-blue-600 tracking-wide">
                Student Portal
            </h1>

            {/* Center Nav Links */}
            <div className="flex gap-6">
                <Link to="/home">
                    <button className="px-4 py-2 rounded-lg bg-gray-50 text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-600 transition">
                        Home
                    </button>
                </Link>
                <Link to="/StudentList">
                    <button className="px-4 py-2 rounded-lg bg-gray-50 text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-600 transition">
                        Students
                    </button>
                </Link>
                <Link to="/AddStudent">
                    <button className="px-4 py-2 rounded-lg bg-gray-50 text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-600 transition">
                        Add Student
                    </button>
                </Link>
                <Link to="/About">
                    <button className="px-4 py-2 rounded-lg bg-gray-50 text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-600 transition">
                        About
                    </button>
                </Link>
            </div>

            {/* Right Avatar Section */}
            <div className="flex items-center gap-4">
                <div className="w-9 h-9 flex items-center justify-center bg-blue-100 text-blue-600 font-semibold rounded-full">
                    A
                </div>
                <button
                    onClick={toggleTheme}
                    className="flex items-center gap-2 px-4 py-2 rounded-lg bg-gray-100 dark:bg-gray-800 text-gray-700 dark:text-gray-200 font-semibold hover:bg-blue-50 dark:hover:bg-blue-900 transition"
                >
                    {theme === "light" ? (
                        <>
                            ☀️ <span>Light</span>
                        </>
                    ) : (
                        <>
                            🌙 <span>Dark</span>
                        </>
                    )}
                </button>
                <button className="bg-gray-100 text-gray-400 px-4 py-2 rounded-lg font-semibold cursor-not-allowed">
                    Logout
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
