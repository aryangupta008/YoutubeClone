
import React from 'react'
import styled from 'styled-components'
import YoutubeClone from "../Logo/logo.png"
import HomeIcon from '@mui/icons-material/Home';
import ExploreIcon from '@mui/icons-material/Explore';
import SubscriptionsIcon from '@mui/icons-material/Subscriptions';
import VideoLibraryIcon from '@mui/icons-material/VideoLibrary';
import HistoryIcon from '@mui/icons-material/History';
import LibraryMusicIcon from '@mui/icons-material/LibraryMusic';
import SportsBasketballIcon from '@mui/icons-material/SportsBasketball';
import SportsEsportsIcon from '@mui/icons-material/SportsEsports';
import TheatersIcon from '@mui/icons-material/Theaters';
import NewspaperIcon from '@mui/icons-material/Newspaper';
import LiveTvIcon from '@mui/icons-material/LiveTv';
import SettingsIcon from '@mui/icons-material/Settings';
import ReportIcon from '@mui/icons-material/Report';
import HelpIcon from '@mui/icons-material/Help';
import SettingsBrightnessIcon from '@mui/icons-material/SettingsBrightness';
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
import { Link } from 'react-router-dom';

const Container = styled.div`
flex:1;
background-color: ${({theme})=>theme.bgLighter};
height : 150vh;
color: ${({theme})=>theme.text};
font-size: 15px;
position: sticky;
top: 0;

`;
const Wrapper = styled.div`
padding: 18px 26px;

`;
const Logo = styled.div`
display:flex;
align-tems: center;
font-weight: 1000;
margin-bottom: 1px;
`;

const Img =styled.img`
height: 50px;

`;

const Item = styled.div`
display: flex;
align-items: center;
gap: 20px;
cursor: Pointer;
padding: 7.5px 0px;
&:hover {
    background-color: ${({ theme }) => theme.soft};
  };
`;
const Hr = styled.hr`
margin: 15px 0px;
border: 0.5px solid  ${({theme})=>theme.soft};
`;

const Login =styled.div``;
const Button = styled.button`
padding: 5px 15px;
background-color: transparent;
border: 1px solid #3ea6ff;
color: #3ea6ff;
border-radius: 3px;
font-weight: 500;
margin-top: 10px;
cursor: pointer;
display: flex;
align-items: center;
gap: 5px;

`;

const Title2 = styled.h1`
margin-top: 7px;

`

const Title = styled.h2`
font-size:20px;
font-weight:500;
colout: #aaaaa;
margin-bottom: 20px;
`


const Menu = ({ darkMode, setDarkMode }) => {
  return (
    <Container>
        <Wrapper>
        <Link to="/" style={{textDecoration:"none" , color: "inherit"}}>
            
            <Logo>
               <Img src={YoutubeClone} />
               <Title2>
               Youtube
               </Title2>
             
            </Logo>
            <Item>
                <HomeIcon/>
            Home
            </Item>
            </Link>
            <Link to="explore" style={{textDecoration : "none" , color: "inherit"}}>
            <Item>
                <ExploreIcon/>
            Explore
            </Item>
            </Link>
            <Item>
                <SubscriptionsIcon/>
            Subscriptions
            </Item>
            <Hr/>
            <Item>
                <VideoLibraryIcon/>
            Library
            </Item>
            <Item>
                <HistoryIcon/>
            History
            </Item>
            <Hr/>
            <Login>
                Sign in to like videos, comment and subscribe.  
                <Link to="signin" style={{textDecoration : "none"}}>
                <Button>
                 
                
                  <AccountCircleIcon></AccountCircleIcon>
                  Sign in
                </Button>
                </Link>     
            </Login>
            
            <Hr/>
            <Title>
                Explore
            </Title>
            <Item>
                <LibraryMusicIcon/>
            Music
            </Item>
            <Item>
                <SportsBasketballIcon/>
            Sports
            </Item>
            <Item>
                <SportsEsportsIcon/>
            Games
            </Item>
            <Item>
                <TheatersIcon/>
            Movie
            </Item>
            <Item>
                <NewspaperIcon/>
            News
            </Item>
            <Item>
                <LiveTvIcon/>
            Live
            </Item>
            <Hr/>
            <Item>
                <SettingsIcon/>
            Settings
            </Item>
            <Item>
                <ReportIcon/>
            Report
            </Item>
            <Item>
                <HelpIcon/>
            Help
            </Item>
            <Item onClick={() => setDarkMode(!darkMode)}>
          <SettingsBrightnessIcon/>
          {darkMode ? "Light" : "Dark"} Mode
        </Item>
        
        </Wrapper>
    </Container>
  )
}

/*

Colour Inherit means that it will inherit it's original colour in the link tag
textDecoration means that it will change the text eg. earlier text was underlined

*/

export default Menu;