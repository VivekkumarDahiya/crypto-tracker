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
import TogglePriceType from "./components/coin/priceType";



const Coinpage=()=>{
     
     const {id}=useParams()
     const[isloading,setIsLoading]=useState(true);
     const[coinData,setCoinData]=useState();
     const [days,setDays]=useState(60);
     const[chartData,setChartData]=useState({})
      const [priceType, setPriceType] = useState('prices');


useEffect(()=>{
if(id){

 getData()

    }

},[id])
   
  async   function  getData(){
    const data= await getCoinData(id)
    if(data){
      coinObject(setCoinData,data)
      const prices=await getCoinPrices(id,days,priceType)
      if(prices.length>0){
        setChartData(setChartData,prices)
        setIsLoading(false)     
    }
  }
}

   

  const handleDaysChange =async (event) => {
    setIsLoading(true)
    setDays(event.target.value);
    const prices=await getCoinPrices(id,event.target.value,priceType)
      if(prices.length>0){
        settinChartData(setChartData,prices);
        setIsLoading(false)
      }
  
  };
  

  const handlPriceTypeChange =async (event, newType) => {
     setIsLoading(true)
    setPriceType(newType);
     const prices=await getCoinPrices(id,days,newType)
      if(prices.length > 0){
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
         <TogglePriceType
          priceType={priceType}
          handlPriceTypeChange={handlPriceTypeChange}
          />
          <LineChart   chartData={chartData}
            priceType={priceType}/>
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