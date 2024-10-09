import React from 'react';
import styled from "styled-components";
import mainBackground from '../../../assets/images/header.webp'
import {Header} from "../../header/Header";
import {Link} from "../../../components/Link";

export const Main = () => {
    return (
        <MainStyled>
            <Header/>
                <span>hi! everyone</span>
                <Name>Chris Lee</Name>
                <MainTitle>brand designer</MainTitle>
                <p>Make designs mainly logos, visual identities, apps & websites, social media and magazines.</p>
                <Link linkType={'about'}/>
        </MainStyled>
    );
};


const MainStyled = styled.div`
    background-image: url(${mainBackground});
    min-height: 70vh;
    display: flex;
    flex-direction: column;
    color: white;
`
const Name = styled.h2``

const MainTitle = styled.h1``

