import "./style.css";


const Button=({text,onClick,outlined})=>{
    return(
       <div className="dashboardbtn"  onClick={()=>onClick}>{text}</div>
    )
}

export default Button;