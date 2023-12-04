import React from "react";
import Eu from "../assets/eu.jpeg"
import {Figure, Main, Sessao} from "../Styles/inicioStyle"


function Inicio(){
    return(
        <Main>   
        <figure>
            <Figure src={Eu} alt="Eu" />
        </figure>
        <Sessao>
        <h2>Olá, seja bem vindo ao meu portfólio!</h2>
        <h2>Me chamo Carlos Daniel</h2>
        <h3>Desenvolvedor Front-End</h3>
        
        
        </Sessao>
        </Main>
    
    )
}

export default Inicio