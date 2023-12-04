import React from "react"
import {Img, SecProj} from "../Styles/projetoStyles"
import LaPizza from "../assets/lapizza.png"
import DesafioInverno from "../assets/desafioinverno.png"

function Projetos(){
    return(
       <SecProj>
        <h2>Alguns dos projetos desenvolvidos ao longo do curso Vai na Web</h2>
       <figure>
        <a href="https://lapizza-chi.vercel.app/" target="_blank" >
        <Img src={LaPizza} alt="Site LaPizza" />
        </a>
        <a href="https://desafioinverno-five.vercel.app/" target="_blank" >
        <Img src={DesafioInverno} alt="Desafio Inverno" />
        </a>
       </figure>
       </SecProj>
    )
}

export default Projetos