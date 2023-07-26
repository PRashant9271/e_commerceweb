import { Search, ShoppingCartOutlined } from "@mui/icons-material";
import { Badge } from "@mui/material";
import React from "react";
import styled from "styled-components"; 
import { Link } from "react-router-dom";
import {useSelector} from "react-redux"
import { mobile } from "../responsive";

const Container = styled.div`
  height: 60px;
    ${mobile({ height: "50px" })}
  }
`;

const Wrapper = styled.div`
  padding: 10px 20px;
  display: flex;
  align-items: center;
  justify-content: space-between;
    ${mobile({ padding: "10px 0px" })}
  }
  `;

const Left = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
`;
const Language = styled.span`
  font-size: 14px;
  cursor: Pointer;
    ${mobile({ display: "none" })}
  }
  `;

const SearchContainer = styled.div`
  border: 0.5px solid lightgray;
  display: flex;
  align-items: center;
  margin-left: 25px;
  padding: 5px;
`;

const Input = styled.input`
  border: none;
    ${mobile({ width: "50px" })}
  }
`;

const Logo = styled.h1`
  font-weight: bold;
  text-align: center;
    ${mobile({ fontSize: "24px" })}
  }
`;

const Center = styled.div`
  flex: 1;
 
  align-items: center;
  
`;
const Right = styled.div`
  flex: 1;
  display: flex;
  align-items: center;
  justify-content: flex-end;
    ${mobile({ flex: 2, justifyContent: "center" })}
  }
`;

const MenuItems = styled.div`
  font-size: 14px;
  cursor: pointer;
  margin-left: 25px;
    ${mobile({ fontSize: "12px", marginLeft: "10px" })}
  }
`;


const Navbar = () => {
  const quantity = useSelector(state=>state.cart.quantity)
  return (
    <Container>
      <Wrapper>
        <Left>
          <Language>EN</Language>
          <SearchContainer>
            <Input />
            <Search style={{color:"gray", fontSize:"16px"}}/>
          </SearchContainer>
        </Left>
        <Center>
          <Logo>Beginner's Store</Logo>
        </Center>
        <Right>
          <MenuItems><Link to = {`/Register `}> REGISTER </Link></MenuItems>
          <MenuItems><Link to = {`/Login `}>  SIGN IN </Link></MenuItems>
          <MenuItems>
            <Badge badgeContent={quantity} color="primary">
             <Link to= {`/Cart `}> <ShoppingCartOutlined/> </Link>
            </Badge>
          </MenuItems>
        </Right>
      </Wrapper>
    </Container>
  );
};

export default Navbar;
