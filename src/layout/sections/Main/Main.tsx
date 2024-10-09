import React from 'react';
import styled from "styled-components";
import mainBackground from '../../../assets/images/header.webp'
import {Header} from "../../header/Header";

export const Main = () => {
    return (
        <MainStyled>
            <Header/>
            <span>hi! everyone</span>
            <h2>Chris Lee</h2>
            <h1>brand designer</h1>
            <p>Make designs mainly logos, visual identities, apps & websites, social media and magazines.</p>
            <button>get in touch</button>
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
