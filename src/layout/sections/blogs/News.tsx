import React from 'react';
import styled from "styled-components";
import { NewsItem } from './NewsItem';

export const News = () => {
    return (
        <StyledNews>
            <NewsItem NewsItemType={'tips'} />
            <NewsItem NewsItemType={'typography'} />
            <NewsItem NewsItemType={'top10'} />
        </StyledNews>
    );
};


const StyledNews = styled.div`
`
