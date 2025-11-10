import React from "react";
import {Link} from "react-router";

function Navbar() {
    return (
        <nav className="fixed top-0 left-0 w-full bg-white shadow-md py-3 px-8 flex items-center justify-between z-50">
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

                <button className="px-4 py-2 rounded-lg bg-gray-50 text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-600 transition">
                    Students
                </button>
                <button className="px-4 py-2 rounded-lg bg-gray-50 text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-600 transition">
                    Add Student
                </button>
                <button className="px-4 py-2 rounded-lg bg-gray-50 text-gray-700 font-medium hover:bg-blue-50 hover:text-blue-600 transition">
                    About
                </button>
            </div>

            {/* Right Avatar Section */}
            <div className="flex items-center gap-4">
                <div className="w-9 h-9 flex items-center justify-center bg-blue-100 text-blue-600 font-semibold rounded-full">
                    A
                </div>
                <button className="bg-gray-100 text-gray-400 px-4 py-2 rounded-lg font-semibold cursor-not-allowed">
                    Logout
                </button>
            </div>
        </nav>
    );
}

export default Navbar;
