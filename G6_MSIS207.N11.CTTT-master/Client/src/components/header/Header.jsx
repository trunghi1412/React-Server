import React from 'react'
import { NavLink } from 'react-router-dom'
// import "../header/header.css"
// import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import styled from 'styled-components'
import Search from '@mui/icons-material/Search';
import { Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; 
// import { width } from '@mui/system';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { useCart } from 'react-use-cart'

const Container = styled.div`
    height: 60px;
    width: 1499px;
    background-color: white;
`;

const Wrapper = styled.div`
    margin-bottom: 10px;
    padding: 10px 20px;
    display: flex;
    justify-content: space-between;
    align-items: center;
`;

const Left = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
`;

const Languge = styled.span`
    font-size: 14px;
    cursor: pointer;
    margin-right: 20px;
    font-weight: 300;
`;



const SearchContainer = styled.button`
    display: flex;
    justify-content: center;
    background-color: black;   
    border-radius: 5px;
    // &:hover{background-color: lightgray};
`;


const Right = styled.div`
    flex: 1;
    display: flex;
    align-items: center;
    justify-content: flex-end;
`;

// const MenuItem = styled.div`
//     fontsize: 14px;
//     cursor: pointer;
//     margin-left: 25px;
// `;

const Center = styled.div`
    // flex: 1;
    text-align: center;
`;

// const Logo = styled.h3`
//     font-weight: bold;
// `;

const Nav = styled.span`
    font-size: 20px;
    margin: 0 16px;
    color: white;
    cursor: pointer;    
`;

const Person = styled.button`
  display: flex;
  justify-content: center;
  background-color: black;   
  border-radius: 5px;
  // margin: 5px;
  margin: 0 10px 0 5px;
`;

const Header = () => {
  const { totalItems } = useCart(); 

  return (
    <div>
      <header>
      <Container>
            <Wrapper>
                <Left>
                    <Languge>
                        <i>Welcome</i>
                    </Languge>
                    <SearchContainer>
                        
                        <Search style={{color: "white", fontSize: 30, cursor: "pointer"}}/>
                    </SearchContainer>
                </Left>
                <Center>
                  <Nav>
                    <NavLink to='/homepage' onClick={this} style={{ textDecoration: "none", color: "black"}} > Home </NavLink>
                  </Nav>
                  <Nav>
                    <NavLink to='/intro' onClick={this} style={{ textDecoration: "none", color: "black"}}> Introduction </NavLink>
                  </Nav>
                  <Nav>
                    <NavLink to='/cart' onClick={this} style={{ textDecoration: "none", color: "black"}}> Product </NavLink>
                  </Nav>
                  <Nav>
                    <NavLink to='/blog' onClick={this} style={{ textDecoration: "none", color: "black"}}> Blog </NavLink>
                  </Nav>
                  <Nav>
                    <NavLink to='/about' onclick={this} style={{ textDecoration: "none", color: "black"}}>About</NavLink>
                  </Nav>
                </Center>
                <Right>
                  <Person>
                    <NavLink to='/login' onClick={this} ><AccountCircleIcon id='login-button' style={{color: "white", fontSize: 30, cursor: "pointer", padding: 1,}}/></NavLink>
                  </Person>

                  {/* Porcess full function for cart (add, remove, decrease, increase item) */}
                  <Person>            
                    <NavLink to='/carts' onclick={this} className='about-btn'>
                      <Badge badgeContent={totalItems} color="secondary" >
                        <ShoppingCartIcon id='cart-button' style={{color: "white", fontSize: 30, cursor: "pointer", padding: 1,}}/>
                      </Badge>
                    </NavLink>                                                      
                  </Person> 

                </Right>
            </Wrapper>
        </Container>
        </header>
    </div>


  )
}

export default Header