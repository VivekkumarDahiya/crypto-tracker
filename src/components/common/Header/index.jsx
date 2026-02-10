
import Button from "../../button";
import SwipeableTemporaryDrawer from "./drawer";
import "./style.css"


const Header=()=>{
    return(
        <header className="header">

           <h1  className="logo">CryptoTracker<span style={{color:"var(--blue)"}}>.</span></h1>

           <nav  className="links">
           <a href="/" className="navlink">
            <p className="link">Home</p>
           </a>
           <a href="/" className="navlink">
            <p className="link">Compare</p>
           </a>
           <a href="/" className="navlink">
            <p className="link">Watchlist</p>
           </a >
           <a href="/" className="navlink">
            <Button 
            text={"Dashboard"}
            outlined={true}
            onClick={()=>console.log("btn click")}/>
           </a>
           </nav>
           <div className="mobile-drawer">
            <SwipeableTemporaryDrawer/>
           </div>
        </header>
    )
}

export default Header;