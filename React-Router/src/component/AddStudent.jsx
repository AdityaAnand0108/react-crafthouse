import React from "react";

function AddStudent() {
    return (
        <div className="pt-24 flex justify-center items-center min-h-screen bg-gray-50">
            <div className="bg-white shadow-lg rounded-2xl p-10 w-[90%] max-w-3xl">
                <h2 className="text-3xl font-bold text-blue-600 mb-6">Add New Student</h2>

                <form className="grid grid-cols-2 gap-6">
                    <div className="col-span-2 sm:col-span-1">
                        <label className="block text-gray-500 text-sm mb-2">
                            Full Name
                        </label>
                        <input
                            type="text"
                            placeholder="Enter student's name"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    <div className="col-span-2 sm:col-span-1">
                        <label className="block text-gray-500 text-sm mb-2">Class</label>
                        <input
                            type="text"
                            placeholder="Enter class"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    <div className="col-span-2 sm:col-span-1">
                        <label className="block text-gray-500 text-sm mb-2">Email</label>
                        <input
                            type="email"
                            placeholder="Enter email"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    <div className="col-span-2 sm:col-span-1">
                        <label className="block text-gray-500 text-sm mb-2">
                            Student ID
                        </label>
                        <input
                            type="text"
                            placeholder="Enter student ID"
                            className="w-full border border-gray-300 rounded-lg px-4 py-2 focus:outline-none focus:ring-2 focus:ring-blue-400"
                        />
                    </div>

                    <div className="col-span-2 flex justify-end gap-4 mt-4">
                        <button
                            type="button"
                            className="px-6 py-2 bg-gray-100 text-gray-700 rounded-lg hover:bg-blue-50 hover:text-blue-600 transition"
                        >
                            Cancel
                        </button>
                        <button
                            type="button"
                            className="px-6 py-2 bg-blue-600 text-white rounded-lg hover:bg-blue-700 transition"
                        >
                            Add Student
                        </button>
                    </div>
                </form>
            </div>
        </div>
    );
}

export default AddStudent;
