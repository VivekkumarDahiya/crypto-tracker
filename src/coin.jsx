import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Header from "./components/common/Header";
import Loader from "./components/common/loader";
import axios from "axios";
import { coinObject } from "./functions/converObject";
import List from "./components/dashboard/list";
import CoinInfo from "./components/coin/coinInfo";
import { getCoinData } from "./functions/getCoinData";
import { getCoinPrices } from "./functions/getCoinPrices";



const Coinpage=()=>{
     
     const {id}=useParams()
     const[isloading,setIsLoading]=useState(true);
     const[coinData,setCoinData]=useState();
     const [days,setDays]=useState(30)

useEffect(()=>{
if(id){

 getData()

    }

},[id])
   
  async   function  getData(){

    const data= await getCoinData(id)
    if(data){
      coinObject(setCoinData,data)
      const prices=await getCoinPrices(id,days)
      if(prices.length>0){
        console.log("wohoh")
        setIsLoading(false)
      }
    }
       axios.get(
        `https://api.coingecko.com/api/v3/coins/${id}/market_chart?vs_currency=usd&days=${days}&interval=daily`   
      ).then((response)=>{
        console.log("Prices>>>>",response.data.prices)
           setIsLoading(false)
        
      }).catch((error) => {
        console.log(error);
           setIsLoading(false)
      });
    }

    return(
     <div>
      <Header/>
      {isloading?(
        <Loader/>
      ):(
        <>
        <div className="grey-wrapper">
              <List coin={coinData}/>
        </div>
        <CoinInfo  
        heading={coinData.name}  
        desc={coinData.desc}/>
        </>
      )}
     </div>
        )
}

export default Coinpage;