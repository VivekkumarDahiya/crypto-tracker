import "./style.css";


const Button=({text,onClick,outlined})=>{
    return(
       <div className={outlined?"outlined-btn":"dashboardbtn"} onClick={()=>onClick}>{text}</div>
    )
}

export default Button;