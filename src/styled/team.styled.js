import styled, { keyframes } from "styled-components";
import { slideInUp, fadeInUp, fadeIn } from "react-animations";

const slideInUpAnimations = keyframes`${slideInUp}`
const fadeInUpAnimations = keyframes`${fadeInUp}`
const fadeInAnimations = keyframes`${fadeIn}`

export const Container = styled.div`
    height: 100vh;
    top: 0px;
`
export const Text = styled.p`
    text-align: center;
    .head {
        color: #FF7D44;
        font-weight: 700;
    }
    .title {
        font-size: 28px;
        font-weight: 700;
    }
`
export const Card = styled.div`
display: flex;
flex-direction: row;
justify-content: space-evenly;
align-self: center;
animation: 1s ${slideInUpAnimations};
    @media (max-width: 768px) {
        display: flex;
        flex-direction: column;
    }
    `
export const CardImage = styled.div`
    position: relative;
    box-shadow: rgba(0, 0, 0, 0.2) 0px 18px 50px -10px;
    border-radius: 10px;
    margin: 20px 0px 20px 0px;
    .image{
        // width: 100%;
        border-radius: 10px;
    }
    @media (max-width: 768px) {
        margin: 20px 10px 20px 10px;
        .image {
            width: 100%;
        }
     }
`
export const Icons = styled.i`
    display: none;
    .icon {
        border: 0.5px solid #E3E3E3;
        padding: 5px;
        border-radius: 5px
    }
`

export const CardDetails = styled.div`
    background-color: white;
    position: absolute;
    height: 150px;
    bottom: 0;
    width: 100%;
    box-sizing: border-box;
    padding: 0px 20px 0px 20px;
    animation: 1s ${fadeInAnimations};
    border-bottom-left-radius: 10px;
    border-bottom-right-radius: 10px;

    &:hover {
        transition: height 0.5s;
        height: 180px;
        ${Icons} {
            display: inline;
            animation: 0.8s ${fadeInUpAnimations};
            display:flex;
            width: 50%;
            justify-content: space-around;
        }
    }
`
export const Name = styled.p`
    font-size: 24px;
    font-weight: bold;
    `
export const Position = styled.p`
    font-size: 17px;
    color: #FF7D44;
    font-weight: 500;

`