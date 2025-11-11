import './App.css'
import {BrowserRouter, Route, Routes} from "react-router";
import Navbar from "./component/Navbar.jsx";
import Home from "./component/Home.jsx";
import AddStudent from "./component/AddStudent.jsx";
import StudentDetails from "./component/StudentDetails.jsx";
import About from "./component/About.jsx";
import BgChangerContextProvider from "./context/BgChangerContextProvider.jsx";

function App() {

  return (
    <BrowserRouter>
       < BgChangerContextProvider>
           < Navbar />
           < Routes >
               <Route path = "/Home" element = {< Home />}/>
               <Route path = "/AddStudent" element = {< AddStudent />}/>
               <Route path = "/StudentDetails/:studentid" element = {< StudentDetails />}/>
               <Route path = "/about" element = {< About />}/>
           </Routes>
       </BgChangerContextProvider>
    </BrowserRouter>
  )
}

export default App
