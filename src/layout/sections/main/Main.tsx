import React from 'react';
import styled from "styled-components";
import mainBackground from '../../../assets/images/mainNew.png'
import {Header} from "../../header/Header";
import {Container} from '../../../components/Container';

export const Main = () => {
    return (
        <MainStyled>
            <Header/>
            <Container>
                <StyledSpan>hi! everyone</StyledSpan>
                <Name>Chris Lee</Name>
                <MainTitle>brand designer</MainTitle>
                <StyledText>Make designs mainly logos, visual identities, apps & websites, social media and
                    magazines.</StyledText>
                <StyledLink href={"#"}>get in touch</StyledLink>
            </Container>
        </MainStyled>
    );
};


const MainStyled = styled.main`
    background-image: url(${mainBackground});
    background-repeat: no-repeat;
    background-size: cover;
    background-position: 80% 80%;
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    margin-bottom: 92px;
`

const StyledSpan = styled.span`
    display: inline-block;
    font-family: "Inconsolata", sans-serif;
    font-weight: 400;
    font-size: 18px;
    line-height: 1.26023;
    letter-spacing: 0.24em;
    text-transform: uppercase;
    color: #fff;
    background-color: rgba(236, 236, 236, 0.17);
    padding: 4px 12px;
    margin-bottom: 50px;
`

const Name = styled.h2`
    font-family: "Manrope", sans-serif;
    font-weight: 800;
    font-size: 108px;
    line-height: 1.11023;
    letter-spacing: -0.04em;
    text-transform: capitalize;
    color: #fff;
`

const MainTitle = styled.h1`
    font-family: "Manrope", sans-serif;
    font-weight: 800;
    font-size: 108px;
    line-height: 1.11023;
    letter-spacing: -0.04em;
    text-transform: capitalize;
    color: #fff;
    padding-bottom: 35px;
`

const StyledText = styled.p`
    font-family: "Manrope", sans-serif;
    font-weight: 400;
    font-size: 24px;
    line-height: 1.98023;
    letter-spacing: 0.02em;
    color: #fff;
    max-width: 720px;
    display: flex;
    margin-bottom: 70px;
`



const StyledLink = styled.a`
    font-family: "Manrope", sans-serif;
    font-weight: 600;
    font-size: 19px;
    line-height: 2.34523;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    text-align: center;
    color: #fff;
    text-decoration: none;
    padding: 25px 52px;
    border: 1px solid #fff;
`