import React from 'react';
import styled, {css} from 'styled-components';
import {Icon} from "./icon/Icon";

type ButtonPropsType = {
    ButtonType?: "about" | "portfolio" | "blogs" | "subscribe" | "prevButton" | "nextButton";
}

const ButtonIconWhite = <Icon iconId={'arrow-right'} width={'10'} height={'9'} viewBox={'0 0 10 9'}/>
const ButtonIconBlack = <Icon iconId={'blogs-button'} width={'14'} height={'12'} viewBox={'0 0 14 12'}/>
const ButtonPrev = <Icon iconId={'prev-button'} width={'27'} height={'45'} viewBox={'0 0 27 45'}/>
const ButtonNext = <Icon iconId={'next-button'} width={'27'} height={'45'} viewBox={'0 0 27 45'}/>

const ButtonData = {
    about: {
        title: "about me",
        icon: ButtonIconWhite,
    },
    portfolio: {
        title: "view all portfolio",
        icon: ButtonIconWhite,
    },
    blogs: {
        title: "view all blogs",
        icon: ButtonIconBlack,
    },
    prevButton: {
        title: "",
        icon: ButtonPrev,
    },
    nextButton: {
        title: "",
        icon: ButtonNext,
    },
    subscribe: {
        title: "subscribe it",
        icon: ""
    },
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

    ${props => props.ButtonType === "prevButton" && css<ButtonPropsType>`

    `}

    ${props => props.ButtonType === "nextButton" && css<ButtonPropsType>`

    `}

    ${props => props.ButtonType === "subscribe" && css<ButtonPropsType>`

    `}
    
    




`