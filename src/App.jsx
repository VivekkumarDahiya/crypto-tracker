import {BrowserRouter, Routes, Route} from "react-router";
import HomePage from "./pages/home";
import "./App.css";
import Dashboard from "./pages/dashboard";
import Coinpage from "./coin";




const App=()=>{
  return(
    <div className="App">
      <BrowserRouter>
      <Routes>
       <Route path="/home" element={<HomePage/>}/>
       <Route path="/dashboard" element={<Dashboard/>}/>
       <Route path="/coin/:id" element={<Coinpage/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;