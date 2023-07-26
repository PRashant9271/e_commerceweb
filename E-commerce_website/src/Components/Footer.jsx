import { FacebookOutlined, Instagram, LocationOnOutlined, MailOutline, Phone, Twitter } from "@mui/icons-material";
import styled from "styled-components";
import { mobile } from "../responsive";


const Container=styled.div`
display: flex;
flex-dierction: column;
  ${mobile({ flexDirection: "column" })}
}
`
const Left=styled.div`
flex:1;
padding: 20px;
`
const Logo=styled.h1``
const Desc=styled.p`
margin: 20px 0px;
`
const SocialContainer=styled.div`
display: flex;
`
const SocialIcon=styled.div`
width: 40px;
height: 40px;
border-radius: 50%;
color: white;
background-color: #${props=> props.color};
display: flex;
align-items: center;
justify-content: center;
margin-right: 20px;
`

const Center=styled.div`
flex:1;
padding: 20px;
  ${mobile({ display: "none" })}
}
`

const Title=styled.h3`
margin-bottom: 30px;
`
const List=styled.ul`
margin: 0px;
padding: 0px;
list-style: none;
display:flex;
flex-wrap: wrap;
`
const ListItem=styled.li`
width: 50%;
margin-bottom: 10px;
`

const Right=styled.div`
flex:1;
padding: 20px;
  ${mobile({ backgroundColor: "#fff8f8" })}
}
`
const ContactItem=styled.div`
margin-bottom: 20px;
display: flex;
align-items: center;
`

const Payment=styled.img`
width: 40%;
`

function Footer() {
  return (
    <Container>
     <Left>
     <Logo>Shopper's Stop</Logo>
     <Desc>There are many variation's of every Item and we don't Compromise with the quality of item.
        Quality is Our first Priority. </Desc>
        <SocialContainer>
            <SocialIcon color="3B5999">
              <FacebookOutlined/>
            </SocialIcon>
            <SocialIcon color="E4405F">
              <Instagram/>
            </SocialIcon>
            <SocialIcon color="55ACEE">
              <Twitter/>
            </SocialIcon>
        </SocialContainer>
     </Left>
     <Center>
        <Title>Useful Links</Title>
        <List>
        <ListItem>Home </ListItem>
        <ListItem>Cart</ListItem>
        <ListItem>Fashion</ListItem>
        <ListItem>Accessories</ListItem>
        <ListItem>My account</ListItem>
        <ListItem>Order Tracking</ListItem>
        <ListItem>Wishlist</ListItem>
        <ListItem>Terms</ListItem>
        </List>
     </Center>
     <Right>
     <Title>Contact</Title>
     <ContactItem>
        <LocationOnOutlined style={{marginRight: "10px"}}/>Sec-18 DLF Mall Noida,UttarPradesh 
     </ContactItem>
     <ContactItem>
        <Phone style={{marginRight: "10px"}}/>+91-665542
     </ContactItem>
     <ContactItem>
        <MailOutline style={{marginRight: "10px"}}/>Contact@Shopper'sStop
     </ContactItem>
     <Payment src="https://www.nfcw.com/wp-content/uploads/2019/10/amex-visa-mastercard-disover.jpg.webp"/>
     </Right>
    </Container>
  )
}

export default Footer