import "./style.css";
import Button from "../../button";
import phone from  "../../../assets/phone.png"
import gradient from  "../../../assets/gradient.png"



const MainComponent=()=>{
    return(
        <div className="flex-info">
             <div className="left-component">
                <h1 className="tracker-crypto-heading">Track Crypto</h1>
                <h1 className="real-time-heading">Real Time.</h1>
                <p className="info-text">Track crypto through public api in real time. Visit the dashboard to do so!</p>
                <div className="flex-btn">
                    <Button  text={"Dashboard"}/>
                    <Button  text={"Share"}  outlined={true}/>
                </div>
             </div>
             <div className="phone-container">
                <img src={phone}  className="phone-imge"/>
                <img src={gradient} className="gradient-img"/>
             </div>
        </div>
    )
}

export default MainComponent;