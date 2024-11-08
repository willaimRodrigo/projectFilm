import { Outlet } from "react-router-dom"
import { NavBar } from "./components/NavBar";

import "./components/styles/reset.scss";
import "./components/styles/global.scss";

function App() {

  return (
    <>
      <NavBar />
      <Outlet />
    </>
    
  )
}

export default App;
