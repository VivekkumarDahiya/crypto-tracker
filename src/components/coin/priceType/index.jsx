
import ToggleButton from '@mui/material/ToggleButton';
import ToggleButtonGroup from '@mui/material/ToggleButtonGroup';

import "./style.css"

// export default function TogglePriceType({priceType,handlPriceTypeChange}) {
 

//   return (
//     <div className='toggle-prices'>
//     <ToggleButtonGroup
//       value={priceType}
//       exclusive
//       onChange={ handlPriceTypeChange}
//       sx={{
//         "&.Mui-selected":{
//             color:"var(--blue) !important",
//         },
//         borderColor:"var(--blue)",
//         border:"unset !important",
//         "& .MuiToggleButtonGroup-grouped":{
//             border:"1px solid !important",
//             borderColor:"unset",
//             color:"var(--blue)",
//         },
//         "& .MuiToggleButton-standard":{
//             color:"var(--blue)",
//         }
//       }}
//      >

//       <ToggleButton value="prices" className='toggle-btn' >Price  </ToggleButton>

//       <ToggleButton value="market_cap"  className='toggle-btn'>Market Cap </ToggleButton>

//       <ToggleButton value="total_volumes"  className='toggle-btn'>Total Volume</ToggleButton>

//     </ToggleButtonGroup>
//     </div>
//   );
// }


export default function TogglePriceType({ priceType, handlPriceTypeChange }) {
  return (
    <div className='toggle-prices'>
      <ToggleButtonGroup
        value={priceType}
        exclusive
        onChange={handlPriceTypeChange}
        sx={{
          border: "1px solid var(--blue)",
          "& .MuiToggleButton-root": {
            color: "var(--blue)",
            border: "1px solid var(--blue)",
          },
          "& .MuiToggleButton-root.Mui-selected": {
            backgroundColor: "var(--blue)",
            color: "#fff",
          }
        }}
      >
        <ToggleButton value="prices" className='toggle-btn'>
          Price
        </ToggleButton>

        <ToggleButton value="market_caps" className='toggle-btn'>
          Market Cap
        </ToggleButton>

        <ToggleButton value="total_volumes" className='toggle-btn'>
          Total Volume
        </ToggleButton>
      </ToggleButtonGroup>
    </div>
  );
}