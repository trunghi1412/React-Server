import React from 'react'
import styled from 'styled-components';
import { NavLink } from 'react-router-dom'



const Container = styled.div`
    flex: 1;
    margin: 3px;
    height: 70vh;
    position: relative;
`;

const Image = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
`;

const Information = styled.div`
    position: absolute;
    width: 100%;
    height: 100%;
    top: 0;
    left: 0;
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
`;

const Title = styled.h1`
    color: white;
    margin: 20px;
`;

// const Button = styled.button`
//     border: none;
//     padding: 10px;
//     background-color: white;
//     color: gray;
//     cursor: pointer;
//     font-weight: 600;
    
// `;

const Button1 = styled.button`
    padding: 10px;
    font-size: 20px;
    background-color: lightgray;
    cursor: pointer;
    border: none;
    border-radius: 20px;
    &:hover{background-color: white};
    margin-top: 200px;
`;


const CategoryItems = ({item}) => {
  return (
    <Container>
        <Image src={item.img}/>
        <Information>
            <Title>{item.title}</Title>
            <NavLink to='/cart' onClick={this} style={{ textDecoration: "none", color: "black", }}> <Button1>SHOP NOW</Button1></NavLink>
        </Information>
    </Container>
  )
}

export default CategoryItems
