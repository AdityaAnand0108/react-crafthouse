import React from "react";

function StudentsList() {
    return (
        <div className="pt-24 px-8 min-h-screen bg-gray-50">
            <div className="bg-white shadow-lg rounded-2xl p-8 max-w-5xl mx-auto">
                <h2 className="text-3xl font-bold text-blue-600 mb-6">Students List</h2>

                <table className="w-full border-collapse">
                    <thead>
                    <tr className="bg-blue-50 text-blue-600 text-left">
                        <th className="p-3 rounded-l-lg">#</th>
                        <th className="p-3">Name</th>
                        <th className="p-3">Class</th>
                        <th className="p-3">Email</th>
                        <th className="p-3 rounded-r-lg">Action</th>
                    </tr>
                    </thead>
                    <tbody>
                    {[1, 2, 3].map((i) => (
                        <tr key={i} className="border-b hover:bg-gray-50 transition">
                            <td className="p-3">{i}</td>
                            <td className="p-3">Student {i}</td>
                            <td className="p-3">Grade {i + 5}</td>
                            <td className="p-3">student{i}@school.com</td>
                            <td className="p-3">
                                <button className="text-blue-600 hover:underline">
                                    View Details
                                </button>
                            </td>
                        </tr>
                    ))}
                    </tbody>
                </table>
            </div>
        </div>
    );
}

export default StudentsList;
