import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Accordioncode1 = () => {
    const codeString = `<Accordion type="single" collapsible>
    <AccordionItem value="item-1">
      <AccordionTrigger>Is it accessible?</AccordionTrigger>
      <AccordionContent>
        Yes. It adheres to the WAI-ARIA design pattern.
      </AccordionContent>
    </AccordionItem>
  </Accordion>
  
      `;
  return (
    <div>
        <div>
    <SyntaxHighlighter language="tsx" style={atomOneDark} customStyle={{
        padding: '25px' ,
        borderRadius: '10px', 
        width: '680px'
        

    }}>
      {codeString}
    </SyntaxHighlighter>
    </div>
    </div>
  )
}

























export default  Accordioncode1





    

    

