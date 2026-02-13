import { useEffect, useState } from "react";
import { useParams } from "react-router";
import Header from "./components/common/Header";
import Loader from "./components/common/loader";
import axios from "axios";
import { coinObject } from "./functions/converObject";
import List from "./components/dashboard/list";



const Coinpage=()=>{
     
     const {id}=useParams()
     const[isloading,setIsLoading]=useState(true);
     const[coinData,setCoinData]=useState()
useEffect(()=>{
 axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${id}`
      )
      .then((response) => {
        // setCoins(response.data);
        // setPaginatedCoins(response.data.slice(0, 10));
        coinObject(setCoinData,response.data)
        setIsLoading(false);
      })
      .catch((error) => {
        console.log(error);
           setIsLoading(false)
      });
},[id])
    return(
        <div>
        <Header/>
        {isloading?<Loader/>:
        <div className="grey-wrapper">
            <><List   coin={coinData}/></>  </div>
       
        }
        </div>
    )
}

export default Coinpage;