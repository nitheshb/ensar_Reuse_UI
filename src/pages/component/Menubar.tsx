import React from 'react';
import {  Box } from '@mui/material';
import './styles.css';
import '../../tail.css';

import Tab from '@mui/material/Tab';
import { Button } from '@mui/material';
import TabContext from '@mui/lab/TabContext';
import TabList from '@mui/lab/TabList';
import TabPanel from '@mui/lab/TabPanel';
import { Prism as SyntaxHighlighter } from 'react-syntax-highlighter';
import { atomOneDark } from 'react-syntax-highlighter/dist/esm/styles/hljs';

import Menu from '@mui/joy/Menu';
import MenuItem, { menuItemClasses } from '@mui/joy/MenuItem';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import ListDivider from '@mui/joy/ListDivider';
import Typography, { typographyClasses } from '@mui/joy/Typography';
import Dropdown, { DropdownProps } from '@mui/joy/Dropdown';
import MenuButton from '@mui/joy/MenuButton';
import { Theme } from '@mui/joy';

import MenuBarButton from './menubarcode';

import InstallMenu from '../install/InstallMenu';

const tablabel = {
  color:"#18181B"
};

const codeString = `import * as React from 'react';
import Menu from '@mui/joy/Menu';
import MenuItem, { menuItemClasses } from '@mui/joy/MenuItem';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import ListDivider from '@mui/joy/ListDivider';
import Typography, { typographyClasses } from '@mui/joy/Typography';
import Dropdown, { DropdownProps } from '@mui/joy/Dropdown';
import MenuButton from '@mui/joy/MenuButton';
import { Theme } from '@mui/joy';

type MenuBarButtonProps = Pick<DropdownProps, 'children' | 'open'> & {
  onOpen: DropdownProps['onOpenChange'];
  onKeyDown: React.KeyboardEventHandler;
  menu: JSX.Element;
  onMouseEnter: React.MouseEventHandler;
};

const MenuBarButton = React.forwardRef(
  (
    { children, menu, open, onOpen, onKeyDown, ...props }: MenuBarButtonProps,
    ref: React.ForwardedRef<HTMLButtonElement>,
  ) => {
    return (
      <Dropdown open={open} onOpenChange={onOpen}>
        <MenuButton
          {...props}
          slots={{ root: ListItemButton }}
          ref={ref}
          role="menuitem"
          variant={open ? 'soft' : 'plain'}
        >
          {children}
        </MenuButton>
        {React.cloneElement(menu, {
          slotProps: {
            listbox: {
              id: toolbar-example-menu-
              'aria-label': children,
            },
          },
          placement: 'bottom-start',
          disablePortal: false,
          variant: 'soft',
          sx: (theme: Theme) => ({
            width: 288,
            boxShadow: '0 2px 8px 0px rgba(0 0 0 / 0.38)',
            '--List-padding': 'var(--ListDivider-gap)',
            '--ListItem-minHeight': '32px',
            [&& .]: {
              transition: 'none',
              '&:hover': {
                ...theme.variants.solid.primary,
                []: {
                  color: 'inherit',
                },
              },
            },
          }),
        })}
      </Dropdown>
    );
  },
);

export default function MenuToolbarExample() {
  const menus = React.useRef<Array<HTMLButtonElement>>([]);
  const [menuIndex, setMenuIndex] = React.useState<null | number>(null);

  const renderShortcut = (text: string) => (
    <Typography level="body-sm" textColor="text.tertiary" ml="auto">
      {text}
    </Typography>
  );

  const openNextMenu = () => {
    if (typeof menuIndex === 'number') {
      if (menuIndex === menus.current.length - 1) {
        setMenuIndex(0);
      } else {
        setMenuIndex(menuIndex + 1);
      }
    }
  };

  const openPreviousMenu = () => {
    if (typeof menuIndex === 'number') {
      if (menuIndex === 0) {
        setMenuIndex(menus.current.length - 1);
      } else {
        setMenuIndex(menuIndex - 1);
      }
    }
  };

  const handleKeyDown = (event: React.KeyboardEvent) => {
    if (event.key === 'ArrowRight') {
      openNextMenu();
    }
    if (event.key === 'ArrowLeft') {
      openPreviousMenu();
    }
  };

  const createHandleButtonKeyDown =
    (index: number) => (event: React.KeyboardEvent) => {
      if (event.key === 'ArrowRight') {
        if (index === menus.current.length - 1) {
          menus.current[0]?.focus();
        } else {
          menus.current[index + 1]?.focus();
        }
      }
      if (event.key === 'ArrowLeft') {
        if (index === 0) {
          menus.current[menus.current.length]?.focus();
        } else {
          menus.current[index - 1]?.focus();
        }
      }
    };

  const itemProps = {
    onClick: () => setMenuIndex(null),
    onKeyDown: handleKeyDown,
  };

  return (
    <List
      orientation="horizontal"
      aria-label="Example application menu bar"
      role="menubar"
      data-joy-color-scheme="dark"
      sx={{
        bgcolor: 'background.body',
        borderRadius: '4px',
        maxWidth: 'fit-content',
      }}
    >
      <ListItem>
        <MenuBarButton
          open={menuIndex === 0}
          onOpen={() => {
            setMenuIndex((prevMenuIndex) => (prevMenuIndex === null ? 0 : null));
          }}
          onKeyDown={createHandleButtonKeyDown(0)}
          onMouseEnter={() => {
            if (typeof menuIndex === 'number') {
              setMenuIndex(0);
            }
          }}
          ref={(instance) => {
            menus.current[0] = instance!;
          }}
          menu={
            <Menu
              onClose={() => {
                menus.current[0]?.focus();
              }}
            >
              <ListItem nested>
                <List aria-label="New">
                  <MenuItem {...itemProps}>New File</MenuItem>
                  <MenuItem {...itemProps}>
                    New Text File... {renderShortcut('⌥ ⌘ N')}
                  </MenuItem>
                  <MenuItem {...itemProps}>
                    New Window {renderShortcut('⇧ ⌘ N')}
                  </MenuItem>
                </List>
              </ListItem>
              <ListDivider />
              <ListItem nested>
                <List aria-label="Open">
                  <MenuItem {...itemProps}>Open {renderShortcut('⌘ O')}</MenuItem>
                  <MenuItem {...itemProps}>Open Folder</MenuItem>
                </List>
              </ListItem>
            </Menu>
          }
        >
          File
        </MenuBarButton>
      </ListItem>
      <ListItem>
        <MenuBarButton
          open={menuIndex === 1}
          onOpen={() => {
            setMenuIndex((prevMenuIndex) => (prevMenuIndex === null ? 1 : null));
          }}
          onKeyDown={createHandleButtonKeyDown(1)}
          onMouseEnter={() => {
            if (typeof menuIndex === 'number') {
              setMenuIndex(1);
            }
          }}
          ref={(instance) => {
            menus.current[1] = instance!;
          }}
          menu={
            <Menu
              onClose={() => {
                menus.current[1]?.focus();
              }}
            >
              <ListItem nested>
                <List aria-label="Time travel">
                  <MenuItem {...itemProps}>Undo {renderShortcut('⌘ Z')}</MenuItem>
                  <MenuItem {...itemProps}>Redo {renderShortcut('⇧ ⌘ Z')}</MenuItem>
                </List>
              </ListItem>
              <ListDivider />
              <ListItem nested>
                <List aria-label="Tool">
                  <MenuItem {...itemProps}>Cut {renderShortcut('⌘ X')}</MenuItem>
                  <MenuItem {...itemProps}>Copy {renderShortcut('⌘ Z')}</MenuItem>
                  <MenuItem {...itemProps}>Paste {renderShortcut('⌘ V')}</MenuItem>
                </List>
              </ListItem>
            </Menu>
          }
        >
          Edit
        </MenuBarButton>
      </ListItem>
      <ListItem>
        <MenuBarButton
          open={menuIndex === 2}
          onOpen={() => {
            setMenuIndex((prevMenuIndex) => (prevMenuIndex === null ? 2 : null));
          }}
          onKeyDown={createHandleButtonKeyDown(2)}
          onMouseEnter={() => {
            if (typeof menuIndex === 'number') {
              setMenuIndex(2);
            }
          }}
          ref={(instance) => {
            menus.current[2] = instance!;
          }}
          menu={
            <Menu
              onClose={() => {
                menus.current[2]?.focus();
              }}
            >
              <MenuItem {...itemProps}>Select All {renderShortcut('⌘ A')}</MenuItem>
              <MenuItem {...itemProps}>
                Expand Selection {renderShortcut('⌃ ⇧ ⌘ →')}
              </MenuItem>
              <MenuItem {...itemProps}>
                Shrink Selection {renderShortcut('⌃ ⇧ ⌘ ←')}
              </MenuItem>
            </Menu>
          }
        >
          Selection
        </MenuBarButton>
      </ListItem>
    </List>
  );
}
`
const codeString1 = `import Menu from '@mui/joy/Menu';
import MenuItem, { menuItemClasses } from '@mui/joy/MenuItem';
import List from '@mui/joy/List';
import ListItem from '@mui/joy/ListItem';
import ListItemButton from '@mui/joy/ListItemButton';
import ListDivider from '@mui/joy/ListDivider';
import Typography, { typographyClasses } from '@mui/joy/Typography';
import Dropdown, { DropdownProps } from '@mui/joy/Dropdown';
import MenuButton from '@mui/joy/MenuButton';
import { Theme } from '@mui/joy';`

const codeString2 = ` <MenuBarButton
open={menuIndex === 0}
onOpen={() => {
  setMenuIndex((prevMenuIndex) => (prevMenuIndex === null ? 0 : null));
}}
onKeyDown={createHandleButtonKeyDown(0)}
onMouseEnter={() => {
  if (typeof menuIndex === 'number') {
    setMenuIndex(0);
  }
}}
ref={(instance) => {
  menus.current[0] = instance!;
}}
menu={
  <Menu
    onClose={() => {
      menus.current[0]?.focus();
    }}
  >
    <ListItem nested>
      <List aria-label="New">
        <MenuItem {...itemProps}>New File</MenuItem>
        <MenuItem {...itemProps}>
          New Text File... {renderShortcut('⌥ ⌘ N')}
        </MenuItem>
        <MenuItem {...itemProps}>
          New Window {renderShortcut('⇧ ⌘ N')}
        </MenuItem>
      </List>
    </ListItem>
    <ListDivider />
    <ListItem nested>
      <List aria-label="Open">
        <MenuItem {...itemProps}>Open {renderShortcut('⌘ O')}</MenuItem>
        <MenuItem {...itemProps}>Open Folder</MenuItem>
      </List>
    </ListItem>
  </Menu>
}
>
File
</MenuBarButton>`

const  Menubar  = () => {


  const [open, setOpen] = React.useState(false);

  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };


  




  return (
    <div  style={{paddingTop:"1rem", paddingLeft:"2rem"}}>

    <b><h1 style={{fontSize:'2rem'}}>Menu Bar</h1></b>
    
    <p style={{color:"#99999F"}}>A visually persistent menu common in desktop applications <br /> that provides quick access to a consistent set of commands.</p>
    
    
     <Button sx={{color:"#191717", backgroundColor:"#EEEEEE",textTransform:"capitalize", margin:'1rem',padding:'0rem 1rem'}} >
      Radix UI
    </Button>
    <Button sx={{color:"#191717", backgroundColor:"#EEEEEE",textTransform:"capitalize",padding:'0rem 1rem'}} >
      API Reference
    </Button>
    
    
    
    
    
    
    <Box sx={{ width: '663px',   typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList TabIndicatorProps={{sx:{backgroundColor: "#18181B"}}} onChange={handleChange} aria-label="lab API tabs example">
            <Tab style={tablabel} label="Preview" value="1" />
            <Tab style={tablabel} label="Code" value="2" />
            
          </TabList>
        </Box>
        <div style={{border:"1px solid #F1F1F1",  marginTop:"2rem",  width:"675px", borderRadius:"0.5rem"}}>
    
        <TabPanel value="1">
        <div style={{width:"609px", height:"400px", display:"flex",alignItems:"center",justifyContent:"center"}}>
    
    
          
            
              
        
              
        
    
    <MenuBarButton/>
        
    
    
    
        
      
    
        </div>
        
        </TabPanel>
        </div>
        <TabPanel value="2">   
         <SyntaxHighlighter language="tsx" style={atomOneDark} customStyle={{
            padding: '25px' ,
            borderRadius: '10px', 
            width: '620px',
            height:'400px'
            
    
        }}>
          {codeString}
        </SyntaxHighlighter></TabPanel>
        
      </TabContext>
    </Box>
    
    

    <b> <p style={{marginTop:"3rem",fontSize:"1.6rem"}}>Installation</p></b> 
    
    <hr style={{width:"680px",height:"2px",opacity:"0.3",backgroundColor:"#F5F5F5",margin:"10px 0" }} />
    
    
    <InstallMenu/>
    
    
    <b> <p style={{marginTop:"3rem",fontSize:"1.6rem"}}>Usage</p></b> 
    
    <hr style={{width:"680px",height:"2px",opacity:"0.3",backgroundColor:"#F5F5F5",margin:"10px 0" }} />
    
    <SyntaxHighlighter language="tsx" style={atomOneDark} customStyle={{
          
            borderRadius: '10px', 
            width: '680px',
            height:'300px'
            
    
        }}>
          {codeString1}
        </SyntaxHighlighter>
    
    
    
        
    <SyntaxHighlighter language="tsx" style={atomOneDark} customStyle={{
          
          borderRadius: '10px', 
          width: '680px',
          height:'1000px',
          marginTop:"1.7rem",
          
    
      }}>
        {codeString2}
      </SyntaxHighlighter>
    
    
    
    
    
    </div>
  )
}











  

  

  









export default Menubar