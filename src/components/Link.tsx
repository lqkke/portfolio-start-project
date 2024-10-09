import React from 'react';
import styled, {css} from 'styled-components';
import {Icon} from "./icon/Icon";

type LinkPropsType = {
    linkType?: "main" | "about" | "portfolio" | "blogs"
}

const linkIcon =<Icon iconId={'arrow-right'} width={'10'} height={'9'} viewBox={'0 0 10 9'}/>

const linkData = {
    main: {
        href: "",
        title: "get in touch",
        icon: ""
    },
    about: {
        href: "",
        title: "about me",
        icon: linkIcon,
    },
    portfolio: {
        href: "",
        title: " ",
        icon: linkIcon,
    },
    blogs: {
        href: "",
        title: " ",
        icon: linkIcon,
    },
}

export const Link = (props: LinkPropsType) => {
    const {href, title, icon} = linkData[props.linkType || "main"];
    return (
        <StyledLink href={href}>{title} {icon}</StyledLink>
    );
};

const StyledLink = styled.a<LinkPropsType>`
    
    ${props => props.linkType === "main" && css<LinkPropsType>`
    
    `}

    ${props => props.linkType === "about" && css<LinkPropsType>`
    
    `}

    ${props => props.linkType === "portfolio" && css<LinkPropsType>`
    
    `}

    ${props => props.linkType === "blogs" && css<LinkPropsType>`
    
    `}
    
    
    
    
`