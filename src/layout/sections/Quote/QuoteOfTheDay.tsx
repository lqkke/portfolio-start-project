import React from 'react';
import styled from "styled-components";
import {QuoteText} from "./QuoteText";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const QuoteOfTheDay = () => {
    return (
        <StyledQuote>
            <FlexWrapper direction="column">
                <QuoteTitle>quote of the day</QuoteTitle>
                <QuoteText
                    text={'“Success is not final; failure is not fatal: it is the courage to continue that counts.”'}
                    author={'-Winston Churchill'}/>
            </FlexWrapper>
        </StyledQuote>
    );
};

const StyledQuote = styled.section`
    background-color: #0D0D0D;
    height: 100%;
`

const QuoteTitle = styled.h2`
    font-family: "Jost", sans-serif;
    font-weight: 500;
    font-size: 120px;
    line-height: 1.50023;
    letter-spacing: -0.04em;
    text-transform: uppercase;
    text-align: center;
    color: #eaeaea;
    margin-bottom: 85px;

`

//Add Quote svg



