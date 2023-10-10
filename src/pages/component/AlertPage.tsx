import React from 'react';

import './styles.css';

import '../../tail.css';


import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';
import {  Box } from '@mui/material';
import Button from '@mui/material/Button';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';



const codeString = `

import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';

export default function DescriptionAlerts() {
  return (
    <Stack sx={{ width: '100%' }} spacing={2}>
      
      <Alert severity="success">
        <AlertTitle>Success</AlertTitle>
        This is a success alert — <strong>check it out!</strong>
      </Alert>
    </Stack>
  );
}

`;


const codeString1 = `

import * as React from 'react';
import Alert from '@mui/material/Alert';
import AlertTitle from '@mui/material/AlertTitle';
import Stack from '@mui/material/Stack';



export default function DescriptionAlerts() {
  return (
<Alert severity="error">
<AlertTitle>Error</AlertTitle>
This is an error alert — <strong>check it out!</strong>
</Alert>
);
}


`;





const codeString3 = `
import { Alert ,AlertTitle,Stack }from '@mui/material';
`;



const codeString4 = `

<Alert>
  <Terminal className="h-4 w-4" />
  <AlertTitle>Heads up!</AlertTitle>
  <AlertDescription>
    You can add components and dependencies to your app using the cli.
  </AlertDescription>
</Alert>



`;






type Props = {};

const AlertPage = (props: Props) => {




  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };



  return (
    <div style={{padding:"27px"}}>


      <b><p style={{fontSize:"2rem",paddingTop:"1.5rem"}}>Alert</p></b>
    



      <p>Displays a callout for user attention.</p>


      <Box sx={{ width: '663px',  typography: 'body1' }}>
  <TabContext value={value}>
    <Box sx={{ borderBottom: 1, borderColor: 'divider', position:"static" }}>
      <TabList  onChange={handleChange} aria-label="lab API tabs example">
        <Tab label="Preview" value="1" style={{position:"static"}}  />
        <Tab label="Code" value="2" />
        
      </TabList>
    </Box>
    <div style={{border:"1px solid #F1F1F1",  marginTop:"2rem",  width:"675px", borderRadius:"0.5rem"}}>
    <TabPanel value="1">
    <div style={{width:"609px",  alignItems:"center"}}>



    <div style={{display:"flex",alignItems:"center",justifyContent:"center", marginTop:"0rem",padding:"5rem"}}>
      <Alert style={{width:"600px"}} severity="success">
        <AlertTitle>Success</AlertTitle>
        This is a success alert — <strong>check it out!</strong>
      </Alert>
      </div>
  

    </div>
    
    </TabPanel>
    </div>
    <TabPanel value="2">   

     <SyntaxHighlighter language="tsx" style={atomOneDark} customStyle={{
        padding: '25px' ,
        borderRadius: '10px', 
        width: '620px',
        height:'400px',
        marginBottom:"3rem",
        

    }}>
      {codeString}
    </SyntaxHighlighter></TabPanel>
    
  </TabContext>
</Box>


<b><p style={{fontSize:"1.2rem",paddingTop:"1.5rem"}}>Usage</p></b>
<hr style={{width:"680px",height:"2px",opacity:"0.3",backgroundColor:"#F5F5F5",margin:"10px 0" }} />


<SyntaxHighlighter language="tsx" style={atomOneDark} customStyle={{
        padding: '0px' ,
        borderRadius: '10px', 
        width: '680px',
        height:'70px'
        

    }}>
      {codeString3}
    </SyntaxHighlighter>


<div style={{paddingTop:"2rem"}}>
    
<SyntaxHighlighter language="tsx" style={atomOneDark} customStyle={{
        padding: '0px' ,
        borderRadius: '10px', 
        width: '680px',
        height:'300px'
        

    }}>
      {codeString4}
    </SyntaxHighlighter>

    </div>





<b><p style={{fontSize:"1.2rem",paddingTop:"1.5rem"}}>Examples</p></b>
<hr style={{width:"680px",height:"2px",opacity:"0.3",backgroundColor:"#F5F5F5",margin:"10px 0" }} />

<b><p style={{fontSize:"1.2rem",paddingTop:"1.5rem"}}>Destructive</p></b>


<Box sx={{ width: '663px',  typography: 'body1' }}>
  <TabContext value={value}>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <TabList onChange={handleChange} aria-label="lab API tabs example">
        <Tab label="Preview" value="3" />
        <Tab label="Code" value="4" />
        
      </TabList>
    </Box>
    <div style={{border:"1px solid #F1F1F1",  marginTop:"2rem",  width:"675px", borderRadius:"0.5rem"}}>
    <TabPanel value="3">
    <div style={{width:"609px",  alignItems:"center"}}>



    <div style={{display:"flex",alignItems:"center",justifyContent:"center", marginTop:"0rem",padding:"5rem"}}>
    <Alert  style={{width:"600px"}} severity="warning">
        <AlertTitle>Warning</AlertTitle>
        This is a warning alert — <strong>check it out!</strong>
      </Alert>
      </div>
  

    </div>
    
    </TabPanel>
    </div>
    <TabPanel value="4">   
     <SyntaxHighlighter language="tsx" style={atomOneDark} customStyle={{
        padding: '25px' ,
        borderRadius: '10px', 
        width: '620px',
        height:'400px'
        

    }}>
      {codeString1}
    </SyntaxHighlighter></TabPanel>
    
  </TabContext>
</Box>


















    </div>
  );
};

export default AlertPage;