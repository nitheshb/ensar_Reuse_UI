import React from 'react';


import ImageZoom from '../canves';


import img from '../img/img.png';











const Figma = () => {
  return (
    <div  style={{paddingTop:"2rem", paddingLeft:"2rem"}}>

      <b><h4 style={{fontSize:'2rem'}}>Figma</h4></b>

      <br />
      
    <p>Every component recreated in Figma. With <br /> customizable props, typography and icons.</p>

    <br></br>

    <p>The Figma UI Kit is open sourced by <u>Pietro Schirano.</u> </p>

    <br />


    


    <ImageZoom/>


    <b><p style={{fontSize:"1.5rem", paddingTop:"1.8rem"}}>Grab a copy</p></b>


    <hr style={{width:"791px",height:"2px",opacity:"0.3",backgroundColor:"#F5F5F5",margin:"10px 0" }} />


    <a style={{padding:"7rem 0rem"}} href="https://www.figma.com/community/file/1203061493325953101"><u>https://www.figma.com/community/file/1203061493325953101</u></a>







    










    </div>
  )
}

export default Figma