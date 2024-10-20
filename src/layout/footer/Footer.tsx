import React from 'react';
import styled from "styled-components";
import {SocialNetworks} from "./SocialNetworks";
import {Container} from "../../components/Container";
import {FlexWrapper} from "../../components/FlexWrapper";

export const Footer = () => {
    return (
        <StyledFooter>
            <Container>
                <FlexWrapper justify={'space-between'} align={'center'}>
                    <SocialNetworks/>
                    <Copyright>Template designed by : Templates Jungle</Copyright>
                </FlexWrapper>
            </Container>

        </StyledFooter>
    );
};

const StyledFooter = styled.footer`
    background-color: #1A1A1A;
    padding: 66px 0;
`

const Copyright = styled.small`
    font-family: "Manrope", sans-serif;
    font-weight: 500;
    font-size: 17px;
    line-height: 2.124;
    letter-spacing: 0.02em;
    color: #8c8c8c;
`


