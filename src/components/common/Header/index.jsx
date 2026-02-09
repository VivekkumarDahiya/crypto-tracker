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
            <p className="link">Dashboard</p>
           </a>
           </nav>
        </header>
    )
}

export default Header;