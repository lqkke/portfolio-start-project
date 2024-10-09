import React from 'react';
import styled from 'styled-components';

type LinkPropsType = {
    linkType?: "main" | "about" | "portfolio" | "blogs"
}

const linkData = {
    main: {
        href: "",
        title: "",
    },
    about: {
        href: "",
        title: " ",
    },
    portfolio: {
        href: "",
        title: " ",
    },
    blogs: {
        href: "",
        title: " ",
    },
}

export const Link = (props: LinkPropsType) => {
    const {href, title} = linkData[props.linkType || "main"];
    return (
        <StyledLink href={href}>{title}</StyledLink>
    );
};

const StyledLink = styled.a`

`