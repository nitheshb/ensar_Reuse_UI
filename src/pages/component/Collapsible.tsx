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


import ExampleCollapsibleList from './collapsiblecode';

import InstallCollapsible from '../install/InstallCollapsible';

const codeString = `import * as React from 'react';
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
}
`
const codeString1 = `import Box from '@mui/joy/Box';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton, { listItemButtonClasses } from '@mui/joy/ListItemButton';
import IconButton from '@mui/joy/IconButton';
import Typography from '@mui/joy/Typography';
import ReceiptLong from '@mui/icons-material/ReceiptLong';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';`

const codeString2 = ` <Box
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

    []: {
      borderLeftColor: 'divider',
    },
    []: {
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
`


const tablabel = {
  color:"#18181B"
};


const  Collapsible  = () => {


  const [open, setOpen] = React.useState(false);

  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };





  return (
    <div  style={{paddingTop:"1rem", paddingLeft:"2rem"}}>

    <b><h1 style={{fontSize:'2rem'}}>Collapsible</h1></b>
    
    <p style={{color:"#99999F"}}>An interactive component which expands/collapses a panel.</p>
    
    
     <Button sx={{color:"#191717", backgroundColor:"#EEEEEE",textTransform:"capitalize", margin:'1rem',padding:'0rem 1rem'}} >
      Radix UI
    </Button>
    <Button sx={{color:"#191717", backgroundColor:"#EEEEEE",textTransform:"capitalize",padding:'0rem 1rem'}} >
      API Reference
    </Button>
    
    
    
    
    
    
    <Box sx={{ width: '663px',   typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList TabIndicatorProps={{sx:{backgroundColor: "#18181B"}}} onChange={handleChange} aria-label="lab API tabs example">
            <Tab  style={tablabel} label="Preview" value="1" />
            <Tab style={tablabel} label="Code" value="2" />
            
          </TabList>
        </Box>
        <div style={{border:"1px solid #F1F1F1",  marginTop:"2rem",  width:"675px", borderRadius:"0.5rem"}}>
    
        <TabPanel value="1">
        <div style={{width:"609px", height:"400px", display:"flex",alignItems:"center",justifyContent:"center"}}>
    
    
          
            
              
        
              
        <ExampleCollapsibleList/>
    
    
        
    
    
    
        
      
    
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
    
    <InstallCollapsible/>
    
    
    
    <b> <p style={{marginTop:"3rem",fontSize:"1.6rem"}}>Usage</p></b> 
    
    <hr style={{width:"680px",height:"2px",opacity:"0.3",backgroundColor:"#F5F5F5",margin:"10px 0" }} />
    
    <SyntaxHighlighter language="tsx" style={atomOneDark} customStyle={{
          
            borderRadius: '10px', 
            width: '680px',
            height:'260px'
            
    
        }}>
          {codeString1}
        </SyntaxHighlighter>
    
    
    
        
    <SyntaxHighlighter language="tsx" style={atomOneDark} customStyle={{
          
          borderRadius: '10px', 
          width: '680px',
          height:'1000px',
          marginTop:"1.7rem",
          
    
      }}>
        {codeString2}
      </SyntaxHighlighter>
    
    
    
    
    
    </div>
  )
}











  

  

  











export default Collapsible