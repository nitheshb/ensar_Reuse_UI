import React, { useState } from 'react';
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

import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';




import './copystyle.css';

import ContentCopyIcon from '@mui/icons-material/ContentCopy';

import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';

import {CopyToClipboard} from 'react-copy-to-clipboard';


import InstallSkeleton from '../install/InstallSkeleton';

const codeString = `import * as React from 'react';
import Skeleton from '@mui/material/Skeleton';
import Stack from '@mui/material/Stack';

export default function Variants() {
  return (
    <Stack spacing={1}>
      {/* For variant="text", adjust the height via font-size */}
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />

     
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={60} />
      <Skeleton variant="rounded" width={210} height={60} />
    </Stack>
  );
}
`
const codeString1 = `import Skeleton from '@mui/material/Skeleton';`

const codeString2 = `<Skeleton variant="circular" width={40} height={40} />`

const  SkeletonPage  = () => {


  const [open, setOpen] = React.useState(false);

  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };



  const [copy,setCopy] = useState(false);

  const handleCopy = () => {
    
    console.log('Code copied to clipboard');
  };



  return (
    <div  style={{paddingTop:"1rem", paddingLeft:"2rem"}}>

    <b><h1 style={{fontSize:'2rem'}}>Skeleton</h1></b>
    
    <p style={{color:"#99999F"}}>Use to show a placeholder while content is loading.</p>
    
    
     <Button sx={{color:"#191717", backgroundColor:"#EEEEEE",textTransform:"capitalize", margin:'1rem',padding:'0rem 1rem'}} >
      Radix UI
    </Button>
    <Button sx={{color:"#191717", backgroundColor:"#EEEEEE",textTransform:"capitalize",padding:'0rem 1rem'}} >
      API Reference
    </Button>
    
    
    
    
    
    
    <Box sx={{ width: '663px',   typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Preview" value="1" />
            <Tab label="Code" value="2" />
            
          </TabList>
        </Box>
        <div style={{border:"1px solid #F1F1F1",  marginTop:"2rem",  width:"675px", borderRadius:"0.5rem"}}>
    
        <TabPanel value="1">
        <div style={{width:"609px", height:"400px", display:"flex",alignItems:"center",justifyContent:"center"}}>
    
    
        <Stack spacing={1}>
      {/* For variant="text", adjust the height via font-size */}
      <Skeleton variant="text" sx={{ fontSize: '1rem' }} />

      {/* For other variants, adjust the size with `width` and `height` */}
      <Skeleton variant="circular" width={40} height={40} />
      <Skeleton variant="rectangular" width={210} height={60} />
      <Skeleton variant="rounded" width={210} height={60} />
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
    
    <InstallSkeleton/>
    
    <b> <p style={{marginTop:"3rem",fontSize:"1.6rem"}}>Usage</p></b> 
    
    <hr style={{width:"680px",height:"2px",opacity:"0.3",backgroundColor:"#F5F5F5",margin:"10px 0" }} />


    <div className="parentDiv">
    {!copy ? (
          <CopyToClipboard  text={codeString1}>
      
          <button className='copyButton'><ContentCopyIcon/></button>
          
        </CopyToClipboard>
    ):(

  <CopyToClipboard  text={codeString1}>
      
  <button className='copyButton'><LibraryAddCheckIcon/></button>
  
   </CopyToClipboard>
  )}


<SyntaxHighlighter language="tsx" style={atomOneDark} customStyle={{
          
          borderRadius: '10px', 
          width: '680px',
          height:'50px'
          
  
      }}>
        {codeString1}
      </SyntaxHighlighter>

    </div>
    





    <div className="parentDiv">
    {!copy ? (
          <CopyToClipboard  text={codeString1}>
      
          <button className='copyButton'><ContentCopyIcon/></button>
          
        </CopyToClipboard>
    ):(

  <CopyToClipboard  text={codeString1}>
      
  <button className='copyButton'><LibraryAddCheckIcon/></button>
  
   </CopyToClipboard>
  )}


<SyntaxHighlighter language="tsx" style={atomOneDark} customStyle={{
          
          borderRadius: '10px', 
          width: '680px',
          height:'50px',
          marginTop:"1.7rem",
          
    
      }}>
        {codeString2}
      </SyntaxHighlighter>

    </div>
        
    
    
    
        

    
    
    
    
    
    </div>
  )
}











  

  

  











export default SkeletonPage