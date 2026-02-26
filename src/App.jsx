import {BrowserRouter, Routes, Route} from "react-router";
import HomePage from "./pages/home";
import "./App.css";
import Dashboard from "./pages/dashboard";
import Coinpage from "./coin";
import ComparePage from "./pages/comparePage";




const App=()=>{
  return(
    <div className="App">
      <BrowserRouter>
      <Routes>
       <Route path="/home" element={<HomePage/>}/>
       <Route path="/dashboard" element={<Dashboard/>}/>
       <Route path="/coin/:id" element={<Coinpage/>}/>
       <Route path="/compare"  element={<ComparePage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;