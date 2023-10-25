
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




const codeString = `npx @mui/material add `
const codeString1 = `yarn add @mui/material react-`

const codeString2 = `import * as React from 'react';
import AspectRatio from '@mui/joy/AspectRatio';
import Button from '@mui/joy/Button';
import Card from '@mui/joy/Card';
import CardContent from '@mui/joy/CardContent';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import BookmarkAdd from '@mui/icons-material/BookmarkAddOutlined';

export default function BasicCard() {
  return (
    <Card sx={{ width: 320 }}>
      <div>
        <Typography level="title-lg">Yosemite National Park</Typography>
        <Typography level="body-sm">April 24 to May 02, 2021</Typography>
        <IconButton
          aria-label="bookmark Bahamas Islands"
          variant="plain"
          color="neutral"
          size="sm"
          sx={{ position: 'absolute', top: '0.875rem', right: '0.5rem' }}
        >
          <BookmarkAdd />
        </IconButton>
      </div>
      <AspectRatio minHeight="120px" maxHeight="200px">
        <img
          src="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286"
          srcSet="https://images.unsplash.com/photo-1527549993586-dff825b37782?auto=format&fit=crop&w=286&dpr=2 2x"
          loading="lazy"
          alt=""
        />
      </AspectRatio>
      <CardContent orientation="horizontal">
        <div>
          <Typography level="body-xs">Total price:</Typography>
          <Typography fontSize="lg" fontWeight="lg">
            $2,900
          </Typography>
        </div>
        <Button
          variant="solid"
          size="md"
          color="primary"
          aria-label="Explore Bahamas Islands"
          sx={{ ml: 'auto', alignSelf: 'center', fontWeight: 600 }}
        >
          Explore
        </Button>
      </CardContent>
    </Card>
  );
}`

const  InstallCard  = () => {


    const tabPanelStyle = {
        padding: 0,
      };

      const tabPanelStyles = {
        color:"#18181B",
        borderColor: 'divider',
    
        
        
      };

      const stepstyle ={
        color:"#F4F4F5",
        
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
          <TabList style={tabPanelStyles}  onChange={handleChange} aria-label="lab API tabs example">
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
      <Stepper style={stepstyle}  activeStep={activeStep} orientation="vertical">
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











  

  

  





export default InstallCard