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
import TextField from '@mui/material/TextField';
import Autocomplete from '@mui/material/Autocomplete';

export default function ComboBox() {
  return (
    <Autocomplete
      disablePortal
      id="combo-box-demo"
      options={top100Films}
      sx={{ width: 300 }}
      renderInput={(params) => <TextField {...params} label="Movie" />}
    />
  );
}

// Top 100 films as rated by IMDb users. http://www.imdb.com/chart/top
const top100Films = [
  { label: 'The Shawshank Redemption', year: 1994 },
  { label: 'The Godfather', year: 1972 },
  { label: 'The Godfather: Part II', year: 1974 },
  { label: 'The Dark Knight', year: 2008 },
  { label: '12 Angry Men', year: 1957 },
  { label: "Schindler's List", year: 1993 },
  { label: 'Pulp Fiction', year: 1994 },
  {
    label: 'The Lord of the Rings: The Return of the King',
    year: 2003,
  },
  { label: 'The Good, the Bad and the Ugly', year: 1966 },
  { label: 'Fight Club', year: 1999 },
  {
    label: 'The Lord of the Rings: The Fellowship of the Ring',
    year: 2001,
  },
  {
    label: 'Star Wars: Episode V - The Empire Strikes Back',
    year: 1980,
  },
  { label: 'Forrest Gump', year: 1994 },
  { label: 'Inception', year: 2010 },
  {
    label: 'The Lord of the Rings: The Two Towers',
    year: 2002,
  },
  { label: "One Flew Over the Cuckoo's Nest", year: 1975 },
  { label: 'Goodfellas', year: 1990 },
  { label: 'The Matrix', year: 1999 },
  { label: 'Seven Samurai', year: 1954 },
  {
    label: 'Star Wars: Episode IV - A New Hope',
    year: 1977,
  },
  { label: 'City of God', year: 2002 },
  { label: 'Se7en', year: 1995 },
  { label: 'The Silence of the Lambs', year: 1991 },
  { label: "It's a Wonderful Life", year: 1946 },
  { label: 'Life Is Beautiful', year: 1997 },
  { label: 'The Usual Suspects', year: 1995 },
  { label: 'Léon: The Professional', year: 1994 },
  { label: 'Spirited Away', year: 2001 },
  { label: 'Saving Private Ryan', year: 1998 },
  { label: 'Once Upon a Time in the West', year: 1968 },
  { label: 'American History X', year: 1998 },
  { label: 'Interstellar', year: 2014 },
  { label: 'Casablanca', year: 1942 },
  { label: 'City Lights', year: 1931 },
  { label: 'Psycho', year: 1960 },
  { label: 'The Green Mile', year: 1999 },
  { label: 'The Intouchables', year: 2011 },
  { label: 'Modern Times', year: 1936 },
  { label: 'Raiders of the Lost Ark', year: 1981 },
  { label: 'Rear Window', year: 1954 },
  { label: 'The Pianist', year: 2002 },
  { label: 'The Departed', year: 2006 },
  { label: 'Terminator 2: Judgment Day', year: 1991 },
  { label: 'Back to the Future', year: 1985 },
  { label: 'Whiplash', year: 2014 },
  { label: 'Gladiator', year: 2000 },
  { label: 'Memento', year: 2000 },
  { label: 'The Prestige', year: 2006 },
  { label: 'The Lion King', year: 1994 },
  { label: 'Apocalypse Now', year: 1979 },
  { label: 'Alien', year: 1979 },
  { label: 'Sunset Boulevard', year: 1950 },
  {
    label: 'Dr. Strangelove or: How I Learned to Stop Worrying and Love the Bomb',
    year: 1964,
  },
  { label: 'The Great Dictator', year: 1940 },
  { label: 'Cinema Paradiso', year: 1988 },
  { label: 'The Lives of Others', year: 2006 },
  { label: 'Grave of the Fireflies', year: 1988 },
  { label: 'Paths of Glory', year: 1957 },
  { label: 'Django Unchained', year: 2012 },
  { label: 'The Shining', year: 1980 },
  { label: 'WALL·E', year: 2008 },
  { label: 'American Beauty', year: 1999 },
  { label: 'The Dark Knight Rises', year: 2012 },
  { label: 'Princess Mononoke', year: 1997 },
  { label: 'Aliens', year: 1986 },
  { label: 'Oldboy', year: 2003 },
  { label: 'Once Upon a Time in America', year: 1984 },
  { label: 'Witness for the Prosecution', year: 1957 },
  { label: 'Das Boot', year: 1981 },
  { label: 'Citizen Kane', year: 1941 },
  { label: 'North by Northwest', year: 1959 },
  { label: 'Vertigo', year: 1958 },
  {
    label: 'Star Wars: Episode VI - Return of the Jedi',
    year: 1983,
  },
  { label: 'Reservoir Dogs', year: 1992 },
  { label: 'Braveheart', year: 1995 },
  { label: 'M', year: 1931 },
  { label: 'Requiem for a Dream', year: 2000 },
  { label: 'Amélie', year: 2001 },
  { label: 'A Clockwork Orange', year: 1971 },
  { label: 'Like Stars on Earth', year: 2007 },
  { label: 'Taxi Driver', year: 1976 },
  { label: 'Lawrence of Arabia', year: 1962 },
  { label: 'Double Indemnity', year: 1944 },
  {
    label: 'Eternal Sunshine of the Spotless Mind',
    year: 2004,
  },
  { label: 'Amadeus', year: 1984 },
  { label: 'To Kill a Mockingbird', year: 1962 },
  { label: 'Toy Story 3', year: 2010 },
  { label: 'Logan', year: 2017 },
  { label: 'Full Metal Jacket', year: 1987 },
  { label: 'Dangal', year: 2016 },
  { label: 'The Sting', year: 1973 },
  { label: '2001: A Space Odyssey', year: 1968 },
  { label: "Singin' in the Rain", year: 1952 },
  { label: 'Toy Story', year: 1995 },
  { label: 'Bicycle Thieves', year: 1948 },
  { label: 'The Kid', year: 1921 },
  { label: 'Inglourious Basterds', year: 2009 },
  { label: 'Snatch', year: 2000 },
  { label: '3 Idiots', year: 2009 },
  { label: 'Monty Python and the Holy Grail', year: 1975 },
];`

const  InstallCombobox  = () => {


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











  

  

  






export default InstallCombobox