import React from "react"
import Reacticon from "../assets/reactlogo.svg"
import Stilo from "../assets/styled.svg"
import Css from "../assets/css.svg"
import Html from "../assets/html.svg"
import {Img, SesSobre} from "../Styles/aboutStyles"


function Sobre(){
    return(
       <SesSobre>
        <h3>Desenvolvedor front-end extremamente curioso, empenhado em levar soluções práticas a sociedade. Tech Lover, atualmente aspirando ingressar na área, em busca de tornar meu conhecimento em solução prática a sociedade e empresas, facilitando de algum modo o uso e experiência do usuário do outro lado da tela
        </h3>
    
        <figure>
            <Img src={Reacticon} alt="" />
            <Img src={Stilo} alt="" />
            <Img src={Css} alt="" />
            <Img src={Html} alt="" />
        </figure>
        
       </SesSobre>
    )
}

export default Sobre