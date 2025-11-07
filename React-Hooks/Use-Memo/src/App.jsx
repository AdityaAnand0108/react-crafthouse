import {useState} from 'react'
import './App.css'
import Navbar from "./component/Navbar.jsx";

function App() {
    const [count, setCount] = useState(0)

    return (
        <>
            <Navbar num={ 10 }/>
            <h1>Vite + React</h1>
            <div className="card">
                <button onClick={() => setCount((count) => count + 1)}>
                    count is {count}
                </button>
            </div>
        </>
    )
}

export default App
