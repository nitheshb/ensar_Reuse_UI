
import HomePage from "../pages/home/HomePage";
import { RouteType } from "./config";


import ComponentPageLayout from "../pages/component/ComponentPageLayout";
import AppsOutlinedIcon from '@mui/icons-material/AppsOutlined';
import ArticleOutlinedIcon from '@mui/icons-material/ArticleOutlined';

import FileDownloadOutlinedIcon from '@mui/icons-material/FileDownloadOutlined';
import AlertPage from "../pages/component/AlertPage";
import ButtonPage from "../pages/component/ButtonPage";
import AccordionPage from "../pages/component/AccordionPage";


import AlertDialog from "../pages/component/AlertDialog";
import Avatar from "../pages/component/AvatarPage";
import Badge from "../pages/component/Badge";
import Calendar from "../pages/component/Calendar";
import Card from "../pages/component/Card";
import Checkbox from "../pages/component/Checkbox";
import Collapsible from "../pages/component/Collapsible";
import  Combobox from "../pages/component/Combobox";
import   Command from "../pages/component/Command";
import   ContextMenu from "../pages/component/ContextMenu";
import DataTable from "../pages/component/DataTable";
import DatePicker from "../pages/component/DatePicker";
import Dialog from "../pages/component/Dialog";
import HoverCard from "../pages/component/HoverCard";
import Form from "../pages/component/Form";
import DropdownMenu from "../pages/component/DropdownMenu";
import Input from "../pages/component/Input";
import Label from "../pages/component/Label";
import Menubar from "../pages/component/Menubar";
import NavigationMenu from "../pages/component/NavigationMenu";
import Popover from "../pages/component/Popover";
import Progress from "../pages/component/Progress";
import RadioGroup from "../pages/component/RadioGroup";
import Scrollarea from "../pages/component/Scrollarea";
import Select from "../pages/component/Select";
import Separator from "../pages/component/Separator";
import Skeleton from "../pages/component/Skeleton";
import Slider from "../pages/component/Slider";
import Switch from "../pages/component/Switch";
import Tabs from "../pages/component/Tabs";
import Textarea from "../pages/component/Textarea";
import Toast from "../pages/component/Toast";
import Toggle from "../pages/component/Toggle";
import Tooltip from "../pages/component/Tooltip";
import Sheet from "../pages/component/Sheet";
import InstallationPage from "../pages/installation/InstallationPage";
import DocumentationPage from "../pages/documentation/DocumentationPage";
import Introduction from "../pages/component/Introduction";

//import Typography from "@mui/material/Typography";


import Typography from "../pages/component/Typography";

import TablePage from "../pages/table/TablePage";
import Figma from "../pages/component/Figma";
import AspectRatios from "../pages/component/AspectRatios";
import AvatarPage from "../pages/component/AvatarPage";

const appRoutes: RouteType[] = [
  {
    index: true,
    element: <HomePage />,
    state: "home"
  },


  {
    path: "/Introduction",
    element: <Introduction />,
    state: "Introduction",
    sidebarProps: {
      displayText: "Introduction",
      
    }
  },
  {
    path: "/installation",
    element: <InstallationPage />,
    state: "installation",
    sidebarProps: {
      displayText: "Installation",
      
    }
  },

  {
    path: "/Typography",
    element: <Typography />,
    state: "Typography",
    sidebarProps: {
      displayText: "Typography",
      
    }
  },

  {
    path: "/Figma",
    element: <Figma/>,
    state: "Figma",
    sidebarProps: {
      displayText: "Figma",
      
    }
  },
  
  {
    path: "/component",
    element: <ComponentPageLayout />,
    state: "component",
    sidebarProps: {
      displayText: "Components",
      
    },
    child: [


      {
        path: "/component/Accordion",
        element: <AccordionPage />,
        state: "component.Accordion",
        sidebarProps: {
          displayText: "Accordion"
        }
      },

      {
        path: "/component/alert",
        element: <AlertPage />,
        state: "component.alert",
        sidebarProps: {
          displayText: "Alert"
        },
      },
      

      {
        path: "/component/AlertDialog",
        element: <AlertDialog />,
        state: "component.AlertDialog",
        sidebarProps: {
          displayText: "AlertDialog"
        }
      },
      {
        path: "/component/AspectRatios",
        element: <AspectRatios />,
        state: "component.AspectRatios",
        sidebarProps: {
          displayText: "AspectRatio"
        }
      },

      {
        path: "/component/AvatarPage",
        element: <AvatarPage />,
        state: "component.AvatarPage",
        sidebarProps: {
          displayText: "Avatar"
        }
      },
      {
        path: "/component/Baged",
        element: <Badge />,
        state: "component.Baged",
        sidebarProps: {
          displayText: "Baged"
        }
      },

      {
        path: "/component/button",
        element: <ButtonPage />,
        state: "component.button",
        sidebarProps: {
          displayText: "Button"
        }
      },

      {
        path: "/component/Calendar",
        element: <Calendar />,
        state: "component.Calendar",
        sidebarProps: {
          displayText: "Calendar"
        }
      },

      {
        path: "/component/Card",
        element: < Card/>,
        state: "component.Card",
        sidebarProps: {
          displayText: "Card"
        }
      },


      {
        path: "/component/Checkbox",
        element: < Checkbox/>,
        state: "component.Checkbox",
        sidebarProps: {
          displayText: "Checkbox"
        }
      },

      {
        path: "/component/Collapsible",
        element: < Collapsible/>,
        state: "component.Collapsible",
        sidebarProps: {
          displayText: "Collapsible"
        }
      },

      {
        path: "/component/Combobox",
        element: < Combobox/>,
        state: "component.Combobox",
        sidebarProps: {
          displayText: "Combobox"
        }
      },

      {
        path: "/component/Command",
        element: <Command />,
        state: "component.Command",
        sidebarProps: {
          displayText: "Command"
        }
      },

      {
        path: "/component/ContextMenu",
        element: < ContextMenu/>,
        state: "component.ContextMenu",
        sidebarProps: {
          displayText: "ContextMenu"
        }
      },

      {
        path: "/component/DataTable",
        element: <DataTable/>,
        state: "component.DataTable",
        sidebarProps: {
          displayText: "DataTable"
        }
      },

      {
        path: "/component/DatePicker",
        element: < DatePicker/>,
        state: "component.DatePicker",
        sidebarProps: {
          displayText: "DatePicker"
        }
      },

      {
        path: "/component/Dialog",
        element: < Dialog/>,
        state: "component.Dialog",
        sidebarProps: {
          displayText: "Dialog"
        }
      },


      {
        path: "/component/DropdownMenu",
        element: < DropdownMenu/>,
        state: "component.DropdownMenu",
        sidebarProps: {
          displayText: "DropdownMenu"
        }
      },


      {
        path: "/component/Form",
        element: <Form />,
        state: "component.Form",
        sidebarProps: {
          displayText: "Form"
        }
      },

      {
        path: "/component/HoverCard",
        element: <HoverCard />,
        state: "component.HoverCard",
        sidebarProps: {
          displayText: "HoverCard"
        }
      },

      


      {
        path: "/component/ Input",
        element: <Input/>,
        state: "component.Input",
        sidebarProps: {
          displayText: "Input"
        }
      },

      
      {
        path: "/component/Label",
        element: <Label />,
        state: "component.Label",
        sidebarProps: {
          displayText: "Label"
        }
      },

      
      {
        path: "/component/Menubar",
        element: <Menubar />,
        state: "component.Menubar",
        sidebarProps: {
          displayText: "Menubar"
        }
      },


      
      {
        path: "/component/NavigationMenu",
        element: <NavigationMenu />,
        state: "component.NavigationMenu",
        sidebarProps: {
          displayText: "NavigationMenu"
        }
      },

      
      {
        path: "/component/Popover",
        element: <Popover />,
        state: "component.Popover",
        sidebarProps: {
          displayText: "Popover"
        }
      },

      
      {
        path: "/component/Progress",
        element: <Progress />,
        state: "component.Progress",
        sidebarProps: {
          displayText: "Progress"
        }
      },

      
      {
        path: "/component/RadioGroup",
        element: <RadioGroup />,
        state: "component.RadioGroup",
        sidebarProps: {
          displayText: "RadioGroup"
        }
      },

      
      {
        path: "/component/Scrollarea",
        element: <Scrollarea />,
        state: "component.Scrollarea",
        sidebarProps: {
          displayText: "Scrollarea"
        }
      },

      {
        path: "/component/Select",
        element: < Select/>,
        state: "component.Select",
        sidebarProps: {
          displayText: "Select"
        }
      },

      {
        path: "/component/Separator",
        element: < Separator/>,
        state: "component.Separator",
        sidebarProps: {
          displayText: "Separator"
        }
      },


      {
        path: "/component/Sheet",
        element: <Sheet />,
        state: "component.Sheet",
        sidebarProps: {
          displayText: "Sheet"
        }
      },

      {
        path: "/component/Skeleton",
        element: < Skeleton/>,
        state: "component.Skeleton",
        sidebarProps: {
          displayText: "Skeleton"
        }
      },


      {
        path: "/component/Slider",
        element: < Slider/>,
        state: "component.Slider",
        sidebarProps: {
          displayText: "Slider"
        }
      },

      {
        path: "/component/Switch",
        element: < Switch/>,
        state: "component.Switch",
        sidebarProps: {
          displayText: "Switch"
        }
      },

      {
        path: "/component/Tabs",
        element: < Tabs/>,
        state: "component.Tabs",
        sidebarProps: {
          displayText: "Tabs"
        }
      },

      {
        path: "/component/Textarea",
        element: < Textarea/>,
        state: "component.Textarea",
        sidebarProps: {
          displayText: "Textarea"
        }
      },

      {
        path: "/component/Toast",
        element: <Toast />,
        state: "component.Toast",
        sidebarProps: {
          displayText: "Toast"
        }
      },



      {
        path: "/component/Toggle",
        element: < Toggle/>,
        state: "component.Toggle",
        sidebarProps: {
          displayText: "Toggle"
        }
      },

      {
        path: "/component/Tooltip",
        element: < Tooltip/>,
        state: "component.Tooltip",
        sidebarProps: {
          displayText: "Tooltip"
        }
      },




      

   



      
      

    ]
  },










  {
    path: "/documentation",
    element: <DocumentationPage />,
    state: "documentation",
    sidebarProps: {
      displayText: "Documentation",
      
    }
  },
  



  
];

export default appRoutes;