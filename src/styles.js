import { styled } from "styled-components";

export const Container= styled.div`
background: black;
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
width: 100px;
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

width: 400px;
display: flex;
flex-direction: column;
gap: 20px;
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
