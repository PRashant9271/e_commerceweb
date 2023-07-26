import styled from "styled-components";
import Navbar from "../Components/Navbar";
import Announcement from "../Components/Announcement";
import Newsletter from "../Components/Newsletter";
import Footer from "../Components/Footer";
import { Add, Remove } from "@mui/icons-material";
import { mobile } from "../responsive";

const Container = styled.div``;

const Wrapper = styled.div`
  padding: 20px;
  ${mobile({ padding: "10px" })}
  }
`;
const Tittle = styled.h1`
  font-weight: 300;
  text-align: center;
`;

const Top = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 20px;
`;

const TopButton = styled.button`
padding: 10px;
font-weight: 700
cursor: pointer;
border: ${(props) => props.type === "filled" && "none"};
background-color: ${(props) =>
  props.type === "filled" ? "black" : "transparent"};
color: ${(props) => props.type === "filled" && "white"};
`;
const TopTexts = styled.div`
${mobile({ display: "none" })}`;

const TopText = styled.span`
  text-decoration: underline;
  cursor: pointer;
  margin: 0px 10px;
 
  }
`;

const Bottom = styled.div`
  display: flex;
  justify-content: space-between;
    ${mobile({ flexDirection: "column" })}
  }
`;

const Info = styled.div`
  flex: 3;
`;

const Product = styled.div`
  display: flex;
  justify-content: space-between;
  ${mobile({ flexDirection: "column" })}
  }
`;
const ProductDetail = styled.div`
  flex: 2;
  display: flex;
`;
const Image = styled.img`
  width: 200px;
`;
const Details = styled.div`
  padding: 20px;
  display: flex;
  flex-direction: column;
  justify-content: space-around;
`;

const ProductName = styled.span``;

const ProductId = styled.span``;

const ProductColor = styled.div`
width: 20px;
height: 20px;
border-radius: 50%;
background-color: ${(props) => props.color};
`;

const ProductSize = styled.span``;

const PriceDetails = styled.div`
  flex: 1;
  display: flex;
  justify-content: center;
  align-items: center;
  flex-direction: column;

`;

const ProductAmountContainer=styled.div`
display: flex;
align-items: center;
margin-bottom: 20px;
`

const ProductAmount=styled.div`
font-size: 24px;
margin: 5px;
${mobile({ margin: "5px 15px" })}
}
`

const ProductPrice=styled.div`

font-size: 30px;
font-weight: 200;
${mobile({ marginBottom: "20px" })}
}
`
const Hr =styled.hr`
background-color : #eee;
border: none;
height: 2px;
`

const Summary = styled.div`
  flex: 1;
  border: 0.5px solid lightgray;
  border-radius: 10px;
  padding: 20px;
  height: 50vh;
`;

const SummaryTitle = styled.h1`
font-weight: 200;
`

const SummaryItem = styled.div`
margin: 30px 0px;
display: flex;
justify-content: space-between;
font-weight: ${props => props.type === "total" && "500"};
font-size: ${props => props.type === "total" && "24px"};
`

const SummaryItemText = styled.span``

const SummaryItemPrice = styled.span``

const Button = styled.button`
width: 100%;
padding: 10px;
background-color: black;
color: white;
font-weight: 600;
`


const Cart = () => {
  return (
    <Container>
      <Navbar />
      <br />
      <Announcement />
      <Wrapper>
        <Tittle> YOUR BAG </Tittle>
        <Top>
          <TopButton>CONTINUE SHOPPING</TopButton>
          <TopTexts>
            <TopText>Shopping Bag(2)</TopText>
            <TopText>Wishlist(0)</TopText>
          </TopTexts>
          <TopButton type="filled">CHECHOUT NOW </TopButton>
        </Top>
        <Bottom>
          <Info>
            <Product>
              <ProductDetail>
                <Image src="https://5.imimg.com/data5/ANDROID/Default/2022/4/EH/HS/GH/19051907/product-jpeg-1000x1000.jpg" />
                <Details>
                  <ProductName>
                    <b>Product:</b>ADDIDAS SHOES
                  </ProductName>
                  <ProductId>
                    <b>Id:</b> 868468377
                  </ProductId>
                  <ProductColor color="black" />
                  <ProductSize>
                    <b>Size:</b>38
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetails>
                <ProductAmountContainer>
                  <Add/>
                  <ProductAmount>1</ProductAmount>
                  <Remove/>
                </ProductAmountContainer>
                <ProductPrice>Rs 1800</ProductPrice>
              </PriceDetails>
            </Product>
            <Hr/>
            <Product>
              <ProductDetail>
                <Image src="data:image/jpeg;base64,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" />
                <Details>
                  <ProductName>
                    <b>Product:</b>AUSK T-Shirt
                  </ProductName>
                  <ProductId>
                    <b>Id:</b> 868468377
                  </ProductId>
                  <ProductColor color="darkblue" />
                  <ProductSize>
                    <b>Size:</b>M
                  </ProductSize>
                </Details>
              </ProductDetail>
              <PriceDetails>
                <ProductAmountContainer>
                  <Add/>
                  <ProductAmount>2</ProductAmount>
                  <Remove/>
                </ProductAmountContainer>
                <ProductPrice>Rs 1200</ProductPrice>
              </PriceDetails>
            </Product>
          </Info>
          <Summary>
            <SummaryTitle>ORDER SUMMARY</SummaryTitle>
            <SummaryItem>
              <SummaryItemText>Subtotal</SummaryItemText>
              <SummaryItemPrice>Rs 3000</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Estimated Shipping</SummaryItemText>
              <SummaryItemPrice>Rs 300</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem>
              <SummaryItemText>Shipping Discount</SummaryItemText>
              <SummaryItemPrice>Rs -300</SummaryItemPrice>
            </SummaryItem>
            <SummaryItem type="total">
              <SummaryItemText>Total</SummaryItemText>
              <SummaryItemPrice>Rs 3000</SummaryItemPrice>
            </SummaryItem>
            <Button>CHECKOUT NOW</Button>
          </Summary>
        </Bottom>
      </Wrapper>
      <Newsletter />
      <Footer />
    </Container>
  );
};

export default Cart;
