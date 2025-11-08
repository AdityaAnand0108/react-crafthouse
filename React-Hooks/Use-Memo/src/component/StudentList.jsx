import { StudentContext } from "../StudentContext/StudentContext.jsx";
import { memo, useContext } from "react";
import StudentCard from "./StudentCard.jsx";

function StudentList() {
    const { student, deleteButton } = useContext(StudentContext);

    console.log("📘 StudentList Rendered");

    return (
        <div className="flex flex-wrap justify-center gap-6 mt-10">
            {student.length > 0 ? (
                student.map((stud) => (
                    <StudentCard
                        key={stud.id}
                        id={stud.id}
                        name={stud.name}
                        phone={stud.phone}
                        fav={stud.fav}
                        deleteButton={deleteButton}
                    />
                ))
            ) : (
                <p className="text-gray-500 text-center">No students added yet.</p>
            )}
        </div>
    );
}

export default memo(StudentList);
