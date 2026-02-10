
import { Link } from "react-router";
import Button from "../../button";
import SwipeableTemporaryDrawer from "./drawer";
import "./style.css"


const Header=()=>{
    return(
        <header className="header">

           <h1  className="logo">CryptoTracker<span style={{color:"var(--blue)"}}>.</span></h1>

           <nav  className="links">
           <Link to="/home" className="navlink">
            <p className="link">Home</p>
           </Link>
           <Link to="/compare" className="navlink">
            <p className="link">Compare</p>
           </Link>
           <Link to="/watchlist" className="navlink">
            <p className="link">Watchlist</p>
           </Link >
           <Link to="/dashboard" className="navlink">
            <Button 
            text={"Dashboard"}
            outlined={true}
            onClick={()=>console.log("btn click")}/>
           </Link>
           </nav>
           <div className="mobile-drawer">
            <SwipeableTemporaryDrawer/>
           </div>
        </header>
    )
}

export default Header;