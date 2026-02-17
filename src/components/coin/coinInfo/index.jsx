import "./style.css"


const CoinInfo=({heading,desc})=>{
    return(
        <div className="grey-wrapper">
        <h2 className="coin-info-heading">{heading}</h2>
        <p className="coin-info-desc" 
         dangerouslySetInnerHTML={{ __html: desc }}/>
        </div>
    )
}

export default CoinInfo;