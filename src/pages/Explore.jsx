import React from 'react'
import styled from 'styled-components'
import { Link } from 'react-router-dom';
import WhatshotIcon from '@mui/icons-material/Whatshot';
import AudiotrackIcon from '@mui/icons-material/Audiotrack';
import TheatersIcon from '@mui/icons-material/Theaters';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import SportsIcon from '@mui/icons-material/Sports';
import SchoolIcon from '@mui/icons-material/School';
import CheckroomIcon from '@mui/icons-material/Checkroom';

const Container = styled.div`
display: flex; 
gap: 24px;
`;

const Container2 = styled.div`
display: flex;
justify-content: space-between;
flex-wrap: wrap;
margin: 10px;
padding: 0.5em;
width: 100%;
`;

const Main = styled.div`
display: flex;
gap: 10px;
margin: 30px 0px;
border-radius: 10px;
border-style: solid;
height: 100px;
padding: 0px 20px;
width: 100%;
display: flex;
flex-direction: column;
align-items: flex-start;
margin-left: -2px;
margin-bottom: 1px;
align-items: center;
margin-top: 5px;
`;

const Title = styled.h1`
font-size: 20px;
font-weight: 400;
color: ${({theme})=>theme.text};
font-weight: 500; 
margin-top: -5px; 
margin-left: 5px;
align-items: center;
`;

const Logo = styled.button`
padding: 5px 15px;
background-color: transparent;
font-weight: 500;
cursor: pointer;
display: flex;
align-items: center;
gap: 5px;
border: none;
margin-top: 10px;
color: red;
`;
const Logo2 = styled.button`
padding: 5px 15px;
background-color: transparent;
font-weight: 500;
cursor: pointer;
display: flex;
align-items: center;
gap: 5px;
border: none;
margin-top: 10px;
color: yellow;
`;
const Logo3 = styled.button`
padding: 5px 15px;
background-color: transparent;
font-weight: 500;
cursor: pointer;
display: flex;
align-items: center;
gap: 5px;
border: none;
margin-top: 10px;
color: purple;
`;
const Logo4 = styled.button`
padding: 5px 15px;
background-color: transparent;
font-weight: 500;
cursor: pointer;
display: flex;
align-items: center;
gap: 5px;
border: none;
margin-top: 10px;
color: green;
`;
const Logo9 = styled.button`
padding: 5px 15px;
background-color: transparent;
font-weight: 500;
cursor: pointer;
display: flex;
align-items: center;
gap: 5px;
border: none;
margin-top: 10px;
color: blue;
`;
const Logo5 = styled.button`
padding: 5px 15px;
background-color: transparent;
font-weight: 500;
cursor: pointer;
display: flex;
align-items: center;
gap: 5px;
border: none;
margin-top: 10px;
color: orange;
`;
const Logo6 = styled.button`
padding: 5px 15px;
background-color: transparent;
font-weight: 500;
cursor: pointer;
display: flex;
align-items: center;
gap: 5px;
border: none;
margin-top: 10px;
color: #ADD8E6;
`;
const Logo7 = styled.button`
padding: 5px 15px;
background-color: transparent;
font-weight: 500;
cursor: pointer;
display: flex;
align-items: center;
gap: 5px;
border: none;
margin-top: 10px;
color: #90EE90;
`;
const Logo8 = styled.button`
padding: 5px 15px;
background-color: transparent;
font-weight: 500;
cursor: pointer;
display: flex;
align-items: center;
gap: 5px;
border: none;
margin-top: 10px;
color: pink;
`;

const Trending = styled.div`
color: ${({theme})=>theme.text};
position: sticky;
background-color: ${({theme})=>theme.bg};
`;



const Explore = () => {
  return (
    <Container>
      <Link to="/Menu/Home" style={{textDecoration:"none" , color: "inherit"}} >
      <Container2>
      
      <Main>
      <Logo>
      <WhatshotIcon fontSize="large"  />
        </Logo>
        <Trending>
          <Title>     
        Trending
        </Title>
        
        </Trending>
      </Main>
      
      <Main>
      <Logo2>
      <AudiotrackIcon fontSize="large"  />
        </Logo2>
        <Trending>
          <Title>     
        Music
        </Title>
        </Trending>
      </Main>
       <Main>
      <Logo3>
      <TheatersIcon fontSize="large"  />
        </Logo3>
        <Trending>
          <Title>     
        Movies
        </Title>
        </Trending>
      </Main>
      <Main>
      <Logo4>
      <LiveTvIcon fontSize="large"  />
        </Logo4>
        <Trending>
          <Title>     
        Live
        </Title>
        </Trending>
      </Main>
      <Main>
      <Logo5>
      <SportsEsportsIcon fontSize="large"  />
        </Logo5>
        <Trending>
          <Title>     
        Gaming
        </Title>
        </Trending>
      </Main>
      <Main>
      <Logo6>
      <NewspaperIcon fontSize="large"  />
        </Logo6>
        <Trending>
          <Title>     
        News
        </Title>
        </Trending>
      </Main>
      <Main>
      <Logo7>
      <SchoolIcon fontSize="large"  />
        </Logo7>
        <Trending>
          <Title>     
        Learning
        </Title>
        </Trending>
      </Main>
      <Main>
      <Logo8>
      <CheckroomIcon fontSize="large"  />
        </Logo8>
        <Trending>
          <Title>     
        Fashion
        </Title>
        </Trending>
      </Main>
      <Main>
      <Logo9>
      <SportsIcon fontSize="large"  />
        </Logo9>
        <Trending>
          <Title>     
        Sports
        </Title>
        </Trending>
      </Main>
      </Container2>   
      </Link>     
    </Container>
  )
}

export default Explore