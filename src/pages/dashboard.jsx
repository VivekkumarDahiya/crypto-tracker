import { useEffect, useState } from "react";
import Header from "../components/common/Header";
import TabComponents from "../components/dashboard/tabs";
import axios from "axios"
import Search from "../components/dashboard/searchBar";


const Dashboard=()=>{
     const [search,setSearch]=useState("")
    const [coins,setCoins]=useState([])

    const onSearchChange=(e)=>{
        setSearch(e.target.value)
    }

    var filteredCoins=coins.filter((item)=>
    item.name.toLowerCase().includes(search.toLowerCase()) ||  item.symbol.toLowerCase().includes(search.toLowerCase()))

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
         <Search  search={search} onSearchChange={onSearchChange}/>
         <TabComponents coins={filteredCoins}/>
        </div>
    )
}

export default Dashboard;