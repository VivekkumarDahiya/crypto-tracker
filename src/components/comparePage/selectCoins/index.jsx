import { useEffect, useState } from "react"
import { get100Coins } from "../../../functions/get100Coins"
import MenuItem from '@mui/material/MenuItem';
import Select from '@mui/material/Select';
import "./style.css";


const SelectCoins=({crypto1,crypto2,handleCoinChange})=>{
               
    
    const[allCoins,setAllCoins]=useState([])


    const styles={
    height: "2.5rem",
    color: "var(--white)",

    // Border normal state
    "& .MuiOutlinedInput-notchedOutline": {
      borderColor: "var(--white)",
    },

    // Hover state
    "&:hover .MuiOutlinedInput-notchedOutline": {
      borderColor: "#3a80e9",
    },
    // Focus state
    "&.Mui-focused .MuiOutlinedInput-notchedOutline": {
      borderColor: "#3a80e9",
    },

    // Dropdown icon color
    "& .MuiSvgIcon-root": {
      color: "var(--white)",
    },
  }
 

  useEffect(()=>{
       getData();
  },[])

 async function getData(){
     const Mycoins=  await get100Coins();
     setAllCoins(Mycoins);
  }

    return(
        <div className="coin-flex">
            <p>Crypto 1  </p>
            <Select
        sx={styles}
          value={crypto1}
          label="Crypto 1"
          onChange={(event)=>handleCoinChange(event,false)}
        >
            {allCoins.map((coin,i)=> 
               <MenuItem key={i}
                value={coin.id}>{coin.name}</MenuItem>)}
        </Select>
            <p>Crypto 2  </p>
            <Select
        sx={styles}
          value={crypto2}
          label="Crypto 2"
          onChange={(event)=>handleCoinChange(event,true)}
        >
            {allCoins.map((coin,i)=>  <MenuItem key={i} value={coin.id}>{coin.name}</MenuItem>)}
        </Select>
       
        </div>
    )
}

export default SelectCoins