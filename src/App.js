import { useState } from 'react';
import styled, { ThemeProvider } from 'styled-components';
import './App.css';
import Menu from './Components/Menu';
import Navbar from './Components/Navbar';
import {darkTheme,lightTheme} from "./Utils/Theme";
import {
  BrowserRouter,
  Routes,
  Route,
} from "react-router-dom"
import Home from "./pages/Home";
import Video from './pages/Video';
import SignIn from './pages/SignIn';
import Explore from './pages/Explore';

const Container = styled.div`
 display: flex;
 `

 const Main=styled.div`
flex:7;
background-color: ${({theme})=>theme.bg};
 `
 const Wrapper=styled.div`
 padding: 12px 20px;
 `
function App() {
  const [darkMode, setDarkMode] = useState(true);
  return (
    <ThemeProvider theme={darkMode ? darkTheme : lightTheme}>

   
    <Container>
      <BrowserRouter>
      
      <Menu darkMode={darkMode} setDarkMode={setDarkMode}/>
      <Main>

      
      <Navbar/>
      <Wrapper>
       <Routes>
        <Route path="/">
          <Route index element ={<Home/>}/>
          <Route path="signin" element ={<SignIn />}/>
          <Route path="explore" element ={<Explore/>} >
          
          </Route>
          <Route path="video">
            <Route path=":id" element={<Video/>}/>
          </Route>

        </Route>
       </Routes>
      </Wrapper>
      </Main>
      </BrowserRouter>
    </Container>
    </ThemeProvider>
  );
}

export default App;
