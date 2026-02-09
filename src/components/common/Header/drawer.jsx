
import { useState } from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import Button from '@mui/material/Button';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import IconButton from '@mui/material/IconButton';

export default function SwipeableTemporaryDrawer() {
   const [open,setOpen]=useState(false)
  return (
    <div>
     
          <IconButton onClick={()=>setOpen(true)}>
            < MenuRoundedIcon className='link' />
            </IconButton>
          <SwipeableDrawer anchor={'right'} open={open} onClose={()=>setOpen(false)}  >
         <div className='menu'>
            <a href="/" className="sidebar">
            <p className="barlink">Home</p>
           </a>
           <a href="/" className="sidebar">
            <p className="barlink">Compare</p>
           </a>
           <a href="/" className="sidebar">
            <p className="barlink">Watchlist</p>
           </a >
           <a href="/" className="sidebar">
            <p className="barlink">Dashboard</p>
           </a>
         </div>
          </SwipeableDrawer >

    </div>
  );
}
