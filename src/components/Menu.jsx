import React from 'react';
import styled from "styled-components";
import {selectItems} from "../features/item/itemSlice";
import {useSelector} from "react-redux";

function Menu({open}) {
    const items = useSelector(selectItems);
    return (
        <MenuNav open={open}>
            {items && items.map((item, index) =>(                
                <p  key={index}>{item}</p>
                // <a  key={index}>{item}</a>
            ))}
        </MenuNav>
    );
}

export default Menu;
const MenuNav = styled.nav`
    display: flex;
    flex-direction: column;
    justify-content: center;
    height: 100vh;
    max-width: 30vw;
    text-align: right;
    background-color: #cedbe3;
    padding: 2rem;
    position: absolute;
    top: -70px;
    right: -32px;
    text-align: center;
    justify-content: flex-start;
    transition: transform 0.3s ease-in-out;
    transform: ${(p) => p.open ? 'translate(0)' : 'translate(100%)' };
    z-index: 20;
    @media(max-width: 768px){
        max-width: 27vw;
    }
    p{ ----------thay toàn bộ thẻ a thành p để deploy thử vì <a> deploy bị lỗi------------------------------
        font-size: 0.75rem;
        text-transform: uppercase;
        padding: 1rem 0;
        font-weight: bold;
        letter-spacing: 0.5rem;
        transition: color 0.3s linear;
        &:hover{
            background-color: #d4d8dd;
            border-radius: 20px;
            width: 100%;
        }
    }
    // a{
    //     font-size: 0.75rem;
    //     text-transform: uppercase;
    //     padding: 1rem 0;
    //     font-weight: bold;
    //     letter-spacing: 0.5rem;
    //     transition: color 0.3s linear;
    //     &:hover{
    //         background-color: #d4d8dd;
    //         border-radius: 20px;
    //         width: 100%;
    //     }
    // }
`