import React from 'react';
import styled from "styled-components";

type ContactMenuPropsType = {
    menuItems: Array<String>
}


export const ContactMenu = (props: ContactMenuPropsType) => {
    return (
        <StyledLinks>
            {props.menuItems.map((name, index) => {
                return <Link href={`#${name}`}>{name}</Link>
            })}
        </StyledLinks>
    );
};

const StyledLinks = styled.div``

const Link = styled.a``