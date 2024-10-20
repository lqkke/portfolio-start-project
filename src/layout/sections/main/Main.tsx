import React from 'react';
import styled from "styled-components";
import mainBackground from '../../../assets/images/mainNew.png'
import {Header} from "../../header/Header";
import {StyledText} from "../../../components/StyledText";

export const Main = () => {
    return (
        <MainStyled>
            <Header/>
                <StyledSpan>hi! everyone</StyledSpan>
                <Name>Chris Lee</Name>
                <MainTitle>brand designer</MainTitle>
                <StyledText>Make designs mainly logos, visual identities, apps & websites, social media and magazines.</StyledText>
                 <StyledLink href={"#"}>get in touch</StyledLink>
        </MainStyled>
    );
};


const MainStyled = styled.main`
    background-image: url(${mainBackground});
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    color: white;
`
const Name = styled.h2``

const MainTitle = styled.h1``

const StyledSpan = styled.span``

const StyledLink = styled.a`
`