import React from 'react';
import {  Box } from '@mui/material';
import './styles.css';
import '../../tail.css';

import Tab from '@mui/material/Tab';
import { Button } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';


import IconButton from '@mui/joy/IconButton';
import Stack from '@mui/joy/Stack';
import FormatBold from '@mui/icons-material/FormatBold';

const tablabel = {
  color:"#18181B"
};

const codeString = `import * as React from 'react';
import Button from '@mui/joy/Button';
import IconButton from '@mui/joy/IconButton';
import Stack from '@mui/joy/Stack';
import FormatBold from '@mui/icons-material/FormatBold';

export default function ToggleButtons() {
  const [pressed, setPressed] = React.useState(false);
  return (
    <Stack spacing={2} direction="row">
      <Button
        variant="outlined"
        color="neutral"
        onClick={() => setPressed(!pressed)}
        aria-pressed={pressed ? 'true' : 'false'}
        sx={(theme) => ({
          []: {
            ...theme.variants.outlinedActive.neutral,
            borderColor: theme.vars.palette.neutral.outlinedHoverBorder,
          },
        })}
      >
        Button
      </Button>
      <IconButton
        variant="outlined"
        color="neutral"
        onClick={() => setPressed(!pressed)}
        aria-pressed={pressed ? 'true' : 'false'}
        sx={(theme) => ({
          []: {
            ...theme.variants.outlinedActive.neutral,
            borderColor: theme.vars.palette.neutral.outlinedHoverBorder,
          },
        })}
      >
        <FormatBold />
      </IconButton>
    </Stack>
  );
}
`
const codeString1 = `import Button from '@mui/joy/Button';
import IconButton from '@mui/joy/IconButton';
import Stack from '@mui/joy/Stack';
import FormatBold from '@mui/icons-material/FormatBold';`

const codeString2 = `<Stack spacing={2} direction="row">
<Button
  variant="outlined"
  color="neutral"
  onClick={() => setPressed(!pressed)}
  aria-pressed={pressed ? 'true' : 'false'}
  sx={(theme) => ({
    [&[aria-pressed="true"]]: {
      ...theme.variants.outlinedActive.neutral,
      borderColor: theme.vars.palette.neutral.outlinedHoverBorder,
    },
  })}
>
  Button
</Button>
<IconButton
  variant="outlined"
  color="neutral"
  onClick={() => setPressed(!pressed)}
  aria-pressed={pressed ? 'true' : 'false'}
  sx={(theme) => ({
    []: {
      ...theme.variants.outlinedActive.neutral,
      borderColor: theme.vars.palette.neutral.outlinedHoverBorder,
    },
  })}
>
  <FormatBold />
</IconButton>
</Stack>`

const  Toggle  = () => {


  const [open, setOpen] = React.useState(false);

  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  const [pressed, setPressed] = React.useState(false);




  return (
    <div  style={{paddingTop:"1rem", paddingLeft:"2rem"}}>

    <b><h1 style={{fontSize:'2rem'}}>Toggle</h1></b>
    
    <p style={{color:"#99999F"}}>A two-state button that can be either on or off.</p>
    
    
     <Button sx={{color:"#191717", backgroundColor:"#EEEEEE",textTransform:"capitalize", margin:'1rem',padding:'0rem 1rem'}} >
      Radix UI
    </Button>
    <Button sx={{color:"#191717", backgroundColor:"#EEEEEE",textTransform:"capitalize",padding:'0rem 1rem'}} >
      API Reference
    </Button>
    
    
    
    
    
    
    <Box sx={{ width: '663px',   typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList TabIndicatorProps={{sx:{backgroundColor: "#18181B"}}} onChange={handleChange} aria-label="lab API tabs example">
            <Tab style={tablabel} label="Preview" value="1" />
            <Tab style={tablabel} label="Code" value="2" />
            
          </TabList>
        </Box>
        <div style={{border:"1px solid #F1F1F1",  marginTop:"2rem",  width:"675px", borderRadius:"0.5rem"}}>
    
        <TabPanel value="1">
        <div style={{width:"609px", height:"400px", display:"flex",alignItems:"center",justifyContent:"center"}}>
    
    
          
            
        <Stack spacing={2} direction="row">
      <Button
        variant="outlined"
        
        onClick={() => setPressed(!pressed)}
        aria-pressed={pressed ? 'true' : 'false'}
        sx={(theme) => ({
          [`&[aria-pressed="true"]`]: {
            
          },
        })}
      >
        Button
      </Button>
      <IconButton
        variant="outlined"
        color="neutral"
        onClick={() => setPressed(!pressed)}
        aria-pressed={pressed ? 'true' : 'false'}
        sx={(theme) => ({
          [`&[aria-pressed="true"]`]: {
            ...theme.variants.outlinedActive.neutral,
            borderColor: theme.vars.palette.neutral.outlinedHoverBorder,
          },
        })}
      >
        <FormatBold />
      </IconButton>
    </Stack>     
        
              
        
    
    
        
    
    
    
        
      
    
        </div>
        
        </TabPanel>
        </div>
        <TabPanel value="2">   
         <SyntaxHighlighter language="tsx" style={atomOneDark} customStyle={{
            padding: '25px' ,
            borderRadius: '10px', 
            width: '620px',
            height:'400px'
            
    
        }}>
          {codeString}
        </SyntaxHighlighter></TabPanel>
        
      </TabContext>
    </Box>
    
    

    <b> <p style={{marginTop:"3rem",fontSize:"1.6rem"}}>Installation</p></b> 
    
    <hr style={{width:"680px",height:"2px",opacity:"0.3",backgroundColor:"#F5F5F5",margin:"10px 0" }} />
    
    
    
    
    
    <b> <p style={{marginTop:"3rem",fontSize:"1.6rem"}}>Usage</p></b> 
    
    <hr style={{width:"680px",height:"2px",opacity:"0.3",backgroundColor:"#F5F5F5",margin:"10px 0" }} />
    
    <SyntaxHighlighter language="tsx" style={atomOneDark} customStyle={{
          
            borderRadius: '10px', 
            width: '680px',
            height:'130px'
            
    
        }}>
          {codeString1}
        </SyntaxHighlighter>
    
    
    
        
    <SyntaxHighlighter language="tsx" style={atomOneDark} customStyle={{
          
          borderRadius: '10px', 
          width: '680px',
          height:'700px',
          marginTop:"1.7rem",
          
    
      }}>
        {codeString2}
      </SyntaxHighlighter>
    
    
    
    
    
    </div>
  )
}











  

  

  













export default Toggle