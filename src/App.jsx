import {BrowserRouter, Routes, Route} from "react-router";
import HomePage from "./pages/home";
import "./App.css";
import Dashboard from "./pages/dashboard";




const App=()=>{
  return(
    <div className="App">
      <BrowserRouter>
      <Routes>
       <Route path="/home" element={<HomePage/>}/>
       <Route path="/dashboard" element={<Dashboard/>}/>
      </Routes>
      </BrowserRouter>
    </div>
  )
}

export default App;