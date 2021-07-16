import styled from 'styled-components';

const BodyContainer= styled.div`
flex:0.8;
background: linear-gradient(#340034, #000);
color: #fff;
overflow-y:  overlay;
&::-webkit-scrollbar{
    display: none;
}& hr{
border: 0.5px solid gray;
width:90%;
margin: 20px auto ;
}
`
const HeaderContainer = styled.div`
display:flex;
justify-content: space-between;
margin-bottom: 20px;
margin-top:20px;
`
const HeaderLeft = styled.div`
display: flex;
align-items: center;
flex:0.5;
min-width:75px;
background-color: white;
color: #181818;
border-radius: 30px;
padding: 10px;
margin-left: 30px;
& input {
    border: none;
    width: 100%;
} @media(max-width: 500px) {
    margin-left: 5px;
}
`
const HeaderRight= styled.div`
display: flex;
align-items: center;
margin-right: 10px;
cursor: pointer;
& h4{
    margin-left:6px;
    margin-right: 10px;
}
`
const Info = styled.div`
display: flex;
align-items: flex-end;
padding: 10px;
& img {
    width: 20vw;
    margin: 0 20px;
    box-shadow: 0 4px 60px #000;
} 
`
const InfoText = styled.div`
flex: 1;
& h1 {
    margin-bottom: 10px;
}
`
const Songs = styled.div`
margin: 20px 30px 85px;
`
const Icons = styled.div`
cursor: pointer;
margin-top: -10px;
margin-left: 25px;
@media(max-width: 500px) {
    margin-left: -20px;
}
`
const SongRowContainer = styled.div`
display: flex;
margin-left: 25px;
align-items: center;
z-index: 90;
margin-bottom: 10px;
&:hover{
    cursor: pointer;
    background-color: #000000;
    opacity: 0.8;
    color: #fff;
    width: 71vw;
}
& img{
    height:70px;
    width:70px;
    object-fit: contain;
}  @media(max-width: 500px) {
    margin-left: -20px;
    p {
        font-size:13px;
    }
}
`

const SongInfo = styled.div`
margin-left: 10px;
`
export {BodyContainer,HeaderContainer, HeaderLeft, 
    HeaderRight, Info, InfoText, Songs, Icons, SongRowContainer,SongInfo}