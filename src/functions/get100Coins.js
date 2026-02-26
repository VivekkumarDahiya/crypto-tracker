import axios from "axios";


export const get100Coins=()=>{

 const Mycoins =    axios
      .get(
        "https://api.coingecko.com/api/v3/coins/markets?vs_currency=inr&order=market_cap_desc&per_page=100&page=1"
      )
      .then((response) => {
        console.log("RESPONSE>>>",response)
        return response.data
      })
      .catch((error) => {
        console.log(error);
           setIsLoading(false)
      });
      return Mycoins;
    
}