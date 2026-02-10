import { useState } from 'react';
import Box from '@mui/material/Box';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { createTheme, ThemeProvider } from '@mui/material/styles';

export default function TabComponent() {
  const [value, setValue] = useState('grid');

  const handleChange = (event, newValue) => {
    setValue(newValue);
  };

  const style={
    color:"var(--white)",
    width:"50vh",
    fontSize:"1.5rem",
    fontWeight:600,
    fontFamily:"Inter",
    textTransform:"capitalize"
  }

  const theme=createTheme({
    palette:{
        primary:{
        main:"#3a80e9",
        },
    },
  })

  return (
    <ThemeProvider  theme={theme}>
      <TabContext value={value}>
          <TabList onChange={handleChange} variant="fullWidth">
            <Tab
             label="Grid" 
             value="grid"
             sx={style} />
            <Tab label="List" value="list"  sx={style} />
          </TabList>
        <TabPanel value="grid">
              <div>mapping for grids</div>
              
        </TabPanel>
        <TabPanel value="list">
            <div>mapping for lists</div>
        </TabPanel>
        
      </TabContext>
    </ThemeProvider >
  );
}
