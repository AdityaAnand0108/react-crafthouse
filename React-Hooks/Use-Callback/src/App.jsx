import {useCallback, useState} from 'react'
import './App.css'
import ButtonPanel from "./component/ButtonPanel.jsx";
import TodoInput from "./component/TodoInput.jsx";
import {TodoList} from "./component/TodoList.jsx";

function App() {
    const [count, setCount] = useState(0)
    const [name, setName] = useState('')
    const [todos, setTodos] = useState([])

    // const handleIncrement = () => { Right we are passing this function to the child component and it is trigging a re-renfder to the child component which is not
    //     setCount(count + 1)         required because function right did not update anything
    // }

    const handleIncrement = useCallback(
        () => {
            setCount((prevCount) => prevCount + 1);
        },
        [ count ],
    );

    const onAdd = useCallback((data)=>{
        setTodos((prevTodos) => [...prevTodos, data]);
    }, []);



    return (
        <>
            <h1>Implemnting Use CallBack</h1>

            < TodoInput onAdd ={onAdd} />

            <TodoList{todos.length > 0 ?
            todos.map((item, index) => (
                key={index}
                text = {item})) }/>

            <input
                value={name}
                onChange={(e) => setName(e.target.value)}
                placeholder="Enter name"
                className="border border-gray-300 rounded-lg p-5 m-4 focus:ring-2 focus:ring-blue-400 outline-none"
            />

            <p className="text-gray-700 mb-2 font-medium">Count: {count}</p>

            <ButtonPanel onIncrement={handleIncrement}/>
        </>
    )
}

export default App
