import React, {memo} from "react";

const CardComponent = ({ title, description}) => {
    console.log("Child component Rendered")
    return (
        <div className="max-w-sm bg-white border border-gray-200 rounded-2xl shadow-md overflow-hidden m-4 transition-transform duration-200 hover:scale-105 hover:shadow-lg">

            <div className="p-5">
                <h2 className="text-lg font-semibold text-gray-800 mb-2">{title}</h2>
                <p className="text-gray-600 text-sm mb-4">
                    {description}
                </p>
            </div>
        </div>
    );
};

export default memo(CardComponent);