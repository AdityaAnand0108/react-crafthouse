import React from "react";

function Home() {
    return (
        <div className="pt-24 flex flex-col items-center justify-center min-h-screen bg-gray-50">
            {/* Main Welcome Section */}
            <div className="bg-white shadow-lg rounded-2xl p-10 w-[90%] max-w-3xl text-center">
                <h1 className="text-4xl font-extrabold text-blue-600 mb-4">
                    Welcome to Student Portal
                </h1>
                <p className="text-gray-600 text-lg leading-relaxed">
                    Manage student data efficiently — from viewing student details to
                    adding new records. This portal helps you stay organized and focused
                    on academic information, all in one place.
                </p>

                {/* CTA Buttons */}
                <div className="mt-8 flex justify-center gap-6">
                    <button className="px-6 py-3 bg-blue-600 text rounded-lg font-semibold shadow-md hover:bg-blue-700 transition">
                        View Students
                    </button>
                    <button className="px-6 py-3 bg-gray-100 text-gray-700 rounded-lg font-semibold shadow-md hover:bg-blue-50 hover:text-blue-600 transition">
                        Add Student
                    </button>
                </div>
            </div>

            {/* Footer Note */}
            <p className="mt-10 text-gray-400 text-sm">
                © 2025 Student Management Portal | Built with ❤️ using React & Tailwind
            </p>
        </div>
    );
}

export default Home;
