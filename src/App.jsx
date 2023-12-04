import React from "react"
import {BrowserRouter, Routes, Route} from "react-router-dom"
import Header from "./Components/Header"
import Inicio from "./Components/Inicio"
import Projetos from "./Components/Projetos"
import Sobre from "./Components/Sobre"
import { GlobalStyle } from "./Styles/global"
import Footer from "./Components/Footer"

function App(){
  return (
    <>
    <GlobalStyle />
    <BrowserRouter>
    <Header />
    <Routes>
      <Route path="/" element={<Inicio/>}/>
      <Route path="/sobre" element={<Sobre/>} />
      <Route path="/projetos" element={<Projetos/>} />
    </Routes>
    </BrowserRouter>
  <Footer />
    </>
  )
}

export default App