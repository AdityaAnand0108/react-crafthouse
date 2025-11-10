import './App.css'
import {BrowserRouter, Route, Routes} from "react-router";
import Navbar from "./component/Navbar.jsx";
import Home from "./component/Home.jsx";

function App() {

  return (
    <BrowserRouter>
        < Navbar />
        < Routes >
            <Route path = "/Home" element = {< Home />}/>
        </Routes>
    </BrowserRouter>
  )
}

export default App
