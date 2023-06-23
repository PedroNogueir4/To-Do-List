import { styled } from "styled-components";
import { FcCheckmark } from "react-icons/fc";
import { FcEmptyTrash } from "react-icons/fc";

export const Container= styled.div`
background: linear-gradient(90deg, #383838 0% ,#000000 75%);
width: 100vw;
height: 100vh;

display: flex;
align-items: center;
justify-content: center;
`
export const Button= styled.button`
background: #8052EC;
border: none;
border-radius: 10px;
color: white;
width: 130px;
height: 30px;
cursor: pointer;

&:hover {
    opacity: 0.8;
  }
  &:active {
    opacity: 0.6;
  }
`
export const ContainerMain=styled.div`
background: white;
border-radius: 7px;
padding: 20px;

width: 60%;
display: flex;
flex-direction: column;
gap: 47px;
div{
    display: flex;
    gap: 15px;
    input{
        width: 70%;
        padding: 6px;
        outline: none;
        border: 1px solid #D1D3D4;
        border-radius: 4px;
    }
}
`
export const Itens=styled.div`
box-shadow: 1px 4px 10px 0px #00000033;
border-radius: 7px;
background: ${props=>props.isFinished ? '#E8FF8B' : '#E4E4E4'} ;
height: 45px;
display: flex;
align-items: center;
justify-content: space-between;

padding: 7px;

`
export const ContainerItens =styled.ul`
display:flex;
flex-direction: column;
gap: 20px;
`
export const Check =styled(FcCheckmark)`
cursor: pointer;
`
export const Delete =styled(FcEmptyTrash)`
cursor: pointer;
`