import React, {useState} from "react";

const TodoInput = ({ onAdd }) => {

    const [value, setValue] = useState("");

    return (
        <div className="flex items-center justify-center space-x-3 bg-white shadow-md rounded-2xl p-4 w-full max-w-md">
            <input
                type="text"
                value={value}
                onChange={(e) => setValue(e.target.value)}
                placeholder="✍️  Add a new task..."
                className="flex-1 border border-gray-300 rounded-lg px-3 py-2 text-gray-700
                   focus:outline-none focus:ring-2 focus:ring-blue-500"
            />
            <button
                onClick={() => {
                    onAdd(value);
                    setValue(""); // ✅ clear input after adding
                }}
                className="bg-blue-600 text px-4 py-2 rounded-lg
                   hover:bg-blue-700 transition duration-300 font-medium"
            >
                Add
            </button>
        </div>
    );
};

export default TodoInput;
