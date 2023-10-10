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

const Calendar = () => {
  return (
    <div style={{paddingTop:"2.5rem", paddingLeft:"2rem"}}>

<b><h1 style={{fontSize:'2rem'}}>Calendar</h1></b>

<p>A date field component that allows users to enter and edit date.</p>

<Button sx={{color:"#191717", backgroundColor:"#EEEEEE",textTransform:"capitalize", margin:'1rem',padding:'0rem 1rem'}} >
      Radix UI
    </Button>
    <Button sx={{color:"#191717", backgroundColor:"#EEEEEE",textTransform:"capitalize",padding:'0rem 1rem'}} >
      API Reference
    </Button>




    </div>
  )
}

export default Calendar