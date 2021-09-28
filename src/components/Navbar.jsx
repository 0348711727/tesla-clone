import React, { useRef, useState } from 'react';
import styled from "styled-components";
import "../css/styleNav.css";
import SelectMenu from './SelectMenu';
import BurgerNav from './BurgerNav';
import { useOnclickOutside } from './HandleMenuClickOutside';
import {selectItems} from "../features/item/itemSlice";
import {useSelector} from "react-redux";

function Navbar(props) {
    const [open, setOpen] = useState(false);
    const node = useRef();
    useOnclickOutside(node, ()=>setOpen(false));
    const items = useSelector(selectItems)//goi item tu global state
    const newItems = useSelector(state => state.item)// items & newItems giong nhau
    console.log(newItems)
    return (
        <Container>
            <a href="#">
                <img src="./images/logo.png" alt="" style={{width: "10em"}}/>
            </a>
            <Menu>
                {items && items.map((item, index) =>(
                    
                <a href="#" key={index}>{item}</a>
                    ))}
            </Menu>
            <div ref={node} className="rightMenu" style={{display: "flex"}}>
                <RightMenu>
                    <a href="#">Shop</a>
                    <a href="#">Account</a>
                </RightMenu>
                <BurgerNav refs={node} open={open} setOpen={setOpen} />
            </div>
            <SelectMenu refs={node} open={open} setOpen={setOpen}/>
        </Container>
    );
}

export default Navbar;

const Container = styled.div`
    height: 4em;
    width: 100%;
    position: fixed;
    display: flex;
    align-items: center;
    padding: 0 2em;
    justify-content: space-between;
`
const Menu = styled.div`
    display: flex;
    align-items: center;
    a{
        font-weight: 550;
        font-size: 14.5px;
        padding: 0 1em;
    }
    @media(max-width: 768px){
            display: none;
    }
`
const RightMenu = styled(Menu)`
    position: relative;
    z-index: 30;
    a{
        font-weight: 550;
        font-size: 14.5px;
        padding: 0 1em;
    }
    @media(max-width: 768px){
        display: flex;
}
`
