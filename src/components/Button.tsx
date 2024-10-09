import React from 'react';
import styled, {css} from 'styled-components';
import {Icon} from "./icon/Icon";

type ButtonPropsType = {
    ButtonType?: "about" | "portfolio" | "blogs" | "subscribe"
}

const ButtonIcon = <Icon iconId={'arrow-right'} width={'10'} height={'9'} viewBox={'0 0 10 9'}/>

const ButtonData = {
    about: {
        title: "about me",
        icon: ButtonIcon,
    },
    portfolio: {
        title: "view all portfolio",
        icon: ButtonIcon,
    },
    blogs: {
        title: "view all blogs",
        icon: ButtonIcon,
    },
    subscribe: {
        title: "subscribe it",
        icon: ""
    }
}

export const Button = (props: ButtonPropsType) => {
    const {title, icon} = ButtonData[props.ButtonType || "about"];
    return (
        <StyledButton>{title} {icon}</StyledButton>
    );
};

const StyledButton = styled.button<ButtonPropsType>`

    ${props => props.ButtonType === "about" && css<ButtonPropsType>`

    `}

    ${props => props.ButtonType === "portfolio" && css<ButtonPropsType>`

    `}

    ${props => props.ButtonType === "blogs" && css<ButtonPropsType>`

    `}

    ${props => props.ButtonType === "subscribe" && css<ButtonPropsType>`

    `}




`