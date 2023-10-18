import {  Box } from '@mui/material';
import Button from '@mui/material/Button';
import React from 'react';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';



import './styles.css'; 
import BasicTabs from '../tabs/Accordiontab';


import Accordioncode  from '../code/Accordioncode';
import Accordioncode1 from '../code/Accordioncode1';

import './styles.css';
import '../../tail.css';
import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';


import Accordion from '@mui/material/Accordion';
import AccordionSummary from '@mui/material/AccordionSummary';
import AccordionDetails from '@mui/material/AccordionDetails';
import Typography from '@mui/material/Typography';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';



const codeString = `      <Accordion>
<AccordionSummary
  expandIcon={<ExpandMoreIcon />}
  aria-controls="panel1a-content"
  id="panel1a-header"
>
  <Typography>Accordion 1</Typography>
</AccordionSummary>
<AccordionDetails>
  <Typography>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
    malesuada lacus ex, sit amet blandit leo lobortis eget.
  </Typography>
</AccordionDetails>
</Accordion>
<Accordion>
<AccordionSummary
  expandIcon={<ExpandMoreIcon />}
  aria-controls="panel2a-content"
  id="panel2a-header"
>
  <Typography>Accordion 2</Typography>
</AccordionSummary>
<AccordionDetails>
  <Typography>
    Lorem ipsum dolor sit amet, consectetur adipiscing elit. Suspendisse
    malesuada lacus ex, sit amet blandit leo lobortis eget.
  </Typography>
</AccordionDetails>
</Accordion>
<Accordion disabled>
<AccordionSummary
  expandIcon={<ExpandMoreIcon />}
  aria-controls="panel3a-content"
  id="panel3a-header"
>
  <Typography>Disabled Accordion</Typography>
</AccordionSummary>
</Accordion>
 

`;














const AccordionPage = () => {


  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };

  


  


  return (
    <Box sx={{padding:'50px'}}  style={{paddingTop:"1rem", paddingLeft:"2rem"}}>


<b><h4 style={{fontSize:'2rem'}}>Accordion</h4></b>

      
      <p style={{color:"#99999F"}}>A vertically stacked set of interactive headings <br /> that each reveal a section of content</p>

      <Button sx={{color:"#191717", backgroundColor:"#EEEEEE",textTransform:"capitalize", margin:'1rem',padding:'0rem 1rem'}} >
      Radix UI
    </Button>
    <Button sx={{color:"#191717", backgroundColor:"#EEEEEE",textTransform:"capitalize",padding:'0rem 1rem'}} >
      API Reference
    </Button>


    <Box>
      <h1></h1>


          
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
    <div style={{width:"609px", alignItems:"center"}}>


    <div style={{padding:"8rem"}}>
      <Accordion style={{width:"410px",backgroundColor:"white",boxShadow:"none",borderBottom:"1px solid #F5F5F5"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel1a-content"
          id="panel1a-header"
        >
          <Typography><u>Is it accessible?</u></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes. It adheres to the WAI-ARIA design pattern.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{width:"410px",backgroundColor:"white",boxShadow:"none",borderBottom:"1px solid #F5F5F5"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel2a-content"
          id="panel2a-header"
        >
          <Typography><u>Is it styled?</u></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes. It comes with default styles that matches the other 
          components' aesthetic.
          </Typography>
        </AccordionDetails>
      </Accordion>
      <Accordion style={{width:"410px",backgroundColor:"white", paddingRight:"5px" ,boxShadow:"none",borderBottom:"1px solid #F5F5F5"}}>
        <AccordionSummary
          expandIcon={<ExpandMoreIcon />}
          aria-controls="panel3a-content"
          id="panel3a-header"
        >
          <Typography><u>Is it animated?</u></Typography>
        </AccordionSummary>
        <AccordionDetails>
          <Typography>
          Yes. It's animated by default, but you can disable it if you 
          prefer.
          </Typography>
        </AccordionDetails>
      </Accordion>
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








      <b> <p style={{marginTop:"3rem"}}>Usage</p></b> 

      <hr style={{width:"680px",height:"2px",opacity:"0.3",backgroundColor:"#F5F5F5",margin:"10px 0" }} />







    <Accordioncode/>

    <br />

    <Accordioncode1/>



    
    

    
      
    </Box>
    

    
    




  






      </Box>





    
  )
}

export default AccordionPage