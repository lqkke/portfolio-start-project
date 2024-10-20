import React from 'react';
import styled from "styled-components";
import {Logo} from "../../../components/logo/Logo";
import {Button} from "../../../components/Button";
import {ContactMenu} from "./ContactMenu";
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";

////FlexWrappers???

const menuItems = ['Home', 'About', 'Services', 'Portfolio', 'Blogs', 'Contact'];


export const Contact = () => {
    return (
        <StyledContact>
            <Container>
                <Logo logoType={'Black'}></Logo>
                <FlexWrapper marginTop={'34px'} justify='space-between'>
                    <FlexWrapper direction={'column'} maxWidth={'304px'}>
                        <Text>Subscribe to newsletter to get some updates related with branding, designs and
                            more.</Text>
                        <Input placeholder={'write your email address'}/>
                        <Button ButtonType={'subscribe'}/>
                    </FlexWrapper>
                    <FlexWrapper>
                        <ContactMenu menuItems={menuItems}/>
                    </FlexWrapper>
                    <FlexWrapper direction={'column'} maxWidth={'412px'}>
                        <Text>Just feel free to contact if you wanna collaborate with me, or simply have a
                            conversation.</Text>
                        <Email>templatesjungle@gmail.com</Email>
                    </FlexWrapper>
                </FlexWrapper>
            </Container>
        </StyledContact>
    );
};

const StyledContact = styled.section``

const Text = styled.p`
    margin-bottom:38px;
    font-family: "Manrope", sans-serif;
    font-weight: 400;
    font-size: 17px;
    line-height: 2.25023;
    letter-spacing: 0.02em;
    color: #494949;
`

const Input = styled.input`
    width: 304px;
    height: 50px;
    background: #f4f4f4;
    font-family: "Manrope", sans-serif;
    font-weight: 400;
    font-size: 17px;
    letter-spacing: 0.02em;
    text-transform: capitalize;
    color: #494949;
    padding: 13px 0 13px 22px;
    margin-bottom: 14px;
    border: none;
`

const Email = styled.span`
    font-family: "Manrope", sans-serif;
    font-weight: 300;
    font-size: 30px;
    line-height: 1.83023;
    letter-spacing: 0.01em;
    color: #2f2f2f;
    display: inline-block;
    position: relative;
    
    &::after {
        content: "";
        position: absolute;
        width: 100%;
        background-color: #2f2f2f;
        height: 2px;
        left: 0;
        bottom: -8px;
    }
`

