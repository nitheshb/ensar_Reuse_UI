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




const codeString = `npx @mui/material add `
const codeString1 = `yarn add @mui/material react-`

const codeString2 = `import * as React from 'react';
import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton, { listItemButtonClasses } from '@mui/joy/ListItemButton';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import ReceiptLong from '@mui/icons-material/ReceiptLong';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';

export default function ExampleCollapsibleList() {
  const [open, setOpen] = React.useState(false);
  const [open2, setOpen2] = React.useState(false);
  return (
    <Box
      sx={{
        width: 320,
        pl: '24px',
      }}
    >
      <List
        size="sm"
        sx={(theme) => ({
          // Gatsby colors
          '--joy-palette-primary-plainColor': '#8a4baf',
          '--joy-palette-neutral-plainHoverBg': 'transparent',
          '--joy-palette-neutral-plainActiveBg': 'transparent',
          '--joy-palette-primary-plainHoverBg': 'transparent',
          '--joy-palette-primary-plainActiveBg': 'transparent',
          [theme.getColorSchemeSelector('dark')]: {
            '--joy-palette-text-secondary': '#635e69',
            '--joy-palette-primary-plainColor': '#d48cff',
          },

          '--List-insetStart': '32px',
          '--ListItem-paddingY': '0px',
          '--ListItem-paddingRight': '16px',
          '--ListItem-paddingLeft': '21px',
          '--ListItem-startActionWidth': '0px',
          '--ListItem-startActionTranslateX': '-50%',

          {
            borderLeftColor: 'divider',
          },
        ]: {
            borderLeftColor: 'currentColor',
          },
          '& [class*="startAction"]': {
            color: 'var(--joy-palette-text-tertiary)',
          },
        })}
      >
        <ListItem nested>
          <ListItem component="div" startAction={<ReceiptLong />}>
            <Typography level="body-xs" sx={{ textTransform: 'uppercase' }}>
              Documentation
            </Typography>
          </ListItem>
          <List sx={{ '--List-gap': '0px' }}>
            <ListItem>
              <ListItemButton selected>Overview</ListItemButton>
            </ListItem>
          </List>
        </ListItem>
        <ListItem sx={{ '--List-gap': '0px' }}>
          <ListItemButton>Quick Start</ListItemButton>
        </ListItem>
        <ListItem
          nested
          sx={{ my: 1 }}
          startAction={
            <IconButton
              variant="plain"
              size="sm"
              color="neutral"
              onClick={() => setOpen(!open)}
            >
              <KeyboardArrowDown
                sx={{ transform: open ? 'initial' : 'rotate(-90deg)' }}
              />
            </IconButton>
          }
        >
          <ListItem>
            <Typography
              level="inherit"
              sx={{
                fontWeight: open ? 'bold' : undefined,
                color: open ? 'text.primary' : 'inherit',
              }}
            >
              Tutorial
            </Typography>
            <Typography component="span" level="body-xs">
              9
            </Typography>
          </ListItem>
          {open && (
            <List sx={{ '--ListItem-paddingY': '8px' }}>
              <ListItem>
                <ListItemButton>Overview</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>
                  0. Set Up Your Development Environment
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>
                  1. Create and Deploy Your First Gatsby Site
                </ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>2. Use and Style React components</ListItemButton>
              </ListItem>
            </List>
          )}
        </ListItem>
        <ListItem
          nested
          sx={{ my: 1 }}
          startAction={
            <IconButton
              variant="plain"
              size="sm"
              color="neutral"
              onClick={() => setOpen2((bool) => !bool)}
            >
              <KeyboardArrowDown
                sx={{ transform: open2 ? 'initial' : 'rotate(-90deg)' }}
              />
            </IconButton>
          }
        >
          <ListItem>
            <Typography
              level="inherit"
              sx={{
                fontWeight: open2 ? 'bold' : undefined,
                color: open2 ? 'text.primary' : 'inherit',
              }}
            >
              How-to Guides
            </Typography>
            <Typography component="span" level="body-xs">
              39
            </Typography>
          </ListItem>
          {open2 && (
            <List sx={{ '--ListItem-paddingY': '8px' }}>
              <ListItem>
                <ListItemButton>Overview</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Local Development</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Routing</ListItemButton>
              </ListItem>
              <ListItem>
                <ListItemButton>Styling</ListItemButton>
              </ListItem>
            </List>
          )}
        </ListItem>
      </List>
    </Box>
  );
}`

const  InstallCollapsible  = () => {


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
          <TabList style={tabPanelStyles} TabIndicatorProps={{sx:{backgroundColor: "#18181B"}}}  onChange={handleChange} aria-label="lab API tabs example">
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
      <Stepper   activeStep={activeStep} orientation="vertical" sx={stepstyle}>
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











  

  

  






export default InstallCollapsible