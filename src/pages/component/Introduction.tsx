import React from 'react';
import './styles.css';
import Accordion from '@mui/joy/Accordion';
import AccordionDetails from '@mui/joy/AccordionDetails';
import AccordionGroup from '@mui/joy/AccordionGroup';
import AccordionSummary from '@mui/joy/AccordionSummary';
import './style1.css';






const boxStyle = {
  border: '2px solid #000', 
  padding: '20px', 
  maxWidth: '800px', 
   

};




const Introduction = () => {
  return (


    <div style={{paddingTop:"4rem", paddingLeft:"2rem"}}>

     <b><h1 style={{fontSize:'3rem'}}>Introduction</h1></b>  


      <p>Re-usable components built using Radix UI and Tailwind CSS.</p>
      <p>This is NOT a component library. It's a collection of re-usable components that you can <br></br> copy and paste into your apps.</p>
      <br />

      <h5>What do you mean by not a component library?</h5>
      <br />

      <p>I mean you do not install it as a dependency. It is not available or distributed via npm.</p>
      <br />

      <p>Pick the components you need. Copy and paste the code into your project and <br /> customize to your needs. The code is yours.</p>
      <br />

      <p>Use this as a reference to build your own component libraries.</p>

      <br />

      <b><h1>FAQ</h1></b>

      <hr className='line'></hr>

      






      <AccordionGroup sx={{ maxWidth: 790 }}>
      <Accordion>
        <AccordionSummary sx={{padding:"16px"}}>Why copy/paste and not packaged as a dependency?</AccordionSummary>
        <AccordionDetails>
       <p> The idea behind this is to give you ownership and control over the code, allowing you to decide how the components are built and styled.</p>
        <p>Start with some sensible defaults, then customize the components to your needs.</p>
        <p>One of the drawback of packaging the components in an npm package is that the style is coupled with the implementation. The design of your components should be separate from their implementation.</p>
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary sx={{padding:"16px"}}>Do you plan to publish it as an npm package?</AccordionSummary>
        <AccordionDetails>
        No. I have no plans to publish it as an npm package.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary sx={{padding:"16px"}}>Which frameworks are supported?</AccordionSummary>
        <AccordionDetails>
        You can use any framework that supports React. Next.js, Astro, Remix, Gatsby etc.
        </AccordionDetails>
      </Accordion>
      <Accordion>
        <AccordionSummary sx={{padding:"16px"}}>Can I use this in my project?</AccordionSummary>
        <AccordionDetails>
      <p>Yes. Free to use for personal and commercial projects. No attribution required.</p>
      <p>But hey, let me know if you do. I'd love to see what you build.</p>
        </AccordionDetails>
      </Accordion>
    </AccordionGroup>






  




    

























    </div>
  )
}





  

export default Introduction