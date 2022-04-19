import styled from "styled-components";
import React from 'react';
import galaxy from '../galaxy.jpg'

export const MainContainer = styled.div ` 
display: flex;
flex-direction: column;
align-items: center;
width: 100%;
height: auto;
min-height: 100vh;
justify-content: space-around;
background-color: yellow;
margin: auto;
background-image: url(${galaxy});
`
export const Container = styled.div ` 
background-color: #ffffff10;
backdrop-filter: blur(12px);
-webkit-backdrop-filter: blur(12px);
max-width: 90vw;
min-height: 600px;
padding: 50px;
border-radius: 5px;
display: flex;
justify-content: center;
flex-direction: column;
align-items: center;
margin-top: 10px;
`
export const BoxButton = styled.div` 
display: flex;
padding: 5px;
column-gap: 20px;
justify-content: center;
margin-top: 10px;
`


export const Subtitle = styled.p `
font-family: "Courier New", Courier, monospace;
font-size: 20px;
color: #FD1E6A;
font-weight: 800;
text-decoration: none solid rgb(68, 68, 68);
text-transform: uppercase;
text-align: center;
`

export const Title = styled(Subtitle)`
font-size: 50px;
text-transform: capitalize;
`

export const Styled = () => {
  return <div>
    <MainContainer>
    <BoxButton>
    </BoxButton>
    
    <Container/>
    </MainContainer>
      <Subtitle></Subtitle>
    </div>
};

