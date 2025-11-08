import {StudentContext} from "./StudentContext.jsx";
import {memo, useCallback, useMemo, useRef, useState} from "react";

function StudentContextProvider({ children }) {
    const [student, setStudent] = useState([]);

    const idRef = useRef(1);

    console.log("Student Detail Component")

    const addStudent = (data) => {
        setStudent([...student, { id: idRef.current++,  ...data }]);
    };

    // ✅ Stable delete handler using useCallback
    const deleteButton = useCallback(
        (id) => {
            setStudent((prev) => prev.filter((stud) => stud.id !== id));
        },
        [setStudent]
    );

    const value = useMemo(() => ({ student, setStudent, addStudent, deleteButton }), [student]);

    return (
        <StudentContext.Provider value={ value }>
            { children }
        </StudentContext.Provider>
    )
}

export default memo(StudentContextProvider);
