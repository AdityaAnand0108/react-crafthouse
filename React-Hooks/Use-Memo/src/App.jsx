import {useCallback, useMemo, useState} from 'react'
import './App.css'
import CardComponent from "./component/CardComponent.jsx";
import StudentDetail from "./component/StudentDetail.jsx";
import StudentContextProvider from "./StudentContext/StudentContextProvider.jsx";
import StudentList from "./component/StudentList.jsx";

function App() {
    const [count, setCount] = useState(0)
    const [item , setItem] = useState(0)

    // const handleIncrementChild = () => { setItem(item + 1) } //Without useCallBack it will re- intiate this function so memo will think it as new function and props value change so child component re-render

    const handleIncrementChild = useCallback(() => {
        setItem(item + 1)
    }, [item])

    // Shallow vs deepcopy when we send this object with usememo then on each render this object create new refrence so our child component render

    const user = useMemo(() => ({
        name: "Aditya Anand Mishra",
        age: 21,
        description: "Fullstack Stack Developer"
    }), [])

    return (
        <StudentContextProvider>
            < StudentDetail />
            < StudentList />
            < CardComponent user = {user} handleIncrement = {handleIncrementChild} item = { item } />
            <h1>Aditya Anand Mishra</h1>
            <div className="card">
                <button onClick={() => setCount(count + 1)}>
                    count is {count}
                </button>
            </div>
        </StudentContextProvider>
    )
}

export default App
