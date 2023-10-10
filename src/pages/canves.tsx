import React, { useState } from "react";
import { TransformWrapper, TransformComponent } from "react-zoom-pan-pinch";
import img from '../pages/img/img.png';

import AddIcon from '@mui/icons-material/Add';


import RemoveIcon from '@mui/icons-material/Remove';

const ImageZoom: React.FC = () => {
  const [zoom, setZoom] = useState(1);

  const zoomIn = () => {
    setZoom(zoom + 0.1);
  };

  const zoomOut = () => {
    setZoom(zoom - 0.1);
  };

  return (
    <div   style={{border:'1px solid #747474',padding:'2rem', borderRadius:"0.6rem", width:"800px"}}>
      <TransformWrapper>
        <TransformComponent>
          <div style={{ position: "relative", width: "720px", height: "450px" }}>
            <img
              src={img}
              alt="Image"
              style={{ width: "100%", height: "100%", transform: `scale(${zoom})` }}
            />
            <div style={{ position: "absolute", bottom: "10px", right: "10px" }}>
              <button
                style={{color:"white", backgroundColor:"black"}}
                onClick={zoomIn}
              >
                
                <AddIcon/> 
                
                
              </button>

              <button
                style={{color:"white", backgroundColor:"black", margin:"0.5rem"}}
                onClick={zoomOut}
              >
                
                <RemoveIcon/>
                
              </button>
            </div>
          </div>
        </TransformComponent>
      </TransformWrapper>
    </div>
  );
};

export default ImageZoom;
