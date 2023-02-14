import React from "react";
import About from "./Component/About";
import { Contact } from "./Component/Contact";
import Experience from "./Component/Experience";
import Home from "./Component/Home";
import Nav from "./Component/Nav";
import Portfolio from "./Component/Portfolio";
import Sociallinks from "./Component/Sociallinks";

function App(){
  return(
    <div>
    <Nav/> 
    <Home/>
    <About/>
    <Portfolio/>
    <Experience/>
    <Contact/>

    <Sociallinks/>
    </div>
  )
}
export default App