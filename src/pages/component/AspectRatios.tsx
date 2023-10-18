import React from 'react';
import Button from '@mui/material/Button';
import {  Box } from '@mui/material';
import './styles.css';
import '../../tail.css';

import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import { AspectRatio } from '@mui/joy';





const codeString = `
import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';

export default function MediaRatio() {
  return (
    <Box sx={{ width: 300, borderRadius: 'sm', p: 1 }}>
      <AspectRatio objectFit="contain">
        <img
          src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800"
          srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
          alt="A beautiful landscape."
        />
      </AspectRatio>
    </Box>
  );
}

`

const codeString1 = `
import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';
`

const codeString2 = `
import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Box from '@mui/joy/Box';

export default function MediaRatio() {
  return (
    <Box sx={{ width: 300, borderRadius: 'sm', p: 1 }}>
      <AspectRatio objectFit="contain">
        <img
          src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800"
          srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
          alt="A beautiful landscape."
        />
      </AspectRatio>
    </Box>
  );
}

`




const AspectRatios = () => {

  const [open, setOpen] = React.useState(false);

  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };



  return (
    <div style={{paddingTop:"1rem", paddingLeft:"2rem"}}>

    <b><h1 style={{fontSize:'2rem'}}>Aspect Ratio</h1></b>

    <p style={{color:"#99999F"}}>Displays content within a desired ratio.</p>

    
     <Button sx={{color:"#191717", backgroundColor:"#EEEEEE",textTransform:"capitalize", margin:'1rem',padding:'0rem 1rem'}} >
      Radix UI
    </Button>
    <Button sx={{color:"#191717", backgroundColor:"#EEEEEE",textTransform:"capitalize",padding:'0rem 1rem'}} >
      API Reference
    </Button>





    <Box sx={{ width: '663px',  typography: 'body1' }}>
  <TabContext value={value}>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <TabList onChange={handleChange} aria-label="lab API tabs example">
        <Tab label="Preview" value="1" />
        <Tab label="Code" value="2" />
        
      </TabList>
    </Box>
    <div style={{border:"1px solid #F1F1F1",  marginTop:"2rem",  width:"675px", borderRadius:"0.5rem"}}>
    <TabPanel value="1">
    <div style={{width:"609px", marginLeft:"8rem", display:"flex",alignItems:"center",justifyContent:"center"}}>



    
   
    <Box sx={{ width: "500px", borderRadius: 'sm', p: 1 }}>
      <AspectRatio objectFit="contain">
        <img style={{width:"800px"}}
          src="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800"
          srcSet="https://images.unsplash.com/photo-1502657877623-f66bf489d236?auto=format&fit=crop&w=800&dpr=2 2x"
          alt="A beautiful landscape."
        />
      </AspectRatio>
    </Box>

      
        
          
    
          
    


    <div style={{padding:"8rem"}}>

  

    </div>



    
  

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






<b> <p style={{marginTop:"3rem",fontSize:"1.6rem"}}>Usage</p></b> 

<hr style={{width:"680px",height:"2px",opacity:"0.3",backgroundColor:"#F5F5F5",margin:"10px 0" }} />

<SyntaxHighlighter language="tsx" style={atomOneDark} customStyle={{
      
        borderRadius: '10px', 
        width: '680px',
        height:'140px'
        

    }}>
      {codeString1}
    </SyntaxHighlighter>



    
<SyntaxHighlighter language="tsx" style={atomOneDark} customStyle={{
      
      borderRadius: '10px', 
      width: '680px',
      height:'500px',
      marginTop:"1.7rem",
      

  }}>
    {codeString2}
  </SyntaxHighlighter>














    </div>
  )
}

export default AspectRatios