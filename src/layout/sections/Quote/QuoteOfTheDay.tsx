import React from 'react';
import styled from "styled-components";
import {QuoteText} from "./QuoteText";
import QuoteTitle from "../../../assets/images/quoteTitle.webp"

export const QuoteOfTheDay = () => {
    return (
        <StyledQuote>
            <QuoteImg src={QuoteTitle}></QuoteImg>
            <QuoteText text={'“Success is not final; failure is not fatal: it is the courage to continue that counts.”'} author={'-Winston Churchill'}/>
        </StyledQuote>
    );
};

const StyledQuote = styled.section`
    background-color: #0D0D0D;
    height: 50vh;
`

const QuoteImg = styled.img`
`

//Add Quote svg



