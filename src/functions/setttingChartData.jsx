import { convertDate } from "./convertDate"

export const settinChartData=(setChartData,prices)=>{
   
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
           
}