import React from 'react'
import styled from 'styled-components'
import KeyboardDoubleArrowLeftIcon from '@mui/icons-material/KeyboardDoubleArrowLeft';
import KeyboardDoubleArrowRightIcon from '@mui/icons-material/KeyboardDoubleArrowRight';

import { useState } from "react";
import FacebookOutlinedIcon from '@mui/icons-material/FacebookOutlined';
import InstagramIcon from '@mui/icons-material/Instagram';

import PhoneAndroidIcon from '@mui/icons-material/PhoneAndroid';
import { InforAbout } from './DataForAbout';

const Container = styled.div`
    width: 100%;
    height: 100vh;
    display: flex;
    position: relative;
    overflow: hidden;
`;

const Arrow = styled.div`
    width: 50px;
    height: 50px;
    background-color: #fff7f7;
    border-radius: 50%;
    display: flex;
    align-items: center;
    justify-content: center;
    position: absolute;
    top: 0;
    bottom: 0;
    margin: auto;
    left: ${props => props.direction === "left" && "10px"};
    right: ${props => props.direction === "right" && "10px"};
    cursor: pointer;
    opacity: 0.5;
    z-index: 2;
`;

const Wrapper = styled.div`
    height: 100%;
    display: flex;
    transform: translateX(${props => props.slideIndex * -100}vw);
    transition: all 1.5s ease;
`;

const Slide = styled.div`
    width: 100vw;
    height: 100vh;
    display: flex;
    align-items: center;
    background-color: #${props => props.background};
`;

const ImgContainer = styled.div`
    height: 100%;
    flex: 1;
    margin-right: 30px;
`;

const Image = styled.img`
    height: 80%;
    margin-left: 130px;
    margin-top: 40px;
    border-radius: 100px;
`;

const InforContainer = styled.div`
    flex: 1;
    padding: 50px;
`;

const Name = styled.h1`
    font-size: 55px;
`;

const Contact = styled.div`
    font-size: 40px;
    display: flex;
    align-items: center;
    margin-bottom: 20px;
`;


const ID = styled.p`
    margin: 50px 0px;
    font-size: 30px;
    font-weight: 500;
    letter-spacing: 3px;
`;


const SliderforAbout = () => {
    const [slideIndex, setSlideIndex] = useState(0);
    const handleClick = (direction) => {
        if (direction === "left") {
            setSlideIndex(slideIndex > 0 ? slideIndex - 1 : 3)
        }
        else {
            setSlideIndex(slideIndex < 3 ? slideIndex + 1 : 0);
        }
    };
    return (
        <Container>
            <Arrow direction="left" onClick={() => handleClick("left")}>
                <KeyboardDoubleArrowLeftIcon />
            </Arrow>
            <Wrapper slideIndex={slideIndex}>
                {InforAbout.map((item) => (


                    <Slide background={item.bg} key={item.id}>
                        <ImgContainer>
                            <Image src={item.img} />
                        </ImgContainer>
                        <InforContainer>
                            <Name>{item.name}</Name>
                            <ID>{item.id}</ID>
                            <Contact>
                                <FacebookOutlinedIcon style={{ fontSize: 40, cursor: "pointer", margin: 0 }} />
                                {item.fb}
                            </Contact>
                            <Contact>
                                <InstagramIcon style={{ fontSize: 40, cursor: "pointer", margin: 0 }} />
                                {item.ins}
                            </Contact>
                            <Contact>
                                <PhoneAndroidIcon style={{ fontSize: 40, cursor: "pointer", margin: 0 }} />
                                {item.phone}
                            </Contact>
                        </InforContainer>
                    </Slide>
                ))}
            </Wrapper>
            <Arrow direction="right" onClick={() => handleClick("right")}>
                <KeyboardDoubleArrowRightIcon />
            </Arrow>
        </Container>
    )
}

export default SliderforAbout
