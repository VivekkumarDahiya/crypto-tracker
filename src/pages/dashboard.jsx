import { useEffect, useState } from "react";
import Header from "../components/common/Header";
import TabComponents from "../components/dashboard/tabs";
import axios from "axios"


const Dashboard=()=>{

    const [coins,setCoins]=useState([])

useEffect(()=>{
    axios.get("https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1")
    .then((response)=>{
          console.log("Response",response)
          setCoins(response.data)
    })
    .catch((error)=>{
          console.lop(error)
    })
},[])
    return(
        <div>
         <Header/>
         <TabComponents coins={coins}/>
        </div>
    )
}

export default Dashboard;