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

import MenuBarButton from './DropdownMenu';

import AboutMenu from './navigationmenucode';

import InsatllNavigation from '../install/InsatllNavigation';


const codeString = `import * as React from 'react';
import { Popper } from '@mui/base/Popper';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Chip from '@mui/joy/Chip';
import List from '@mui/joy/List';
import ListDivider from '@mui/joy/ListDivider';
import ListItem from '@mui/joy/ListItem';
import ListItemContent from '@mui/joy/ListItemContent';
import ListItemButton from '@mui/joy/ListItemButton';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import HomeRounded from '@mui/icons-material/HomeRounded';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Person from '@mui/icons-material/Person';
import Apps from '@mui/icons-material/Apps';
import FactCheck from '@mui/icons-material/FactCheck';
import BookmarkAdd from '@mui/icons-material/BookmarkAdd';

type Options = {
  initialActiveIndex: null | number;
  vertical: boolean;
  handlers?: {
    onKeyDown: (
      event: React.KeyboardEvent<HTMLAnchorElement>,
      fns: { setActiveIndex: React.Dispatch<React.SetStateAction<number | null>> },
    ) => void;
  };
};

const useRovingIndex = (options?: Options) => {
  const {
    initialActiveIndex = 0,
    vertical = false,
    handlers = {
      onKeyDown: () => {},
    },
  } = options || {};
  const [activeIndex, setActiveIndex] = React.useState<number | null>(
    initialActiveIndex!,
  );
  const targetRefs = React.useRef<Array<HTMLAnchorElement>>([]);
  const targets = targetRefs.current;
  const focusNext = () => {
    let newIndex = activeIndex! + 1;
    if (newIndex >= targets.length) {
      newIndex = 0;
    }
    targets[newIndex]?.focus();
    setActiveIndex(newIndex);
  };
  const focusPrevious = () => {
    let newIndex = activeIndex! - 1;
    if (newIndex < 0) {
      newIndex = targets.length - 1;
    }
    targets[newIndex]?.focus();
    setActiveIndex(newIndex);
  };
  const getTargetProps = (index: number) => ({
    ref: (ref: HTMLAnchorElement) => {
      if (ref) {
        targets[index] = ref;
      }
    },
    tabIndex: activeIndex === index ? 0 : -1,
    onKeyDown: (e: React.KeyboardEvent<HTMLAnchorElement>) => {
      if (Number.isInteger(activeIndex)) {
        if (e.key === (vertical ? 'ArrowDown' : 'ArrowRight')) {
          focusNext();
        }
        if (e.key === (vertical ? 'ArrowUp' : 'ArrowLeft')) {
          focusPrevious();
        }
        handlers.onKeyDown?.(e, { setActiveIndex });
      }
    },
    onClick: () => {
      setActiveIndex(index);
    },
  });
  return {
    activeIndex,
    setActiveIndex,
    targets,
    getTargetProps,
    focusNext,
    focusPrevious,
  };
};

type AboutMenuProps = {
  focusNext: () => void;
  focusPrevious: () => void;
  onMouseEnter?: (event?: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLAnchorElement>) => void;
};

const AboutMenu = React.forwardRef(
  (
    { focusNext, focusPrevious, ...props }: AboutMenuProps,
    ref: React.ForwardedRef<HTMLAnchorElement>,
  ) => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLAnchorElement | null>(null);
    const { targets, setActiveIndex, getTargetProps } = useRovingIndex({
      initialActiveIndex: null,
      vertical: true,
      handlers: {
        onKeyDown: (event, fns) => {
          if (event.key.match(/(ArrowDown|ArrowUp|ArrowLeft|ArrowRight)/)) {
            event.preventDefault();
          }
          if (event.key === 'Tab') {
            setAnchorEl(null);
            fns.setActiveIndex(null);
          }
          if (event.key === 'ArrowLeft') {
            setAnchorEl(null);
            focusPrevious();
          }
          if (event.key === 'ArrowRight') {
            setAnchorEl(null);
            focusNext();
          }
        },
      },
    });

    const open = Boolean(anchorEl);
    const id = open ? 'about-popper' : undefined;
    return (
      <ClickAwayListener onClickAway={() => setAnchorEl(null)}>
        <div onMouseLeave={() => setAnchorEl(null)}>
          <ListItemButton
            aria-haspopup
            aria-expanded={open ? 'true' : 'false'}
            ref={ref}
            {...props}
            role="menuitem"
            onKeyDown={(event) => {
              props.onKeyDown?.(event);
              if (event.key.match(/(ArrowLeft|ArrowRight|Tab)/)) {
                setAnchorEl(null);
              }
              if (event.key === 'ArrowDown') {
                event.preventDefault();
                targets[0]?.focus();
                setActiveIndex(0);
              }
            }}
            onFocus={(event) => setAnchorEl(event.currentTarget)}
            onMouseEnter={(event) => {
              props.onMouseEnter?.(event);
              setAnchorEl(event.currentTarget);
            }}
            sx={(theme) => ({
              ...(open && theme.variants.plainHover.neutral),
            })}
          >
            About <KeyboardArrowDown />
          </ListItemButton>
          <Popper id={id} open={open} anchorEl={anchorEl} disablePortal keepMounted>
            <List
              role="menu"
              aria-label="About"
              variant="outlined"
              sx={{
                my: 2,
                boxShadow: 'md',
                borderRadius: 'sm',
                '--List-radius': '8px',
                '--List-padding': '4px',
                '--ListDivider-gap': '4px',
                '--ListItemDecorator-size': '32px',
              }}
            >
              <ListItem role="none">
                <ListItemButton role="menuitem" {...getTargetProps(0)}>
                  <ListItemDecorator>
                    <Apps />
                  </ListItemDecorator>
                  Overview
                </ListItemButton>
              </ListItem>
              <ListItem role="none">
                <ListItemButton role="menuitem" {...getTargetProps(1)}>
                  <ListItemDecorator>
                    <Person />
                  </ListItemDecorator>
                  Administration
                </ListItemButton>
              </ListItem>
              <ListItem role="none">
                <ListItemButton role="menuitem" {...getTargetProps(2)}>
                  <ListItemDecorator>
                    <FactCheck />
                  </ListItemDecorator>
                  Facts
                </ListItemButton>
              </ListItem>
            </List>
          </Popper>
        </div>
      </ClickAwayListener>
    );
  },
);

type AdmissionsMenuProps = {
  focusNext: () => void;
  focusPrevious: () => void;
  onMouseEnter?: (event?: React.MouseEvent<HTMLAnchorElement, MouseEvent>) => void;
  onKeyDown?: (event: React.KeyboardEvent<HTMLAnchorElement>) => void;
};

const AdmissionsMenu = React.forwardRef(
  (
    { focusNext, focusPrevious, ...props }: AdmissionsMenuProps,
    ref: React.ForwardedRef<HTMLAnchorElement>,
  ) => {
    const [anchorEl, setAnchorEl] = React.useState<HTMLAnchorElement | null>(null);
    const { targets, setActiveIndex, getTargetProps } = useRovingIndex({
      initialActiveIndex: null,
      vertical: true,
      handlers: {
        onKeyDown: (event, fns) => {
          if (event.key.match(/(ArrowDown|ArrowUp|ArrowLeft|ArrowRight)/)) {
            event.preventDefault();
          }
          if (event.key === 'Tab') {
            setAnchorEl(null);
            fns.setActiveIndex(null);
          }
          if (event.key === 'ArrowLeft') {
            setAnchorEl(null);
            focusPrevious();
          }
          if (event.key === 'ArrowRight') {
            setAnchorEl(null);
            focusNext();
          }
        },
      },
    });

    const open = Boolean(anchorEl);
    const id = open ? 'admissions-popper' : undefined;
    return (
      <ClickAwayListener onClickAway={() => setAnchorEl(null)}>
        <div onMouseLeave={() => setAnchorEl(null)}>
          <ListItemButton
            aria-haspopup
            aria-expanded={open ? 'true' : 'false'}
            ref={ref}
            {...props}
            role="menuitem"
            onKeyDown={(event) => {
              props.onKeyDown?.(event);
              if (event.key.match(/(ArrowLeft|ArrowRight|Tab)/)) {
                setAnchorEl(null);
              }
              if (event.key === 'ArrowDown') {
                event.preventDefault();
                targets[0]?.focus();
                setActiveIndex(0);
              }
            }}
            onFocus={(event) => setAnchorEl(event.currentTarget)}
            onMouseEnter={(event) => {
              props.onMouseEnter?.(event);
              setAnchorEl(event.currentTarget);
            }}
            sx={(theme) => ({
              ...(open && theme.variants.plainHover.neutral),
            })}
          >
            Admissions <KeyboardArrowDown />
          </ListItemButton>
          <Popper id={id} open={open} anchorEl={anchorEl} disablePortal keepMounted>
            <List
              role="menu"
              aria-label="About"
              variant="outlined"
              sx={{
                my: 2,
                boxShadow: 'md',
                borderRadius: 'sm',
                minWidth: 180,
                '--List-radius': '8px',
                '--List-padding': '4px',
                '--ListDivider-gap': '4px',
              }}
            >
              <ListItem role="none">
                <ListItemButton role="menuitem" {...getTargetProps(0)}>
                  <ListItemContent>Apply</ListItemContent>
                  <Chip size="sm" variant="soft" color="danger">
                    Last 2 days!
                  </Chip>
                </ListItemButton>
              </ListItem>
              <ListDivider />
              <ListItem role="none">
                <ListItemButton role="menuitem" {...getTargetProps(1)}>
                  Visit
                </ListItemButton>
              </ListItem>
              <ListItem
                role="none"
                endAction={
                  <IconButton variant="outlined" color="neutral" size="sm">
                    <BookmarkAdd />
                  </IconButton>
                }
              >
                <ListItemButton role="menuitem" {...getTargetProps(2)}>
                  Photo tour
                </ListItemButton>
              </ListItem>
            </List>
          </Popper>
        </div>
      </ClickAwayListener>
    );
  },
);

export default function ExampleNavigationMenu() {
  const { targets, getTargetProps, setActiveIndex, focusNext, focusPrevious } =
    useRovingIndex();
  return (
    <Box sx={{ minHeight: 190 }}>
      <List
        role="menubar"
        orientation="horizontal"
        sx={{
          '--List-radius': '8px',
          '--List-padding': '4px',
          '--List-gap': '8px',
          '--ListItem-gap': '0px',
        }}
      >
        <ListItem role="none">
          <ListItemButton
            role="menuitem"
            {...getTargetProps(0)}
            component="a"
            href="#navigation-menu"
          >
            <ListItemDecorator>
              <HomeRounded />
            </ListItemDecorator>
            Home
          </ListItemButton>
        </ListItem>
        <ListItem role="none">
          <AboutMenu
            onMouseEnter={() => {
              setActiveIndex(1);
              targets[1].focus();
            }}
            focusNext={focusNext}
            focusPrevious={focusPrevious}
            {...getTargetProps(1)}
          />
        </ListItem>
        <ListItem role="none">
          <AdmissionsMenu
            onMouseEnter={() => {
              setActiveIndex(2);
              targets[2].focus();
            }}
            focusNext={focusNext}
            focusPrevious={focusPrevious}
            {...getTargetProps(2)}
          />
        </ListItem>
      </List>
    </Box>
  );
}
`
const codeString1 = `import { Popper } from '@mui/base/Popper';
import { ClickAwayListener } from '@mui/base/ClickAwayListener';
import Box from '@mui/joy/Box';
import IconButton from '@mui/joy/IconButton';
import Chip from '@mui/joy/Chip';
import List from '@mui/joy/List';
import ListDivider from '@mui/joy/ListDivider';
import ListItem from '@mui/joy/ListItem';
import ListItemContent from '@mui/joy/ListItemContent';
import ListItemButton from '@mui/joy/ListItemButton';
import ListItemDecorator from '@mui/joy/ListItemDecorator';
import HomeRounded from '@mui/icons-material/HomeRounded';
import KeyboardArrowDown from '@mui/icons-material/KeyboardArrowDown';
import Person from '@mui/icons-material/Person';
import Apps from '@mui/icons-material/Apps';
import FactCheck from '@mui/icons-material/FactCheck';
import BookmarkAdd from '@mui/icons-material/BookmarkAdd';
`

const codeString2 = ` <ListItem role="none">
<ListItemButton role="menuitem" {...getTargetProps(0)}>
  <ListItemDecorator>
    <Apps />
  </ListItemDecorator>
  Overview
</ListItemButton>
</ListItem>
<ListItem role="none">
<ListItemButton role="menuitem" {...getTargetProps(1)}>
  <ListItemDecorator>
    <Person />
  </ListItemDecorator>
  Administration
</ListItemButton>
</ListItem>
<ListItem role="none">
<ListItemButton role="menuitem" {...getTargetProps(2)}>
  <ListItemDecorator>
    <FactCheck />
  </ListItemDecorator>
  Facts
</ListItemButton>
</ListItem>
</List>
</Popper>`








const  NavigationMenu  = () => {


  const [open, setOpen] = React.useState(false);

  const [value, setValue] = React.useState('1');

  const handleChange = (event: React.SyntheticEvent, newValue: string) => {
    setValue(newValue);
  };





  return (
    <div  style={{paddingTop:"1rem", paddingLeft:"2rem"}}>

    <b><h1 style={{fontSize:'2rem'}}>Navigation Menu</h1></b>
    
    <p style={{color:"#99999F"}}>A collection of links for navigating websites.</p>
    
    
     <Button sx={{color:"#191717", backgroundColor:"#EEEEEE",textTransform:"capitalize", margin:'1rem',padding:'0rem 1rem'}} >
      Radix UI
    </Button>
    <Button sx={{color:"#191717", backgroundColor:"#EEEEEE",textTransform:"capitalize",padding:'0rem 1rem'}} >
      API Reference
    </Button>
    
    
    
    
    
    
    <Box sx={{ width: '663px',   typography: 'body1' }}>
      <TabContext value={value}>
        <Box sx={{ borderBottom: 1, borderColor: 'divider' }}>
          <TabList onChange={handleChange} aria-label="lab API tabs example">
            <Tab label="Preview" value="1" />
            <Tab label="Code" value="2" />
            
          </TabList>
        </Box>
        <div style={{border:"1px solid #F1F1F1",  marginTop:"2rem",  width:"675px", borderRadius:"0.5rem"}}>
    
        <TabPanel value="1">
        <div style={{width:"609px", height:"400px", display:"flex",alignItems:"center",justifyContent:"center"}}>
    
    
          
            
              
        
              
        
    
    <AboutMenu/>
        
    
    
    
        
      
    
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
    
    
    <InsatllNavigation/>
    
    
    <b> <p style={{marginTop:"3rem",fontSize:"1.6rem"}}>Usage</p></b> 
    
    <hr style={{width:"680px",height:"2px",opacity:"0.3",backgroundColor:"#F5F5F5",margin:"10px 0" }} />
    
    <SyntaxHighlighter language="tsx" style={atomOneDark} customStyle={{
          
            borderRadius: '10px', 
            width: '680px',
            height:'460px'
            
    
        }}>
          {codeString1}
        </SyntaxHighlighter>
    
    
    
        
    <SyntaxHighlighter language="tsx" style={atomOneDark} customStyle={{
          
          borderRadius: '10px', 
          width: '680px',
          height:'670px',
          marginTop:"1.7rem",
          
    
      }}>
        {codeString2}
      </SyntaxHighlighter>
    
    
    
    
    
    </div>
  )
}











  

  

  

export default NavigationMenu








