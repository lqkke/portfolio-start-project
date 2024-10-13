import React from 'react';
import styled from "styled-components";
import {SocialNetworks} from "./SocialNetworks";

export const Footer = () => {
    return (
        <StyledFooter>
            <SocialNetworks/>
            <span>Template designed by : Templates Jungle</span>
        </StyledFooter>
    );
};

const StyledFooter = styled.div`
    background-color: #1A1A1A;
    display: flex;
    flex-direction: row;
`


