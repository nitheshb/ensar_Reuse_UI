import React from 'react';
import Button from '@mui/material/Button';
import {  Box } from '@mui/material';
import './styles.css';
import '../../tail.css';

import Tab from '@mui/material/Tab';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';



import Modal from '@mui/joy/Modal';
import ModalDialog from '@mui/joy/ModalDialog';
import Typography from '@mui/joy/Typography';

import InstallButton from '../install/InstallButton';




const codeString = `
import * as React from 'react';
import Box from '@mui/joy/Box';
import Button from '@mui/joy/Button';

export default function ButtonVariants() {
  return (
    <Box sx={{ display: 'flex', gap: 2, flexWrap: 'wrap' }}>
      <Button variant="solid">Solid</Button>
      <Button variant="soft">Soft</Button>
      <Button variant="outlined">Outlined</Button>
      <Button variant="plain">Plain</Button>
    </Box>
  );
}
 

`;

const codeString1 = `
import Button from '@mui/joy/Button';
`;


const codeString2 = `
<Button variant="solid">Solid</Button>
`;


const codeString3 = `
import { buttonVariants } from "@/components/ui/button
`;


const codeString4 = `
<Link className={buttonVariants({ variant: "outline" })}>Click here</Link>
`;


const codeString5 = `<Button asChild>
  <Link href="/login">Login</Link>
</Button>
`;




type Props = {};

const ButtonPage = (props: Props) => {



  const [open, setOpen] = React.useState(false);

  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };




  return (
    <div style={{paddingTop:"1rem", paddingLeft:"2rem"}}>
      <b><h1 style={{fontSize:'2rem'}}>Button</h1></b>

     <p style={{color:"#99999F"}}>Displays a button or a component that looks like a button.</p>

    <Button sx={{color:"#191717", backgroundColor:"#EEEEEE",textTransform:"capitalize", margin:'1rem',padding:'0rem 1rem'}} >
      Radix UI
    </Button>
    <Button sx={{color:"#191717", backgroundColor:"#EEEEEE",textTransform:"capitalize",padding:'0rem 1rem'}} >
      API Reference
    </Button>





    <Box sx={{ width: '663px',  typography: 'body1' }}>
  <TabContext value={value}>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <TabList onChange={handleChange} aria-label="lab API tabs example">
        <Tab label="Preview" value="1" style={{ position:"static"}} />
        <Tab label="Code" value="2" />
        
      </TabList>

    </Box>



    <div style={{border:"1px solid #F1F1F1",  marginTop:"2rem",  display:"flex", alignItems:"center", borderRadius:"0.5rem"}}>
    <TabPanel value="1">
    <div style={{width:"609px",  padding:"10rem",  display:"flex",alignItems:"center",justifyContent:"center"}}>
    <Button style={{color:"white", borderColor:"black", backgroundColor:"black",fontSize:"0.8rem"}}  variant="contained">Button</Button>


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




<b> <p style={{marginTop:"3rem",fontSize:"1.6rem"}}>Installation</p></b> 
    
    <hr style={{width:"680px",height:"2px",opacity:"0.3",backgroundColor:"#F5F5F5",margin:"10px 0" }} />
    


    <InstallButton/>

<b> <p style={{marginTop:"3rem",fontSize:"1.6rem"}}>Usage</p></b> 

<hr style={{width:"680px",height:"2px",opacity:"0.3",backgroundColor:"#F5F5F5",margin:"10px 0" }} />

<SyntaxHighlighter language="tsx" style={atomOneDark} customStyle={{
        padding: '0px' ,
        borderRadius: '10px', 
        width: '680px',
        height:'70px'
        

    }}>
      {codeString1}
    </SyntaxHighlighter>


    
<SyntaxHighlighter language="tsx" style={atomOneDark} customStyle={{
      padding:"0px",
      borderRadius: '10px', 
      width: '680px',
      height:'70px',
      marginTop:"1.7rem",
      

  }}>
    {codeString2}
  </SyntaxHighlighter>




  <b> <p style={{marginTop:"3rem",fontSize:"1.6rem"}}>Usage</p></b> 

<hr style={{width:"680px",height:"2px",opacity:"0.3",backgroundColor:"#F5F5F5",margin:"10px 0" }} />

<SyntaxHighlighter language="tsx" style={atomOneDark} customStyle={{
        padding: '0px' ,
        borderRadius: '10px', 
        width: '680px',
        height:'70px'
        

    }}>
      {codeString3}
    </SyntaxHighlighter>


    
<SyntaxHighlighter language="tsx" style={atomOneDark} customStyle={{
      padding:"0px",
      borderRadius: '10px', 
      width: '680px',
      height:'70px',
      marginTop:"1.7rem",
      

  }}>
    {codeString4}
  </SyntaxHighlighter>


  <p style={{margin:"1.5rem"}}>Alternatively, you can set the asChild parameter and nest the link component.

</p>

  <SyntaxHighlighter language="tsx" style={atomOneDark} customStyle={{
      padding:"0px",
      borderRadius: '10px', 
      width: '680px',
      height:'80px',
      marginTop:"1.7rem",
      

  }}>
    {codeString5}
  </SyntaxHighlighter>


  <b> <p style={{marginTop:"3rem",fontSize:"1.6rem"}}>Examples</p></b> 

<hr style={{width:"680px",height:"2px",opacity:"0.3",backgroundColor:"#F5F5F5",margin:"10px 0" }} />

<b><p style={{fontSize:"1.2rem"}}>Primary</p></b>

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
    <div style={{width:"609px",  padding:"10rem", display:"flex",alignItems:"center",justifyContent:"center"}}>
    <Button style={{color:"white", borderColor:"black", backgroundColor:"black",fontSize:"0.8rem"}}  variant="contained">Button</Button>


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
      {codeString}
    </SyntaxHighlighter></TabPanel>
    
  </TabContext>
</Box>

<b><p style={{fontSize:"1.2rem"}}>Secondary</p></b>

<Box sx={{ width: '663px',  typography: 'body1' }}>
  <TabContext value={value}>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <TabList onChange={handleChange} aria-label="lab API tabs example">
        <Tab label="Preview" value="5" />
        <Tab label="Code" value="6" />
        
      </TabList>
    </Box>
    <div style={{border:"1px solid #F1F1F1",  marginTop:"2rem",  width:"675px", borderRadius:"0.5rem"}}>
    <TabPanel value="5">
    <div style={{width:"609px",  padding:"10rem", display:"flex",alignItems:"center",justifyContent:"center"}}>
    <Button style={{color:"white", borderColor:"black", backgroundColor:"black",fontSize:"0.8rem"}}  variant="contained">Button</Button>


    </div>
    
    </TabPanel>
    </div>
    <TabPanel value="6">   
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

<b><p style={{fontSize:"1.2rem"}}>Destructive</p></b>


<Box sx={{ width: '663px',  typography: 'body1' }}>
  <TabContext value={value}>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <TabList onChange={handleChange} aria-label="lab API tabs example">
        <Tab label="Preview" value="7" />
        <Tab label="Code" value="8" />
        
      </TabList>
    </Box>
    <div style={{border:"1px solid #F1F1F1",  marginTop:"2rem",  width:"675px", borderRadius:"0.5rem"}}>
    <TabPanel value="7">
    <div style={{width:"609px",  padding:"10rem", display:"flex",alignItems:"center",justifyContent:"center"}}>
    <Button style={{color:"white", borderColor:"black", backgroundColor:"black",fontSize:"0.8rem"}}  variant="contained">Button</Button>


    </div>
    
    </TabPanel>
    </div>
    <TabPanel value="8">   
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

<b><p style={{fontSize:"1.2rem"}}>Outline</p></b>

<Box sx={{ width: '663px',  typography: 'body1' }}>
  <TabContext value={value}>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <TabList onChange={handleChange} aria-label="lab API tabs example">
        <Tab label="Preview" value="9" />
        <Tab label="Code" value="10" />
        
      </TabList>
    </Box>
    <div style={{border:"1px solid #F1F1F1",  marginTop:"2rem",  width:"675px", borderRadius:"0.5rem"}}>
    <TabPanel value="9">
    <div style={{width:"609px",  padding:"10rem", display:"flex",alignItems:"center",justifyContent:"center"}}>
    <Button style={{color:"white", borderColor:"black", backgroundColor:"black",fontSize:"0.8rem"}}  variant="contained">Button</Button>


    </div>
    
    </TabPanel>
    </div>
    <TabPanel value="10">   
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



<b><p style={{fontSize:"1.2rem"}}>Outline</p></b>

<Box sx={{ width: '663px',  typography: 'body1' }}>
  <TabContext value={value}>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <TabList onChange={handleChange} aria-label="lab API tabs example">
        <Tab label="Preview" value="11" />
        <Tab label="Code" value="12" />
        
      </TabList>
    </Box>
    <div style={{border:"1px solid #F1F1F1",  marginTop:"2rem",  width:"675px", borderRadius:"0.5rem"}}>
    <TabPanel value="11">
    <div style={{width:"609px",  padding:"10rem", display:"flex",alignItems:"center",justifyContent:"center"}}>
    <Button style={{color:"white", borderColor:"black", backgroundColor:"black",fontSize:"0.8rem"}}  variant="contained">Button</Button>


    </div>
    
    </TabPanel>
    </div>
    <TabPanel value="12">   
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


<b><p style={{fontSize:"1.2rem"}}>Ghost</p></b>

<Box sx={{ width: '663px',  typography: 'body1' }}>
  <TabContext value={value}>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <TabList onChange={handleChange} aria-label="lab API tabs example">
        <Tab label="Preview" value="13" />
        <Tab label="Code" value="14" />
        
      </TabList>
    </Box>
    <div style={{border:"1px solid #F1F1F1",  marginTop:"2rem",  width:"675px", borderRadius:"0.5rem"}}>
    <TabPanel value="13">
    <div style={{width:"609px",  padding:"10rem", display:"flex",alignItems:"center",justifyContent:"center"}}>
    <Button style={{color:"white", borderColor:"black", backgroundColor:"black",fontSize:"0.8rem"}}  variant="contained">Button</Button>


    </div>
    
    </TabPanel>
    </div>
    <TabPanel value="14">   
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




<b><p style={{fontSize:"1.2rem"}}>Link</p></b>

<Box sx={{ width: '663px',  typography: 'body1' }}>
  <TabContext value={value}>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <TabList onChange={handleChange} aria-label="lab API tabs example">
        <Tab label="Preview" value="15" />
        <Tab label="Code" value="16" />
        
      </TabList>
    </Box>
    <div style={{border:"1px solid #F1F1F1",  marginTop:"2rem",  width:"675px", borderRadius:"0.5rem"}}>
    <TabPanel value="15">
    <div style={{width:"609px",  padding:"10rem", display:"flex",alignItems:"center",justifyContent:"center"}}>
    <Button style={{color:"white", borderColor:"black", backgroundColor:"black",fontSize:"0.8rem"}}  variant="contained">Button</Button>


    </div>
    
    </TabPanel>
    </div>
    <TabPanel value="16">   
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




<b><p style={{fontSize:"1.2rem"}}>Icon</p></b>

<Box sx={{ width: '663px',  typography: 'body1' }}>
  <TabContext value={value}>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <TabList onChange={handleChange} aria-label="lab API tabs example">
        <Tab label="Preview" value="17" />
        <Tab label="Code" value="18" />
        
      </TabList>
    </Box>
    <div style={{border:"1px solid #F1F1F1",  marginTop:"2rem",  width:"675px", borderRadius:"0.5rem"}}>
    <TabPanel value="17">
    <div style={{width:"609px",  padding:"10rem", display:"flex",alignItems:"center",justifyContent:"center"}}>
    <Button style={{color:"white", borderColor:"black", backgroundColor:"black",fontSize:"0.8rem"}}  variant="contained">Button</Button>


    </div>
    
    </TabPanel>
    </div>
    <TabPanel value="18">   
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



<b><p style={{fontSize:"1.2rem"}}>With Icon</p></b>

<Box sx={{ width: '663px',  typography: 'body1' }}>
  <TabContext value={value}>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <TabList onChange={handleChange} aria-label="lab API tabs example">
        <Tab label="Preview" value="19" />
        <Tab label="Code" value="20" />
        
      </TabList>
    </Box>
    <div style={{border:"1px solid #F1F1F1",  marginTop:"2rem",  width:"675px", borderRadius:"0.5rem"}}>
    <TabPanel value="19">
    <div style={{width:"609px",  padding:"10rem", display:"flex",alignItems:"center",justifyContent:"center"}}>
    <Button style={{color:"white", borderColor:"black", backgroundColor:"black",fontSize:"0.8rem"}}  variant="contained">Button</Button>


    </div>
    
    </TabPanel>
    </div>
    <TabPanel value="20">   
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


<b><p style={{fontSize:"1.2rem"}}>Loading</p></b>

<Box sx={{ width: '663px',  typography: 'body1' }}>
  <TabContext value={value}>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <TabList onChange={handleChange} aria-label="lab API tabs example">
        <Tab label="Preview" value="21" />
        <Tab label="Code" value="22" />
        
      </TabList>
    </Box>
    <div style={{border:"1px solid #F1F1F1",  marginTop:"2rem",  width:"675px", borderRadius:"0.5rem"}}>
    <TabPanel value="21">
    <div style={{width:"609px",  padding:"10rem", display:"flex",alignItems:"center",justifyContent:"center"}}>
    <Button style={{color:"white", borderColor:"black", backgroundColor:"black",fontSize:"0.8rem"}}  variant="contained">Button</Button>


    </div>
    
    </TabPanel>
    </div>
    <TabPanel value="22">   
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


<b><p style={{fontSize:"1.2rem"}}>As Child</p></b>

<Box sx={{ width: '663px',    typography: 'body1' }}>
  <TabContext value={value}>
    <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
      <TabList onChange={handleChange}  aria-label="lab API tabs example">
        <Tab label="Preview" value="23"  />
        <Tab label="Code" value="24" />
        
      </TabList>
    </Box>
    <div style={{border:"1px solid #F1F1F1",  marginTop:"2rem",  width:"675px", borderRadius:"0.5rem"}}>
    <TabPanel value="23">
    <div style={{width:"609px",  padding:"10rem", display:"flex",alignItems:"center",justifyContent:"center"}}>
    <Button style={{color:"white", borderColor:"black", backgroundColor:"black",fontSize:"0.8rem"}}  variant="contained">Button</Button>


    </div>
    
    </TabPanel>
    </div>
    <TabPanel value="24">   
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






    </div>
  );
};

export default ButtonPage;