import React from 'react';
import styled from "styled-components";
import {QuoteText} from "./QuoteText";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Icon} from "../../../components/icon/Icon";

export const QuoteOfTheDay = () => {
    return (
        <StyledQuote>
                <div style={{position: 'absolute', left: '72px'}}>
                    <Icon iconId={"quoteTop"} width={"385"} height={"321"} viewBox={"0 0 385 321"}/>
                </div>
                <div style={{position: 'absolute', right: '60px', bottom: '0'}}>
                    <Icon iconId={"quoteBottom"} width={"385"} height={"321"} viewBox={"0 0 385 321"}/>
                </div>
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
    margin-bottom: 146px;
    position: relative;
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



