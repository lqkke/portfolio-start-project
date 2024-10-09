import React from 'react';
import styled from 'styled-components';
import headerBackground from '../../assets/images/header.webp'
import {FlexWrapper} from "../../components/FlexWrapper";
import {Menu} from "../../components/menu/Menu";
import {Logo} from "../../components/logo/Logo";

export const Header = () => {
    return (
        <StyledHeader>
            <FlexWrapper justify='space-between' >
                <Logo></Logo>
                <Menu></Menu>
            </FlexWrapper>
            <span>hi! everyone</span>
            <h2>Chris Lee</h2>
            <h1>brand designer</h1>
            <p>Make designs mainly logos, visual identities, apps & websites, social media and magazines.</p>
            <button>get in touch</button>
        </StyledHeader>
    );
};

const StyledHeader = styled.header`
    background-image: url(${headerBackground});
    min-height: 100vh;
    display: flex;
    flex-direction: column;
    color: white;
`


