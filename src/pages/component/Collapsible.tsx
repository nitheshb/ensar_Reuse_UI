import { Button } from '@mui/material'
import React from 'react'

const Collapsible = () => {
  return (
    <div style={{paddingTop:"2.5rem", paddingLeft:"2rem"}}>

    <b><h1 style={{fontSize:'2rem'}}>Collapsible</h1></b>
    
    <p>An interactive component which expands/collapses a panel.</p>
    
    <Button sx={{color:"#191717", backgroundColor:"#EEEEEE",textTransform:"capitalize", margin:'1rem',padding:'0rem 1rem'}} >
          Radix UI
        </Button>
        <Button sx={{color:"#191717", backgroundColor:"#EEEEEE",textTransform:"capitalize",padding:'0rem 1rem'}} >
          API Reference
        </Button>
    
    
    
    
        </div>
  )
}

export default Collapsible