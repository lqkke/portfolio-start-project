import React from 'react';
import styled from "styled-components";
import {Logo} from "../../../components/logo/Logo";
import {Button} from "../../../components/Button";
import {ContactMenu} from "./ContactMenu";

////FlexWrappers???

const menuItems = ['Home', 'About', 'Services', 'Portfolio', 'Blogs', 'Contact'];


export const Contact = () => {
    return (
        <StyledContact>
            <Logo logoType={'Black'}></Logo>
            <Text>Subscribe to newsletter to get some updates related with branding, designs and more.</Text>
            <Input placeholder={'write your email address'}/>
            <Button ButtonType={'subscribe'}/>
            <ContactMenu menuItems={menuItems} />
            <Text>Just feel free to contact if you wanna collaborate with me, or simply have a conversation.</Text>
            <Email>templatesjungle@gmail.com</Email>
        </StyledContact>
    );
};

const StyledContact = styled.div``

const Text = styled.p``

const Input=styled.input``

const Email=styled.span``

