import React from 'react';
import styled from "styled-components";
import Section from './Section';
import {items} from "../DataTest";
import Navbar from './Navbar';

function Home(props) {
    return (
        <Container>
            <Navbar />
            {items.map((item) => (
            <Section key={item.id} item={item}/>
                    ))}
        </Container>
    );
}


export default Home;

const Container = styled.div`
    height: 100vh;
`