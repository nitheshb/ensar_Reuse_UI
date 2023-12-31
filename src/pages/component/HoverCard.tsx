import { Button } from '@mui/material'
import React from 'react'
import './styles.css';
import '../../tail.css';
import {  Box } from '@mui/material';

import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';


const tablabel = {
  color:"#18181B"
};

const codeString1 = `
import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import Typography from '@mui/joy/Typography';
 

`;


const codeString = `
import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';
import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import Typography from '@mui/joy/Typography';
 

`;





const codeString2 = `

export default function ResponsiveModal() {
  const [open, setOpen] = React.useState(false);
  return (
    <React.Fragment>
      <Button variant="outlined" color="neutral" onClick={() => setOpen(true)}>
        Open modal
      </Button>
      <Modal open={open} onClose={() => setOpen(false)}>
        <ModalDialog
          aria-labelledby="nested-modal-title"
          aria-describedby="nested-modal-description"
          sx={(theme) => ({
            [theme.breakpoints.only('xs')]: {
              top: 'unset',
              bottom: 0,
              left: 0,
              right: 0,
              borderRadius: 0,
              transform: 'none',
              maxWidth: 'unset',
            },
          })}
        >
          <Typography id="nested-modal-title" level="h2">
            Are you absolutely sure?
          </Typography>
          <Typography id="nested-modal-description" textColor="text.tertiary">
            This action cannot be undone. This will permanently delete your account
            and remove your data from our servers.
          </Typography>
          <Box
            sx={{
              mt: 1,
              display: 'flex',
              gap: 1,
              flexDirection: { xs: 'column', sm: 'row-reverse' },
            }}
          >
            <Button variant="solid" color="primary" onClick={() => setOpen(false)}>
              Continue
            </Button>
            <Button
              variant="outlined"
              color="neutral"
              onClick={() => setOpen(false)}
            >
              Cancel
            </Button>
          </Box>
        </ModalDialog>
      </Modal>
    </React.Fragment>
  );
}
`;












const HoverCard = () => {



  const [open, setOpen] = React.useState(false);

  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };





  return (
    <div style={{paddingTop:"1rem", paddingLeft:"2rem"}}>

    <b><h1 style={{fontSize:'2rem'}}>Hover Card</h1></b>
    
    <p>For sighted users to preview content available behind a link.</p>
    
    <Button sx={{color:"#191717", backgroundColor:"#EEEEEE",textTransform:"capitalize", margin:'1rem',padding:'0rem 1rem'}} >
          Radix UI
        </Button>
        <Button sx={{color:"#191717", backgroundColor:"#EEEEEE",textTransform:"capitalize",padding:'0rem 1rem'}} >
          API Reference
        </Button>




        
          
    <Box sx={{ width: '663px',  typography: 'body1' }}>
  <TabContext value={value}>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <TabList TabIndicatorProps={{sx:{backgroundColor: "#18181B"}}} onChange={handleChange} aria-label="lab API tabs example">
        <Tab style={tablabel} label="Preview" value="1" />
        <Tab style={tablabel} label="Code" value="2" />
        
      </TabList>
    </Box>
    <div style={{border:"1px solid #F1F1F1",  marginTop:"2rem",  width:"675px", borderRadius:"0.5rem"}}>
    <TabPanel value="1">
    <div style={{width:"609px", marginLeft:"8rem", display:"flex",alignItems:"center",justifyContent:"center"}}>



    


    
  

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











        
<b> <p style={{marginTop:"3rem",fontSize:"1.6rem"}}>Usage</p></b> 

<hr style={{width:"680px",height:"2px",opacity:"0.3",backgroundColor:"#F5F5F5",margin:"10px 0" }} />

<SyntaxHighlighter language="tsx" style={atomOneDark} customStyle={{
      
        borderRadius: '10px', 
        width: '680px',
        height:'240px'
        

    }}>
      {codeString1}
    </SyntaxHighlighter>



    
<SyntaxHighlighter language="tsx" style={atomOneDark} customStyle={{
      
      borderRadius: '10px', 
      width: '680px',
      height:'700px',
      marginTop:"1.7rem",
      

  }}>
    {codeString2}
  </SyntaxHighlighter>

    
    
    
    
        </div>
  )
}

export default HoverCard