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
import LineChart from "./components/coin/lineChart";
import { convertDate } from "./functions/convertDate";
import SelectDays from "./components/coin/SelectDays";
import { settinChartData } from "./functions/setttingChartData";



const Coinpage=()=>{
     
     const {id}=useParams()
     const[isloading,setIsLoading]=useState(true);
     const[coinData,setCoinData]=useState();
     const [days,setDays]=useState(60);
     const[chartData,setChartData]=useState({})


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
        setChartData({
          labels:prices.map((price)=>convertDate(price[0])),
          datasets:[
            {
        
              data:prices.map((price)=>price[0]),
              borderColor:"#3a80e9",
              borderWidth:4,
              fill:true,
              tension:0.25,
              backgroundColor:"rgb(58,128,233,0.1)",
              pointRadius:0,
              
      
            }
          ]
        })
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
   

  const handleDaysChange =async (event) => {
    setIsLoading(true)
    setDays(event.target.value);
    const prices=await getCoinPrices(id, (event.target.value))
      if(prices.length>0){
        settinChartData(setChartData,prices);
        setIsLoading(false)
      }
  
  };

    return(
     <div>
      <Header/>
      {isloading?(
        <Loader/>
      ):(
        <>
        <div className="grey-wrapper" style={{padding:"0.5rem 1rem"}}>

              <List coin={coinData}/>
        </div><div className="grey-wrapper">
          <SelectDays  days={days} handleDaysChange={handleDaysChange}/>
          <LineChart   chartData={chartData}/>
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