import { Avatar, Drawer, List, Stack, Toolbar } from "@mui/material";
import assets from "../../assets";
import colorConfigs from "../../configs/colorConfigs";
import sizeConfigs from "../../configs/sizeConfigs";
import appRoutes from "../../routes/appRoutes";
import SidebarItem from "./SidebarItem";
import SidebarItemCollapse from "./SidebarItemCollapse";

const scrollname = {
  color:"#18181B"
};



const Sidebar = () => {
  return (
    <Drawer 
    className="scroll"
      variant="permanent"
      sx={{
        width: sizeConfigs.sidebar.width,
        height: sizeConfigs.sidebar.height,
        flexShrink: 0,
        "& .MuiDrawer-paper": {
          width: sizeConfigs.sidebar.width,
          boxSizing: "border-box",
          borderRight: "0px",
          color:"#77777F",
          paddingTop: "",
          marginTop: "4.7rem",
          
        },
        "& .MuiButtonBase-root-MuiListItemButton-root":{
          paddingLeft:"3px",
        },







        


      }}
    >
      <List disablePadding  sx={{ maxHeight: "1200px",
              overflowY: "auto",
              '&::-webkit-scrollbar': {
                width: '8px',
              },
              '&::-webkit-scrollbar-thumb': {
                backgroundColor: '#F6F6F7',
                borderRadius: '4px',
                
              },
              '&::-webkit-scrollbar-track': {
                backgroundColor: '#fff',
              },
              scrollbarWidth: 'thin',
              scrollbarColor: 'rgba(0, 0, 0, 0.5) rgba(0, 0, 0, 0.1)'}}>
        <Toolbar
         sx={{ marginBottom: "10px" }}
         
         
         >
          <Stack
            sx={{ width: "100%" }}
            direction="row"
            justifyContent="center"
                        
          >

            <p style={{marginRight:""}}><b>Getting Started</b></p>
            
            
          </Stack>
        </Toolbar>
        {appRoutes.map((route, index) => (
          route.sidebarProps ? (
            route.child ? (
              <SidebarItemCollapse item={route} key={index} />
            ) : (
              <SidebarItem item={route} key={index} />
            )
          ) : null
        ))}
      </List>
    </Drawer>
  );
};

export default Sidebar;