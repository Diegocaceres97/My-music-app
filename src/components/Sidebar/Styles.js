import styled from 'styled-components';

const SidebarContainer = styled.div`
flex: 0.2;
background-color:#000;
min-width: 240px;
color: white;
& img{
    height:70px;
    padding:10px;
    margin-right: auto;
    cursor:pointer;
}
& hr{
border: 1px solid gray;
width:90%;
margin: 10px auto;
} & a {
    text-decoration:none;
}  @media(max-width: 500px) {
    min-width: 120px;
    & img{
    height:70px;
    padding-left:0px;
    margin-right: auto;
    width: 120px;
}
}
`

const PlayList = styled.div`
margin: 5px 10px;
`
const Choices = styled.div`
display: flex;
align-items: center;
color: gray;
height:40px;
cursor: pointer;
transition: 300ms color ease-in;
margin-left: 15px;
&:hover{
    color: white;
}& h5{
    margin: 10px 0 0 10px;
}  @media(max-width: 500px) {
   h5 {
      margin-left : 5px;
   }
}
`


export {SidebarContainer, PlayList, Choices} 
