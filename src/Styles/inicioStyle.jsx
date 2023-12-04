import styled from "styled-components"


export const Figure = styled.img`
width: 20vw;
border-radius: 30px;

@media(max-width: 800px){
    width: 60vw;
}


`

export const Main = styled.main`
display: flex;
justify-content: center;
align-items: center;
height: 88vh;
background: #FBFAF7;

@media(max-width:800px) {
    flex-direction: column;
}


`

export const Sessao = styled.section`
margin-left: 20px;
text-align: center;
`
    
