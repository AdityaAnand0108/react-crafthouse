import {memo, useContext, useRef, useState} from "react";
import {StudentContext} from "../StudentContext/StudentContext.jsx";

function StudentDetail() {
    const { addStudent } = useContext(StudentContext)
    const [name, setName] = useState("")
    const [fav, setFav] = useState("")
    const [phone, setPhone] = useState("")

    const submitRef = useRef(null); // local ref for button

    const handleSubmit = () => {
        if (!name || !phone || !fav) return; // optional validation

        addStudent({ name, phone, fav }); // send data to context
        setName("");
        setPhone("");
        setFav("");

        // ✅ focus the button again
        submitRef.current.focus();
    };

    return (
        <div className="max-w-sm bg-white rounded-2xl shadow-md hover:shadow-lg transition-all duration-300 p-6 mx-auto mt-10">
            {/* Header */}
            <h2 className="text-xl font-semibold text-gray-800 mb-4 text-center">
                Student Profile
            </h2>

            {/* Name Field */}
            <div className="mb-4">
                <label className="block text-gray-600 text-sm font-medium mb-1">
                    Name
                </label>
                <input
                    ref={submitRef}
                    type="text"
                    placeholder="Enter name"
                    value={name}
                    onChange = { (e) => setName(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Contact Field */}
            <div className="mb-4">
                <label className="block text-gray-600 text-sm font-medium mb-1">
                    Contact
                </label>
                <input
                    type="text"
                    placeholder="Enter contact number"
                    value={phone}
                    onChange = { (e) => setPhone(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Favorite Subject Field */}
            <div className="mb-6">
                <label className="block text-gray-600 text-sm font-medium mb-1">
                    Favorite Subject
                </label>
                <input
                    type="text"
                    placeholder="Enter favorite subject"
                    value={fav}
                    onChange = { (e) => setFav(e.target.value)}
                    className="w-full px-4 py-2 border border-gray-300 rounded-lg focus:outline-none focus:ring-2 focus:ring-blue-500"
                />
            </div>

            {/* Button */}
            <button
                onClick={handleSubmit}
                className="w-full bg-blue-600 text font-medium py-2 rounded-lg hover:bg-blue-700 transition duration-300"
            >
                Save Profile
            </button>
        </div>
    );
};

export default memo(StudentDetail);
