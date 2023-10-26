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



import './copystyle.css';

import {CopyToClipboard} from 'react-copy-to-clipboard';

import ContentCopyIcon from '@mui/icons-material/ContentCopy';

import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';

import Switch from '@mui/material/Switch';


import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';

import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';

import InstallSwitchs from '../install/installSwitch';

const tablabel = {
  color:"#18181B"
};
 

const codeString3 =`yarn add @radix-ui/react-switch`

const codeString4 = `"use client"

import * as React from "react"
import * as SwitchPrimitives from "@radix-ui/react-switch"

import { cn } from "@/lib/utils"

const Switch = React.forwardRef<
  React.ElementRef<typeof SwitchPrimitives.Root>,
  React.ComponentPropsWithoutRef<typeof SwitchPrimitives.Root>
>(({ className, ...props }, ref) => (
  <SwitchPrimitives.Root
    className={cn(
      "peer inline-flex h-[20px] w-[36px] shrink-0 cursor-pointer items-center rounded-full border-2 border-transparent shadow-sm transition-colors focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-ring focus-visible:ring-offset-2 focus-visible:ring-offset-background disabled:cursor-not-allowed disabled:opacity-50 data-[state=checked]:bg-primary data-[state=unchecked]:bg-input",
      className
    )}
    {...props}
    ref={ref}
  >
    <SwitchPrimitives.Thumb
      className={cn(
        "pointer-events-none block h-4 w-4 rounded-full bg-background shadow-lg ring-0 transition-transform data-[state=checked]:translate-x-4 data-[state=unchecked]:translate-x-0"
      )}
    />
  </SwitchPrimitives.Root>
))
Switch.displayName = SwitchPrimitives.Root.displayName

export { Switch }
`


const codeString = `import * as React from 'react';
import Switch from '@mui/material/Switch';

export default function ControlledSwitches() {
  const [checked, setChecked] = React.useState(true);

  const handleChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };

  return (
    <Switch
      checked={checked}
      onChange={handleChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
  );
}
`
const codeString1 = `import Switch from '@mui/material/Switch';`

const codeString2 = `<Switch
checked={checked}
onChange={handleChange}
inputProps={{ 'aria-label': 'controlled' }}
/>`










const  SwitchPage  = () => {



  
  const [checked, setChecked] = React.useState(true);

  const handleSwitchChange = (event: React.ChangeEvent<HTMLInputElement>) => {
    setChecked(event.target.checked);
  };



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

    <b><h1 style={{fontSize:'2rem'}}>Switch</h1></b>
    
    <p>A control that allows the user to toggle between checked and not checked.</p>
    
    
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
            <Tab style={tablabel}  label="Preview" value="1" />
            <Tab style={tablabel} label="Code" value="2" />
            
          </TabList>
        </Box>
        <div style={{border:"1px solid #F1F1F1",  marginTop:"2rem",  width:"675px", borderRadius:"0.5rem"}}>
    
        <TabPanel value="1">
        <div style={{width:"609px", height:"400px", display:"flex",alignItems:"center",justifyContent:"center"}}>
    
    
          
            
              
        
        <Switch
      checked={checked}
      onChange={handleSwitchChange}
      inputProps={{ 'aria-label': 'controlled' }}
    />
        
    
    
        
    
    
    
        
      
    
        </div>
        
        </TabPanel>
        </div>
        <TabPanel  value="2"> 

        <div className="parentDiv">


        <SyntaxHighlighter language="tsx" style={atomOneDark} customStyle={{
            padding: '25px' ,
            borderRadius: '10px', 
            width: '620px',
            height:'400px'
            
    
        }}>
          {codeString}
        </SyntaxHighlighter>
          
          
          </div> 





</TabPanel>
        
      </TabContext>
    </Box>
    
    
    <b> <p style={{marginTop:"3rem",fontSize:"1.6rem"}}>Installation</p></b> 
    
    <hr style={{width:"680px",height:"2px",opacity:"0.3",backgroundColor:"#F5F5F5",margin:"10px 0" }} />

    <InstallSwitchs/>















    

    
    
    
    
    <b> <p style={{marginTop:"3rem",fontSize:"1.6rem"}}>Usage</p></b> 
    
    <hr style={{width:"680px",height:"2px",opacity:"0.3",backgroundColor:"#F5F5F5",margin:"10px 0" }} />


    <div className="parentDiv">

    {!copy ? (
          <CopyToClipboard  text={codeString}>
      
          <button className='copyButton'><ContentCopyIcon/></button>
          
        </CopyToClipboard>
    ):(

  <CopyToClipboard  text={codeString}>
      
  <button className='copyButton'><LibraryAddCheckIcon/></button>
  
   </CopyToClipboard>
  )}



    
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
    

    
    
    <div className='parentDiv'>

    
    
    
    {!copy ? (
          <CopyToClipboard  text={codeString2}>
      
          <button className='copyButton'><ContentCopyIcon/></button>
          
        </CopyToClipboard>
    ):(

  <CopyToClipboard  text={codeString2}>
      
  <button className='copyButton'><LibraryAddCheckIcon/></button>
  
   </CopyToClipboard>
  )}

      






    <SyntaxHighlighter language="tsx" style={atomOneDark} customStyle={{
          
          borderRadius: '10px', 
          width: '680px',
          height:'140px',
          marginTop:"1.7rem",
          
    
      }}>
        {codeString2}
      </SyntaxHighlighter>


    </div>
        

    
    
    
    
    
    </div>
  )
}











  

  

  

 

export default SwitchPage