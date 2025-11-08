import React, {memo} from "react";

function  ButtonPanel ({onIncrement}) {
    console.log("🎯 ButtonPanel rendered");

    return (
        <div className="flex flex-col items-center justify-center bg-white shadow-md rounded-2xl p-6 mt-6 w-64">
            <h2 className="text-lg font-semibold text-gray-800 mb-3">
                Child Component
            </h2>
            <button
                onClick={onIncrement}
                className="bg-blue-600 text px-4 py-2 rounded-lg hover:bg-blue-700 transition duration-300 w-full"
            >
                Increment Count
            </button>
        </div>
    );
};


export default memo(ButtonPanel);
