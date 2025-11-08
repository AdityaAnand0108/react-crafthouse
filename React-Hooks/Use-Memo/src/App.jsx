import {useCallback, useState} from 'react'
import './App.css'
import Navbar from "./component/Navbar.jsx";
import CardComponent from "./component/CardComponent.jsx";

function App() {
    const [count, setCount] = useState(0)
    const [item , setItem] = useState(0)

    // const handleIncrementChild = () => { setItem(item + 1) } //Without useCallBack it will re- intiate this function so memo will think it as new function and props value change so child component re-render

    const handleIncrementChild = useCallback(() => {
        setItem(item + 1)
    }, [item])

    return (
        <>
            < CardComponent title={"LTIMindtree"} description={"Fullstack Stack Developer"} handleIncrement = {handleIncrementChild} item = { item } />
            <h1>Aditya Anand Mishra</h1>
            <div className="card">
                <button onClick={() => setCount(count + 1)}>
                    count is {count}
                </button>
            </div>
        </>
    )
}

export default App
