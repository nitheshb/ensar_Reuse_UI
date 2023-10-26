import React, { useState } from 'react';
import {  Box } from '@mui/material';
import './style1.css';
import '../../tail.css';

import Tab from '@mui/material/Tab';
import { Button } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';


import Stepper from '@mui/material/Stepper';
import Step from '@mui/material/Step';
import StepLabel from '@mui/material/StepLabel';
import StepContent from '@mui/material/StepContent';
import Paper from '@mui/material/Paper';
import Typography from '@mui/material/Typography';



import {CopyToClipboard} from 'react-copy-to-clipboard';

import ContentCopyIcon from '@mui/icons-material/ContentCopy';

import LibraryAddCheckIcon from '@mui/icons-material/LibraryAddCheck';


const stepstyle = {
  "& .Mui-active":{
  "&.MuiStepIcon-root":{
  color:"#F4F4F5",
  
  
},
"& .MuiStepIcon-text":{
  
  fontSize:"1rem",
  fill:"black"
  
}

},
"& .Mui-completed":{
 "&.MuiStepIcon-root":{
   color:"#F4F4F5",
  
},
"& .MuiStepIcon-text":{
  
  fontSize:"2rem",
  fill:"black"
  
}
}
}




const codeString = `npx @mui/material add separator`
const codeString1 = `yarn add @radix-ui/react-separator`

const codeString2 = `import * as React from 'react';
import Typography from '@mui/material/Typography';
import Breadcrumbs from '@mui/material/Breadcrumbs';
import Link from '@mui/material/Link';
import HomeIcon from '@mui/icons-material/Home';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import GrainIcon from '@mui/icons-material/Grain';

function handleClick(event: React.MouseEvent<HTMLDivElement, MouseEvent>) {
  event.preventDefault();
  console.info('You clicked a breadcrumb.');
}

export default function IconBreadcrumbs() {
  return (
    <div role="presentation" onClick={handleClick}>
      <Breadcrumbs aria-label="breadcrumb">
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          href="/"
        >
          <HomeIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          MUI
        </Link>
        <Link
          underline="hover"
          sx={{ display: 'flex', alignItems: 'center' }}
          color="inherit"
          href="/material-ui/getting-started/installation/"
        >
          <WhatshotIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Core
        </Link>
        <Typography
          sx={{ display: 'flex', alignItems: 'center' }}
          color="text.primary"
        >
          <GrainIcon sx={{ mr: 0.5 }} fontSize="inherit" />
          Breadcrumb
        </Typography>
      </Breadcrumbs>
    </div>
  );
}`

const  InstallSeparator  = () => {


    const tabPanelStyle = {
        padding: 0,
      };

      const tabPanelStyles = {
        color:"#18181B",
        borderColor: 'divider',
    
        
        
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




  const steps = [
    {
      label: 'Install the following dependencies:',
      description: <div className='parentDiv'>

    
      {!copy ? (
            <CopyToClipboard  text={codeString1}>
        
            <button className='copybtn'><ContentCopyIcon/></button>
            
          </CopyToClipboard>
      ):(
      
      <CopyToClipboard  text={codeString1}>
        
      <button className='copybtn'><LibraryAddCheckIcon/></button>
      
      </CopyToClipboard>
      )}
      
        
      
      
      
      
      
      
      <SyntaxHighlighter language="tsx" style={atomOneDark} customStyle={{
            
            borderRadius: '10px', 
            width: '650px',
            height:'50px',
            marginTop:"1.7rem",
            
      
        }}>
          {codeString1}
        </SyntaxHighlighter>
      
      
      </div>,
    },
    {
      label: 'Copy and paste the following code into your project.',
      description: <div className='parentDiv'>

    
      {!copy ? (
            <CopyToClipboard  text={codeString2}>
        
            <button className='copybtn'><ContentCopyIcon/></button>
            
          </CopyToClipboard>
      ):(
      
      <CopyToClipboard  text={codeString2}>
        
      <button className='copybtn'><LibraryAddCheckIcon/></button>
      
      </CopyToClipboard>
      )}
      
        
      
      
      
      
      
      
      <SyntaxHighlighter language="tsx" style={atomOneDark} customStyle={{
            
            borderRadius: '10px', 
            width: '650px',
            height:'500px',
            marginTop:"1.7rem",
            
      
        }}>
          {codeString2}
        </SyntaxHighlighter>
      
      
      </div>,
    },
    {
      label: 'Update the import paths to match your project setup.',
      description: ``,
    },
  ];
  
  
    const [activeStep, setActiveStep] = React.useState(0);
  
    const handleNext = () => {
      setActiveStep((prevActiveStep) => prevActiveStep + 1);
    };
  
    const handleBack = () => {
      setActiveStep((prevActiveStep) => prevActiveStep - 1);
    };
  
    const handleReset = () => {
      setActiveStep(0);
    };




  return (
    <div  style={{paddingTop:"0rem", paddingLeft:"0rem"}}>

    
    <Box sx={{ width: '690px',   typography: 'body1' }}>
      <TabContext   value={value}>
        <Box style={tabPanelStyles}   sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList style={tabPanelStyles} TabIndicatorProps={{sx:{backgroundColor: "#18181B"}}} onChange={handleChange} aria-label="lab API tabs example">
            <Tab style={tabPanelStyles}  label="CLI" value="1" />
            <Tab style={tabPanelStyles}  label="Manual" value="2" />
            
          </TabList>
        </Box>
        <div>
    
        <TabPanel style={tabPanelStyle}  value="1">
        <div style={{width:"400px", height:"100px", display:"flex",alignItems:"flex-start"}}>


        <div className='parentDiv'>

    
    
    
{!copy ? (
      <CopyToClipboard  text={codeString2}>
  
      <button className='copyButtons'><ContentCopyIcon/></button>
      
    </CopyToClipboard>
):(

<CopyToClipboard  text={codeString2}>
  
<button className='copyButtons'><LibraryAddCheckIcon/></button>

</CopyToClipboard>
)}

  






    <SyntaxHighlighter language="tsx" style={atomOneDark} customStyle={{
      
      borderRadius: '10px', 
      width: '690px',
      height:'50px',
      marginTop:"1.7rem",
      

     }}>
     {codeString}
     </SyntaxHighlighter>


    </div>
    
    

      
    
        </div>
        
        </TabPanel>
        </div>




        <TabPanel style={tabPanelStyle} value="2">   
        <Box sx={{ maxWidth: 690 }}>
      <Stepper activeStep={activeStep} orientation="vertical" sx={stepstyle}>
        {steps.map((step, index) => (
          <Step   key={step.label}>
            <StepLabel 
            
              optional={
                index === 2 ? (
                  <Typography variant="caption"></Typography>
                ) : null
              }
            >
              {step.label}
            </StepLabel>
            <StepContent  sx={{padding:2}}>
              <Typography >{step.description}</Typography>
              <Box sx={{ mb: 2 }}>
                <div>
                  <Button
                    variant="contained"
                    onClick={handleNext}
                    sx={{ marginLeft: 29, mt: 1, mr: 1, backgroundColor:"#C7C7C8" }}
                  >
                    {index === steps.length - 1 ? 'Finish' : 'Continue'}
                  </Button>
                  <Button
                    disabled={index === 0}
                    onClick={handleBack}
                    sx={{ mt: 1, mr: 1 }}
                  >
                    
                  </Button>
                </div>
              </Box>
            </StepContent>
          </Step>
        ))}
      </Stepper>
      {activeStep === steps.length && (
        <Paper square elevation={0} sx={{ p: 3 }}>
          
          <Button  onClick={handleReset} sx={{ mt: 1, mr: 1, color:"#09090B" }}>
            Reset
          </Button>
        </Paper>
      )}
    </Box>
        </TabPanel>
        
      </TabContext>
    </Box>
    
    

    
    
    
    
    
    </div>
  )
}











  

  

  



export default InstallSeparator