import {useState} from 'react'
import './App.css'
import Navbar from "./component/Navbar.jsx";
import CardComponent from "./component/CardComponent.jsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            < CardComponent title={"LTIMindtree"} description={"Fullstack Stack Developer"}/>
            <h1>Aditya Anand Mishra</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div>
        </>
    )
}

export default App
