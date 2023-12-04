import React from "react"
import Linkedin from "../assets/linkedin.svg"
import Github from "../assets/github.svg"
import Whatsapp from "../assets/whatsapp.svg"
import {footerStyle, MidStyle} from "../Styles/fimStyle"



function Footer(){

    return(
        <footerStyle>
        <section>
            <nav>
                <MidStyle>
                    <li>
        <a href="https://www.linkedin.com/in/carlos-daniel-53920b252" target="_blank" >
            <img src={Linkedin} alt="Linkedin logo" />
            
        </a>
        </li>
        <li>
        <a href="https://github.com/carlosmakehub" target="_blank" >
            <img src={Github} alt="GitHub logo" />
        </a>
        </li>
        <li>
        <a href="https://wa.me/5511959377813" target="_blank" >
            <img src={Whatsapp} alt="Whatsapp logo" />
        </a>
        </li>
        </MidStyle>
        </nav>
    </section>
    </footerStyle>
    )
}

export default Footer