import React from "react";
import Header from "./components/Header";
import Symptoms from "./components/Symptoms";
import Heropage from "./components/Heropage";
import Departments from "./components/Departments";
import Howitworks from "./components/Howitworks";
import Doctor from "./components/Doctor";
import Footer from "./components/Footer";



function App() {
  return (
    <>
<Header/>
<Symptoms/>
<Heropage/>
<Doctor/>
<Departments/>
<Howitworks/>
<Footer/>
    </>
  )
}

export default App;