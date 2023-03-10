import React from 'react'
import { Link } from 'react-router-dom';
import styled from 'styled-components'



const Container = styled.div`
width: ${(props)=>props.type !== "sm" ? "250px" : "360px"};
margin-bottom: ${(props)=>props.type === "sm" ? "20px" : "10px"};
cursor: pointer;
display: ${(props)=>props.type === "sm" && "flex"};
gap: 10px;
`;

/*
margin-bottom: for margin diff
*/

const Image = styled.img`
width: ${(props)=>props.type === "sm" ? "200px" : "100%"};
height: ${(props)=>props.type === "sm" ? "120px" : "100%"};
margin-bottom: ${(props)=>props.type === "sm" ? "none" : "-135px"};
background-color: #999;
felx: 1;
`;

/*
width will be 100% for the side ways
height: 202px the number is taken from youtube height
.img file is choosen to put image and it's block in the area
flex display is used as a flexible data structure
*/

const Details = styled.div`
display: flex;
margin-top: ${(props)=>props.type !== "sm" ? "150px" : "5px"};
gap: 15px;
flex: 1;
`;

/*
gap betweem image and the text
It is used to show the details of the video
*/

const ChannelImage = styled.img`
width: 40px;
height: 40px;
border-radius: 50%;
background-color: #999;
display: ${(props)=>props.type === "sm" ? "none" : "100%"};

`;

/*
border-radius: for the circle 
*/

const Texts = styled.div`

`;
// for text style
const Title = styled.h1`
margin-top: -2px;
font-size: 16px;
font-weight:5000;
margin-bottom: -5px;
color: ${({theme})=>theme.text};
`;
// for setting up title
const ChannelName = styled.h2`
font-size: 11px;

color: ${({theme})=>theme.textSoft};
margin: 9px 0px;
`;
// for channel name
const Info = styled.div`
margin-top: -5px;
font-size: 11px;
color: ${({theme})=>theme.textSoft};
`;
// for channel information

const Card = ({type}) => {
  return (
    <Link to="/video/test" style={{textDecoration:"none"}}>
    <Container type={type}>
      <Image type={type} src="data:image/jpeg;base64,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"/>
    <Details type={type}>
      <ChannelImage type={type} src="data:image/jpeg;base64,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"/>
      <Texts>
        <Title> Test Video</Title>
        <ChannelName>
          Youtube Clone
        </ChannelName>
        <Info>
          100,002 views * 1 day ago
        </Info>
      </Texts>
    </Details>
    </Container>
    </Link>
  )
}

/*
Prop function is used in Card as in normal Card file it is shown in horizontal but in recommendation bar it should be in vertical
*/

/*
We have taken image src i.e. image source any
for channel image also we will take image source any
<Link/> We have created a link that will take us to the actual video
*/

export default Card