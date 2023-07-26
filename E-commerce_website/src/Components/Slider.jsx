import { ArrowLeftOutlined, ArrowRightOutlined } from "@mui/icons-material"
import { useState } from "react"
import styled from "styled-components"
import {SlideItems} from "../Data"
import { mobile } from "../responsive";

 
const Container=styled.div`
height: 100vh;
width: 100%;
display:flex;
// background-color: coral;
Position:relative;
margin-top:40px;
overflow: hidden;
${mobile({ display: "none" })}
}
`
const Arrow=styled.div`
height: 50px;
width: 50px;
background-color: white;
border-radius:50%;
display:flex;
align-items: center;
justify-content: center;
Position:Absolute;
top:0;
bottom:0;
left: ${props=> props.direction === "left" && "10px"};
right: ${props=> props.direction === "right" && "10px"};
margin:auto;
cursor: Pointer;
opacity:0.5;
z-index: 2;
`
const Wrapper = styled.div`
height:100%;
display: flex;
transition: all 1.5s ease;
transform: translateX(${(props) => props.SlideIndex * -100}vw);
`

const Slide=styled.div`
width: 100vw;
height: 100vh;
display:flex;
align-items: center;
background-color: #${props=>props.bg};
`
const ImgContainer=styled.div`
height: 100%;
flex: 1;
`
const Image=styled.img`
height: 80%;
`

const InfoContainer=styled.div`
flex: 1;
padding: 50px;
`
const Title=styled.h1`
font-size: 70px;
`
const Desc=styled.p`
margin: 50px 0px;
font-size: 20px;
font-weight: 500;
letter-spacing: 3px;
`
const Button=styled.button`
padding: 10px;
font-size: 20px;
background-color: transparent;
cursor: pointer;
`


const Slider = () => {
   const[SlideIndex, setSlideIndex]= useState(0);
  const handleclick=( direction )=>{
    if(direction=== "left") {
     setSlideIndex(SlideIndex > 0 ? SlideIndex -1 : 2);
     }else{
      setSlideIndex(SlideIndex < 2 ? SlideIndex +1 : 0);
     }
    };
  return (
    <Container>
      <Arrow direction="left" onClick={()=>handleclick("left")}>
        <ArrowLeftOutlined/>
      </Arrow>
      <Wrapper SlideIndex={SlideIndex}>
        {SlideItems.map((item)=>(
      <Slide bg={item.bg} key={item.id}>
      <ImgContainer>
      <Image src={item.img} />
      </ImgContainer>
      <InfoContainer>
      <Title>{item.title}</Title>
      <Desc>{item.desc}</Desc>
      <Button>SHOP NOW </Button>
      </InfoContainer>
      </Slide>
       ))}
      </Wrapper>
      <Arrow direction="right" onClick={()=>handleclick("right")}>
        <ArrowRightOutlined/>
      </Arrow>
    </Container>
  )
  
}

export default Slider
