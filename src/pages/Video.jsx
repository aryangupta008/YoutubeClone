import React from 'react'
import styled from 'styled-components'
import ThumbUpIcon from '@mui/icons-material/ThumbUp';
import ThumbDownIcon from '@mui/icons-material/ThumbDown';
import ShareIcon from '@mui/icons-material/Share';
import VolunteerActivismIcon from '@mui/icons-material/VolunteerActivism';
import ContentCutIcon from '@mui/icons-material/ContentCut';
import LibraryAddIcon from '@mui/icons-material/LibraryAdd';
import MoreHorizIcon from '@mui/icons-material/MoreHoriz';
import Comments from '../Components/Comments';
import Card from '../Components/Card'

const Container = styled.div
`
display: flex; 
gap: 24px;

`;

/*
display: flex for making horizontal container
gap for giving some gap between them
*/

const Content = styled.div
`
flex: 5;
`;
const Recommendation = styled.div
`
flex: 2;
`;

const VideWrapper = styled.div`

`;
const Title = styled.h1`
font-size: 18px;
font-weight: 400;
margin-top: 20px;
margin-bottom: 10px;
color: ${({theme})=>theme.text};
`;
const Details = styled.div`
display: flex;
align-items: center;
justify-content: space-between;
`;
const Info = styled.span`
color: ${({theme})=>theme.textSoft};
`;
const Buttons = styled.div`
display: flex;
gap: 20px;
color: ${({theme})=>theme.text};
`;
const Button = styled.div`
display: flex;
align-items: center;
gap: 5px;
cursor: pointer;
`;

const Hr = styled.hr`

margin: 15px 0px;
border: 0.5px solid ${({theme})=>theme.soft};

`;
 
// for the seperation line

const Channel = styled.div`
display: flex;
justify-content: space-between;
`;

const ChannelInfo = styled.div`
display: flex;
gap: 20px;

`;

const Image = styled.img`
width: 50px;
height: 50px;
border-radius:50%;
padding: 1px 0px;
`;

const ChannelDetails = styled.div`
display: flex;
flex-direction: column;
color: ${({theme})=>theme.text};

`;
const ChannelName = styled.span`
font-weight: 500;
`;
const ChannelCounter = styled.span`
margin-top: 2px;
margin-bottom: 10px;
color: ${({theme})=>theme.textSoft};
font-size: 13px;

`;
const Description = styled.p`
font-size: 14px; 
`;
const Subscribe = styled.button`
background-color: red;
font-weight: 500;
color: white;
border: none;
border-radius: 3px;
height: max-content;
padding: 10px 20px;
cursor: pointer;
`;

const Video = () => {
  return (
    <Container>
      <Content> 
      <VideWrapper>
      <iframe
            width="100%"
            height="720"
            src="https://www.youtube.com/embed/k3Vfj-e1Ma4"
            title="YouTube video player"
            frameborder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
            allowfullscreen
          ></iframe>
      </VideWrapper>  
      <Title>
        Test Video
      </Title>
      <Details>
        <Info>724678 views * jan 22, 2022</Info>
        <Buttons>
          <Button>
            <ThumbUpIcon/> 12 
          </Button>
          <Button>
           <ThumbDownIcon/> 23
          </Button>
          <Button>
           <ShareIcon/> Share
          </Button>
          <Button>
           <VolunteerActivismIcon/> THANKS
          </Button>
          <Button>
           <ContentCutIcon/> CLIP
          </Button>
          <Button>
           <LibraryAddIcon/> SAVE
          </Button>
          <Button>
           <MoreHorizIcon/>
          </Button>
        </Buttons>
      </Details>
      <Hr/>

      <Channel>
        <ChannelInfo>
          <Image src="https://upload.wikimedia.org/wikipedia/commons/thumb/b/b6/Image_created_with_a_mobile_phone.png/800px-Image_created_with_a_mobile_phone.png"/>
          <ChannelDetails>
            <ChannelName>
              CLONE
            </ChannelName>
            <ChannelCounter>
              30921290 subscribers
            </ChannelCounter>
            <Description>
              Lorem, ipsum dolor sit amet consectetur adipisicing elit. Quidem libero odit rem expedita voluptatem, cumque praesentium quas eum, dolor iure ducimus sequi error! Magni rem nostrum quam neque adipisci nisi.

            </Description>
          </ChannelDetails>
        </ChannelInfo>
        <Subscribe>Subscribe</Subscribe>
      </Channel>
      <Hr/>
      <Comments></Comments>
       </Content>
      <Recommendation> 
      <Card type="sm"></Card> 
      <Card type="sm"></Card> 
      <Card type="sm"></Card>  
      <Card type="sm"></Card>  
      <Card type="sm"></Card>  
      <Card type="sm"></Card> 
      <Card type="sm"></Card> 
      <Card type="sm"></Card>  
      <Card type="sm"></Card>  
      <Card type="sm"></Card>  
      </Recommendation>
    </Container>
  )
}
/*
Prop function is used in Card as in normal Card file it is shown in horizontal but in recommendation bar it should be in vertical
*/
export default Video