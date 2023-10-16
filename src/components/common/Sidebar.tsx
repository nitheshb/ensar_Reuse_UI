import { Avatar, Drawer, List, Stack, Toolbar } from "@mui/material";
import assets from "../../assets";
import colorConfigs from "../../configs/colorConfigs";
import sizeConfigs from "../../configs/sizeConfigs";
import appRoutes from "../../routes/appRoutes";
import SidebarItem from "./SidebarItem";
import SidebarItemCollapse from "./SidebarItemCollapse";

const Sidebar = () => {
  return (
    <Drawer
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
          marginTop: "4.7rem"
        }
      }}
    >
      <List disablePadding>
        <Toolbar sx={{ marginBottom: "10px" }}>
          <Stack
            sx={{ width: "100%" }}
            direction="row"
            justifyContent="center"
                        //borderColor={"white"}
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