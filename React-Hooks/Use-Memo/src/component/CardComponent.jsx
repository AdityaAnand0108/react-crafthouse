import React, {memo} from "react";

const CardComponent = ({ title, description, handleIncrement, item}) => {
    console.log("Child component Rendered")
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden m-4 transition-transform duration-200 hover:scale-105 hover:shadow-lg">

            <div className="p-5">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">{title}</h2>
                <p className="text-gray-600 text-sm mb-4">
                    {description}
                </p>
                <button
                    onClick={handleIncrement}
                    className="w-full bg-blue-600 text- text-sm font-medium py-2 rounded-lg hover:bg-blue-700 transition-colors"
                >
                    Item added to cart : {item}
                </button>
            </div>
        </div>
    );
};

export default memo(CardComponent);