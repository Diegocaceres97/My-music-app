import styled from "styled-components";

const FooterContainer = styled.div`
position: fixed;
bottom: 0;
height:70px;
width:100vw;
background-color: #181818;
color: white;
display:flex;
justify-content:space-between;
`
const FooterLeft = styled.div`
flex:0.3;
display:flex;
align-items:center;
max-width:300px;
& img{
    height:70px;
    width:60px;
    margin-right:  20px;
    object-fit:  contain;
}
`
const FooterCenter = styled.div`
flex:0.4;
display:flex;
align-items: center;
justify-content: space-between;
max-width: 300px;
cursor: pointer;
& .repeat {
    color: #00ff00;
    transition: transform 200ms ease-in-out !important;
} & .shuffle {
    color: #00ff00;
} & .MuiSvgIcon-root:hover{
    transform: scale(1.2) !important;
    transition: transform 200ms ease-in-out !important;
}
`
const FooterRight = styled.div`
flex:0.3;
display:flex;
align-items: center;
justify-content: center;
margin-right: 35px;

& .MuiSlider-root{
    color: #00ff00;
} @media(max-width: 500px) {
    .MuiSlider-root{
    display: none;
    }
}
`
export {FooterContainer, FooterLeft,FooterCenter, FooterRight} 