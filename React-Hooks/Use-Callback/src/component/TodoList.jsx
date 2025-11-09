export const TodoList = ({index, text}) => {
    console.log(index)
    return (
        <>
            <div className="max-w-md mx-auto mt-8 bg-white shadow-lg rounded-2xl p-6">
                {/* Header */}
                <h2 className="text-2xl font-semibold text-gray-800 mb-4 text-center">
                    My Todo List
                </h2>

                {/* Todo Items */}
                <ul className="divide-y divide-gray-200">
                    <li
                        key={index}
                        className="flex items-center justify-between py-3 px-2 hover:bg-gray-50 rounded-lg transition-all duration-200"
                    >
                        {/* Left side: Checkbox + text */}
                        <div className="flex items-center space-x-3">
                            <span className={`text-gray-700 text-base `} >{text}</span>
                        </div>

                        {/* Right side: action buttons */}
                        <div className="flex items-center space-x-2">
                            <button className="text-sm text-blue-600 font-medium hover:text-blue-800">
                                Edit
                            </button>
                            <button className="text-sm text-red-500 font-medium hover:text-red-700">
                                Delete
                            </button>
                        </div>
                    </li>
                    ))
                </ul>
            </div>
        </>
    )
}
