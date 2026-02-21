import axios from "axios";

export const getCoinData=(id)=>{

 const myData=  axios
      .get(
        `https://api.coingecko.com/api/v3/coins/${id}`
      )
      .then((response) => {
        // setCoins(response.data);
        // setPaginatedCoins(response.data.slice(0, 10));
       return response.data;
      
      })
      .catch((error) => {
        console.log(error);
         
      });
      return myData
}