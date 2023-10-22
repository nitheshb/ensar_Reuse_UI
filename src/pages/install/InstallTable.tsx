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

const codeString = `yarn add @mui/material table`
const codeString1 = `import * as React from 'react';
import Table from '@mui/material/Table';
import TableBody from '@mui/material/TableBody';
import TableCell from '@mui/material/TableCell';
import TableContainer from '@mui/material/TableContainer';
import TableHead from '@mui/material/TableHead';
import TableRow from '@mui/material/TableRow';
import Paper from '@mui/material/Paper';

function createData(
  name: string,
  calories: number,
  fat: number,
  carbs: number,
  protein: number,
) {
  return { name, calories, fat, carbs, protein };
}

const rows = [
  createData('Frozen yoghurt', 159, 6.0, 24, 4.0),
  createData('Ice cream sandwich', 237, 9.0, 37, 4.3),
  createData('Eclair', 262, 16.0, 24, 6.0),
  createData('Cupcake', 305, 3.7, 67, 4.3),
  createData('Gingerbread', 356, 16.0, 49, 3.9),
];

export default function BasicTable() {
  return (
    <TableContainer component={Paper}>
      <Table sx={{ minWidth: 650 }} aria-label="simple table">
        <TableHead>
          <TableRow>
            <TableCell>Dessert (100g serving)</TableCell>
            <TableCell align="right">Calories</TableCell>
            <TableCell align="right">Fat&nbsp;(g)</TableCell>
            <TableCell align="right">Carbs&nbsp;(g)</TableCell>
            <TableCell align="right">Protein&nbsp;(g)</TableCell>
          </TableRow>
        </TableHead>
        <TableBody>
          {rows.map((row) => (
            <TableRow
              key={row.name}
              sx={{ '&:last-child td, &:last-child th': { border: 0 } }}
            >
              <TableCell component="th" scope="row">
                {row.name}
              </TableCell>
              <TableCell align="right">{row.calories}</TableCell>
              <TableCell align="right">{row.fat}</TableCell>
              <TableCell align="right">{row.carbs}</TableCell>
              <TableCell align="right">{row.protein}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </TableContainer>
  );
}`

const codeString2 = `import * as React from 'react';
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
}`

const  InstallTable  = () => {


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
      label: 'Copy and paste the following code into your project.',
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
            height:'800px',
            marginTop:"1.7rem",
            
      
        }}>
          {codeString1}
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
        <Box sx={{ maxWidth: 690, }}>
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
            <StepContent >
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











  

  

  


export default InstallTable