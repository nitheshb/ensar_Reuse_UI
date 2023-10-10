import { BrowserRouter, Route, Routes } from "react-router-dom";
import MainLayout from "./components/layout/MainLayout";
import { routes } from "./routes";


import '../src/tail.css';


import ResponsiveAppBar from './navbar/Nav';
import Home from './navbar/Home';
import Documentation from './navbar/Documentation';
import Themes from './navbar/Themes';
import Examples from './navbar/Examples';
import GitHub from './navbar/GitHub';




function App() {
  return (


    <div>
      
    

    
    
    <BrowserRouter>
    <ResponsiveAppBar/>
    
    <Routes>
    
      <Route path="/" element={<MainLayout />}>
        {routes}
      </Route>
      
    </Routes>
  </BrowserRouter>

    </div>



  );
}

export default App;
