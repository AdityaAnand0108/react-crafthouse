import React, {memo} from "react";

function StudentCard({id , name, phone, fav, deleteButton}) {

    console.log("Student Card : index: ", id);

    return (
        <div className="max-w-sm bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6 mx-auto mt-6">
            <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                Student Details
            </h2>

            <div className="space-y-3">
                <div className="flex justify-between">
                    <span className="text-gray-500 font-medium">Name:</span>
                    <span className="text-gray-800 font-semibold">{name}</span>
                </div>

                <div className="flex justify-between">
                    <span className="text-gray-500 font-medium">Contact:</span>
                    <span className="text-gray-800 font-semibold">{phone}</span>
                </div>

                <div className="flex justify-between">
                    <span className="text-gray-500 font-medium">Favorite Subject:</span>
                    <span className="text-gray-800 font-semibold">{fav}</span>
                </div>
            </div>

            {/* Divider */}
            <div className="border-t border-gray-200 my-4"></div>

            {/* Buttons */}
            <div className="flex justify-center gap-3">
                <button className="px-4 py-2 bg-blue-600 text text-sm rounded-lg hover:bg-blue-700 transition duration-300">
                    Edit
                </button>
                <button className="px-4 py-2 bg-red-500 text text-sm rounded-lg hover:bg-red-600 transition duration-300"
                onClick={() => deleteButton(id)}>
                    Delete
                </button>
            </div>
        </div>
    );
}

export default memo(StudentCard);
