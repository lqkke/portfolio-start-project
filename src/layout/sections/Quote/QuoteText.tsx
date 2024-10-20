import React from 'react';
import styled from "styled-components";

type QuoteTextPropsType = {
    text: string;
    author: string;
}

export const QuoteText = (props: QuoteTextPropsType) => {
    return (
        <StyledQuoteText>
            <TextWrapper>
                <StyledText>{props.text}</StyledText>
            </TextWrapper>
            <StyledAuthor>{props.author}</StyledAuthor>

        </StyledQuoteText>
    );
};

const StyledQuoteText = styled.div`
    display: flex;
    flex-direction: column;
`

const TextWrapper = styled.div`
    max-width: 740px;
    margin: 0 auto 50px;
`

const StyledText = styled.p`
    font-family: "Manrope", sans-serif;
    font-weight: 400;
    font-size: 34px;
    line-height: 1.74;
    color: #fff;
    text-align: center;

`

const StyledAuthor = styled.span`
    font-family: "Manrope", sans-serif;
    font-weight: 700;
    font-size: 18px;
    line-height: 1.8;
    color: #999;
    text-align: center;
    margin-bottom: 128px;
`
