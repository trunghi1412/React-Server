import React from 'react'
import { NavLink } from 'react-router-dom'
// import "./header.css"
// import { FaSearch, FaShoppingCart, FaUser } from 'react-icons/fa'
import styled from 'styled-components'
import Search from '@mui/icons-material/Search';
// import { Badge } from '@mui/material';
import ShoppingCartIcon from '@mui/icons-material/ShoppingCart'; 
// import { width } from '@mui/system';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';

const Container = styled.div`
    height: 60px;
    background-color: white;
`;

const Wrapper = styled.div`
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

  return (
    // <div>
    //   <div className='header'>

    //     <div className='logo'> <i>G6-FIG</i> </div>

    //     <nav className="navbar">
    //       <NavLink to='/homepage' onClick={this} className='home-btn'> Home </NavLink>
    //       <NavLink to='/intro' onClick={this} className='intro-btn'> Introduction </NavLink>
    //       <NavLink to='/cart' onClick={this} className='product-btn'> Product </NavLink>
    //       <NavLink to='/blog' onClick={this} className='blog-btn'> Blog </NavLink>
    //       {/* <NavLink to='/carts' onclick={this} className='about-btn'>Cart</NavLink> */}
    //       <NavLink to='/about' onclick={this} className='about-btn'>About</NavLink>
    //     </nav>

    //     <div className='icons'>

    //       <FaSearch className='icon-search' id='search-button' />
    //       <NavLink to='/carts' onclick={this} className='about-btn'><FaShoppingCart className='icon-cart' id='cart-button' /></NavLink>
    //       {/* <FaShoppingCart className='icon-cart' id='cart-button' /> */}

    //       <NavLink to='/login' onClick={this} ><FaUser className='icon-user' id='login-button' /></NavLink>
    //     </div>

    //     <form action="" className='search-something'>
    //       {/* <input type="search" id='search-box' placeholder='search figure...'/> */}

    //     </form>


    //   </div>

    // </div>
    <div>
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
                  <Person>
                    <NavLink to='/carts' onclick={this} className='about-btn'><ShoppingCartIcon id='cart-button' style={{color: "white", fontSize: 30, cursor: "pointer", padding: 1,}}/></NavLink>
                  </Person>
                </Right>
            </Wrapper>

        </Container>
    </div>


  )
}

export default Header