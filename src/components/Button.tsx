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
        icon: '',
    },
    portfolio: {
        title: "view all portfolio",
        icon: '',
    },
    blogs: {
        title: "view all blogs",
        icon: '',
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
        <StyledButton ButtonType={props.ButtonType}>{title} {icon}</StyledButton>
    );
};

const StyledButton = styled.button<ButtonPropsType>`
    cursor: pointer;
    ${props => props.ButtonType === "about" && css<ButtonPropsType>`
        width: 194px;
        height: 62px;
        background: #181818;
        font-family: "Manrope", sans-serif;
        font-weight: 600;
        font-size: 17px;
        line-height: 2.34523;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        text-align: center;
        color: #fff;
    `}

    ${props => props.ButtonType === "portfolio" && css<ButtonPropsType>`
        width: 292px;
        height: 62px;
        font-family: "Manrope", sans-serif;
        font-weight: 600;
        font-size: 17px;
        line-height: 2.34523;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        text-align: center;
        color: #fff;
        background: #181818;
        margin-top: 37px;
    `}

    ${props => props.ButtonType === "blogs" && css<ButtonPropsType>`
        font-family: "Manrope", sans-serif;
        font-weight: 600;
        font-size: 16px;
        line-height: 2.34523;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        text-align: center;
        color: #111;
        border: none;
        background-color: transparent;

    `}

    ${props => props.ButtonType === "prevButton" && css<ButtonPropsType>`
        border: none;
        background-color: transparent;

    `}

    ${props => props.ButtonType === "nextButton" && css<ButtonPropsType>`
        border: none;
        background-color: transparent;
    `}

    ${props => props.ButtonType === "subscribe" && css<ButtonPropsType>`
        width: 304px; 
        height: 46px;
        background: #181818;
        border: none;
        font-family: "Manrope", sans-serif;
        font-weight: 600;
        font-size: 17px;
        letter-spacing: 0.1em;
        text-transform: uppercase;
        text-align: center;
        color: #fff;
        margin-bottom: 100px;

    `}
    
    




`