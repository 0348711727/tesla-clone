import React, {useState} from 'react';
import styled from "styled-components";

function BurgerNav({open, setOpen}) {
    return (
        <Burger open={open} onClick={()=>setOpen(!open)}>
            <div/>
            <div/>
            <div/>
        </Burger>
    );
}

export default BurgerNav;
const Burger = styled.button`
    position: relative;
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    width: 2rem;
    height: 2rem;
    background: transparent;
    border: none;
    cursor: pointer;
    padding: 0;
    z-index: 1000;
    div{
        width: 2rem;
        height: 0.25rem;
        background-color: black;
        border-radius: 10px;
        transition: all 0.5s linear;
        position: relative;
        transform-origin: 1px; 
    }
    div:first-child {
        transform: ${(child) => child.open ? 'rotate(45deg)' : 'rotate(0)'};//child truyền vào để gọi biến open ở trên
    }
    div:nth-child(2){
        opacity: ${(child) => child.open ?  '0': '1'};
        transform: ${(child) => child.open ? 'translateX(200px)': 'translateX(0)'};
    } 
    div:nth-child(3){
        transform: ${(child) => child.open ? 'rotate(-45deg)' : 'rotate(0)'}; 
    }
`