


const ConverNumber=(number)=>{
          const numberWithCommas=number.toLocaleString()
          var arr=numberWithCommas.split(" ")
     if(arr.length==5){
// Trilion
   return arr[0]+"." +arr[1].slice(0,2)+"T"
     }else if(arr.length==4){
        //Billion
       return arr[0]+"." +arr[1].slice(0,2)+"B" 
     }else if(arr.length==3){
        //million
           return arr[0]+"." +arr[1].slice(0,2)+"M" 
     }else if(arr.length==2){
        //Thousand
           return arr[0]+"." +arr[1].slice(0,2)+"k" 
     }else{
        return number.toLocaleString();
     }
}
export default ConverNumber;