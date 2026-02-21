

import InputLabel from '@mui/material/InputLabel';
import MenuItem from '@mui/material/MenuItem';
import "./style.css";

import Select from '@mui/material/Select';
import { useState } from 'react';

export default function SelectDays({days,handleDaysChange}) {
 

  return (
    <div  className='select-days'>
       <p>Price Change In </p>
        <Select
        sx={{
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
  }}
          labelId="demo-simple-select-label"
          id="demo-simple-select"
          value={days}
          label="Days"
          onChange={handleDaysChange}
        >
          <MenuItem value={7}>7 Days</MenuItem>
          <MenuItem value={30}>30 Days</MenuItem>
          <MenuItem value={60}>60 Days</MenuItem>
          <MenuItem value={90}>90 Days</MenuItem>
          <MenuItem value={120}>120 Days</MenuItem>
          <MenuItem value={365}>1 Year</MenuItem>
        </Select>
     
    </div>
  );
}
