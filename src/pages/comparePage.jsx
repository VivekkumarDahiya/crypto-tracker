import { useEffect, useState } from "react";
import Header from "../components/common/Header";
import SelectCoins from "../components/comparePage/selectCoins";
import SelectDays from "../components/coin/SelectDays";
import { coinObject } from "../functions/converObject";
import { getCoinPrices } from "../functions/getCoinPrices";
import { getCoinData } from "../functions/getCoinData";
import Loader from "../components/common/loader";

//




const ComparePage=()=>{

  const [crypto1,setCrypto1]=useState("bitcoin")
  const [crypto2,setCrypto2]=useState("ethereum")
  const [days,setDays]=useState(30)
  const[crypto1Data,setCrypto1Data]=useState({})
  const[crypto2Data,setCrypto2Data]=useState({})
  const[isLoading,setIsLoading]=useState(true)
  const[priceType,setPriceType]=useState("prices")
       
      function handleDaysChange(event){
         setDays(event.target.value)
      }

      useEffect(()=>{
             getData();
      },[])

      async function getData(){

          setIsLoading(true)
            const data1= await getCoinData(crypto1)
            const data2= await getCoinData(crypto2)
             if(data1){
            coinObject(setCrypto1Data,data1)
            
          }
             if(data2){
            coinObject(setCrypto2Data,data2)
          }
          if(data1 && data2){
            
            const prices1=await getCoinPrices(crypto1,days,priceType)
            const prices2=await getCoinPrices(crypto2,days,priceType)
            if(prices1.length>0 && prices2.length>0){
            //   setChartData(setChartData,prices)
            console.log("BOTH PRICES FECTCHED",prices1,prices2)
            setIsLoading(false)     
        }
    }


      }

       const handleCoinChange=async (event ,isCoin2)=>{
        setIsLoading(true)
    if(isCoin2){
         setCrypto2(event.target.value)
       const data= await getCoinData(event.target.value)   
    }else{
           setCrypto1(event.target.value)
          const data= await getCoinData(event.target.value)
            coinObject(setCrypto1Data,data)
    }
    const prices1=await getCoinPrices(crypto1,days,priceType)
     const prices2=await getCoinPrices(crypto2,days,priceType)
           
     
  }



    return(

        <div>
       <Header/>
       {isLoading?(
        <Loader/>
       ):(
        <>
       
       <div className="coins-days-flex">
       <SelectCoins  
        crypto1={crypto1} 
        handleCoinChange={handleCoinChange}
        crypto2={crypto2} 
       />

        <SelectDays days={days} handleDaysChange={handleDaysChange} noPtag={true}/>
       </div>
       </>)}

        </div>
    )
}


export default ComparePage;