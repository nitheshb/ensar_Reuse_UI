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




const codeString = `

`
const codeString1 = `

`

const codeString2 = `

`

const  DataTable  = () => {


  const [open, setOpen] = React.useState(false);

  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };





  return (
    <div  style={{paddingTop:"1rem", paddingLeft:"2rem"}}>

    <b><h1 style={{fontSize:'2rem'}}>Data Table</h1></b>
    
    <p style={{color:"#99999F"}}>Powerful table and datagrids built using TanStack Table.</p>
    
    
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
    

    <b> <p style={{marginTop:"3rem",fontSize:"1.6rem"}}>Introduction</p></b> 
    
    <hr style={{width:"680px",height:"2px",opacity:"0.3",backgroundColor:"#F5F5F5",margin:"10px 0" }} />

  <p style={{color:"#99999F"}}>Every data table or datagrid I've created has been unique. They all behave differently, <br /> have specific sorting and filtering requirements, and work with different data sources.</p> <br />
  <p style={{color:"#99999F"}}>It doesn't make sense to combine all of these variations into a single component. If we <br /> do that, we'll lose the flexibility that headless UI provides</p> <br />
  <p style={{color:"#99999F"}}>So instead of a data-table component, I thought it would be more helpful to provide a <br /> guide on how to build your own.</p> <br />
  <p style={{color:"#99999F"}}>We'll start with the basic  component and build a complex data table from <br /> scratch.</p> <br />
    
    


  <b> <p style={{marginTop:"3rem",fontSize:"1.6rem"}}>Table of Contents</p></b> 
    
    <hr style={{width:"680px",height:"2px",opacity:"0.3",backgroundColor:"#F5F5F5",margin:"10px 0" }} />

    <p style={{color:"#99999F"}}>This guide will show you how to use TanStack Table and the  component to <br /> build your own custom data table. We'll cover the following topics:

</p> <br />


    <div>
      <ul>
        <li><u>Basic Table</u></li>
        <li><u>Row Actions</u></li>
        <li><u>Pagination</u></li>
        <li><u>Sorting</u></li>
        <li><u>Filtering</u></li>
        <li><u>Visibility</u></li>
        <li><u>Row Selection</u></li>
        <li><u>Reusable Components</u></li>
      </ul>
    </div>



    <b> <p style={{marginTop:"3rem",fontSize:"1.6rem"}}>Introduction</p></b> 
    
    <hr style={{width:"680px",height:"2px",opacity:"0.3",backgroundColor:"#F5F5F5",margin:"10px 0" }} />



    
    
    
    
    
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
          height:'200px',
          marginTop:"1.7rem",
          
    
      }}>
        {codeString2}
      </SyntaxHighlighter>
    
    
    
    
    
    </div>
  )
}











  

  

  















export default DataTable