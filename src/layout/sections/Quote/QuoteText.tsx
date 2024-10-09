import React from 'react';
import styled from "styled-components";

type QuoteTextPropsType = {
    text: string;
    author: string;
}

export const QuoteText = (props: QuoteTextPropsType) => {
    return (
        <StyledQuoteText>
            <StyledText>{props.text}</StyledText>
            <StyledAuthor>{props.author}</StyledAuthor>
        </StyledQuoteText>
    );
};

const StyledQuoteText = styled.div``

const StyledText = styled.h2``

const StyledAuthor = styled.span``
