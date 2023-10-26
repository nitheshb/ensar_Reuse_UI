import { Outlet } from "react-router-dom";
import { Box, Toolbar } from "@mui/material";
import colorConfigs from "../../configs/colorConfigs";
import sizeConfigs from "../../configs/sizeConfigs";
import Sidebar from "../common/Sidebar";
//import Topbar from "../common/Topbar";

const MainLayout = () => {
  return (
    <Box sx={{ display: "flex" }}>
      
      <Box
        component="nav"
        sx={{
          width: sizeConfigs.sidebar.width,
          flexShrink: 0
        }}
      >
        <Sidebar />
      </Box>
      <Box
        component="main"
        sx={{
          flexGrow: 0,
          p: 1,
          width: `calc(100% - ${sizeConfigs.sidebar.width})`,
          minHeight: "100vh",
          paddingTop:"5rem",
          backgroundColor: "#FFF"
          
        }}
      >
        
        <Outlet />
      </Box>
    </Box>
  );
};

export default MainLayout;