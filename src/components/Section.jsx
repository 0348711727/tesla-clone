import React from 'react';
import styled from "styled-components";

function Section({item}) {
    return (
        <Wrap style={{backgroundImage: `url(${item.bgImg})` }} >
            <ItemText>
                <h1>{item.title}</h1>
                <p>{item.description}</p>
            </ItemText>
            <Buttons>
                <ButtonGroup>
                    <LeftButton>
                       {item.leftBtnText}
                    </LeftButton>
                    {item.rightBtnText 
                    ? 
                    (<RightButton>
                        {item.rightBtnText}
                    </RightButton>)
                    : ""
                    }

                </ButtonGroup>
                <DownArrow src="/images/down-arrow.png" />
            </Buttons>
        </Wrap>
    );
}

export default Section;

const Wrap = styled.div`
    width: 100vw;
    height: 100vh;
    background-size: cover;
    background-position: center;
    background-repeat: no-repeat;
    // background-image: url('/images/model-3_2.jfif');
    display: flex;
    flex-direction: column;
    justify-content: space-between;
    align-items: center;

`
const ItemText = styled.div`
    padding-top: 15vh;
    text-align: center;
`
const ButtonGroup = styled.div`
    display: flex;
    margin-bottom: 30px;
    @media(max-width: 768px){
        flex-direction: column;
    }
`
const LeftButton = styled.div`
    border-radius: 20px;
    background-color: rgba(23, 26, 32, 0.8);
    height: 40px;
    width:  256px;
    color: white;
    display: flex;
    justify-content: center;
    align-items: center;
    opacity: 0.85;
    text-transform: uppercase;
    font-size: 12px;
    cursor: pointer;
    margin: 5px;
`
const Buttons = styled.div`

`
const RightButton = styled(LeftButton)`
    background-color: white;
    opacity: 0.65;
    color: black;
`
const DownArrow = styled.img`
    height: 40px;
    cursor: pointer;
    overflow-x: hidden;
    animation: animationDown infinite 1.5s;
`