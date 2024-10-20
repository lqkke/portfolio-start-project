import React from 'react';
import styled from "styled-components";

type ContactMenuPropsType = {
    menuItems: Array<String>
}


export const ContactMenu = (props: ContactMenuPropsType) => {
    return (
        <StyledLinks>
            {props.menuItems.map((name, index) => {
                return <Link key={index} href={`#${name}`}>{name}</Link>
            })}
        </StyledLinks>
    );
};

const StyledLinks = styled.div`
    display: flex;
    flex-direction: column;
    align-content: space-between; 
    flex-wrap: wrap;
    width: 306px;
    height: 220px;
    flex-grow: 1;
    
`

const Link = styled.a`
    font-family: "Manrope", sans-serif;
    font-weight: 600;
    font-size: 17px;
    line-height: 3.305;
    letter-spacing: 0.09em;
    text-transform: uppercase;
    color: #8f8f8f;
    text-decoration: none;
    
    &:hover {
        color: #3f3f3f;
    }
`