
import { useState } from 'react';
import SwipeableDrawer from '@mui/material/SwipeableDrawer';
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import IconButton from '@mui/material/IconButton';
import { Link } from 'react-router';

export default function SwipeableTemporaryDrawer() {
   const [open,setOpen]=useState(false)
  return (
    <div>
     
          <IconButton onClick={()=>setOpen(true)}>
            < MenuRoundedIcon className='link' />
            </IconButton>
          <SwipeableDrawer anchor={'right'} open={open} onClose={()=>setOpen(false)}  >
         <div className='menu'>
            <Link to="/home" className="sidebar">
            <p className="barlink">Home</p>
           </Link>
           <Link to="/compare" className="sidebar">
            <p className="barlink">Compare</p>
           </Link>
           <Link to="/watchlist" className="sidebar">
            <p className="barlink">Watchlist</p>
           </Link >
           <Link to="/dashboard" className="sidebar">
            <p className="barlink">Dashboard</p>
           </Link>
         </div>
          </SwipeableDrawer >

    </div>
  );
}
