import {BgChangerContext} from "./BgChangerContext.jsx";
import React, {useEffect, useState} from "react";

export default function BgChangerContextProvider({ children }) {
    const [theme, setTheme] = useState("white");

    // 2️⃣ Toggle theme between light and dark
    const toggleTheme = () => {
        setTheme((prev) => (prev === "white" ? "black" : "white"));
    };

    // 3️⃣ Apply background color or class to the page
    useEffect(() => {
        document.body.style.backgroundColor = theme;
    }, [theme]);

    // 4️⃣ Provide context to children
    return (
        <BgChangerContext.Provider value={{ theme, toggleTheme }}>
            {children}
        </BgChangerContext.Provider>
    );
}