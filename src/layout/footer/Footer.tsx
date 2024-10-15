import React from 'react';
import styled from "styled-components";
import {SocialNetworks} from "./SocialNetworks";

export const Footer = () => {
    return (
        <StyledFooter>
            <SocialNetworks/>
            <Copyright>Template designed by : Templates Jungle</Copyright>
        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    padding: 64px 322px;
    background-color: #1A1A1A;
    display: flex;
    flex-direction: row;
    justify-content: space-between;
`

const Copyright = styled.small``


