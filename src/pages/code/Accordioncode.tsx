import React from 'react'
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

const Accordioncode = () => {
    const codeString = `import {
        Accordion,
        AccordionContent,
        AccordionItem,
        AccordionTrigger,
      } from "@/components/ui/accordion"
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

























export default  Accordioncode





    

    

