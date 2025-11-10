import React from "react";

function StudentDetails() {
    return (
        <div className="pt-24 flex justify-center items-center min-h-screen bg-gray-50">
            <div className="bg-white shadow-xl rounded-2xl p-10 w-[90%] max-w-3xl">
                <h2 className="text-3xl font-bold text-blue-600 mb-6">
                    Student Details
                </h2>

                <div className="grid grid-cols-2 gap-6">
                    <div>
                        <h4 className="text-gray-500 text-sm">Full Name</h4>
                        <p className="text-gray-800 font-semibold">John Doe</p>
                    </div>
                    <div>
                        <h4 className="text-gray-500 text-sm">Student ID</h4>
                        <p className="text-gray-800 font-semibold">STU12345</p>
                    </div>
                    <div>
                        <h4 className="text-gray-500 text-sm">Class</h4>
                        <p className="text-gray-800 font-semibold">Grade 8</p>
                    </div>
                    <div>
                        <h4 className="text-gray-500 text-sm">Email</h4>
                        <p className="text-gray-800 font-semibold">john.doe@school.com</p>
                    </div>
                </div>

                <div className="mt-8 flex justify-end gap-4">
                    <button className="px-5 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition">
                        Back to List
                    </button>
                    <button className="px-5 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition">
                        Edit Details
                    </button>
                </div>
            </div>
        </div>
    );
}

export default StudentDetails;
