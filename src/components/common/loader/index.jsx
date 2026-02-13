import CircularProgress from "@mui/material/CircularProgress";
import "./style.css"

const Loader=()=>{
    return(
        <div className="loader-container">
           <CircularProgress />
        </div>
    )
}
export default Loader;