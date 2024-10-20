import React from 'react';
import styled from "styled-components";
import tipsImg from '../../../assets/images/BlogImg1.webp'
import typographyImg from '../../../assets/images/blogImg2.webp'
import top10Img from '../../../assets/images/blogImg3.webp'

const newsItems = {
    tips: {
        title: 'Graphic Designing Useful Tips & Best Practices',
        date: 'July 1, 2021',
        parceling: 'Graphic Design',
        img: tipsImg,
    },
    typography: {
        title: 'basic typography rules for ui designing',
        date: 'July 1, 2021',
        parceling: 'Graphic Design',
        img: typographyImg,
    },
    top10: {
        title: 'top 10 graphic designs review in 2021',
        date: 'July 1, 2021',
        parceling: 'Graphic Design',
        img: top10Img,
    },
}

type NewsItemPropsType = {
    NewsItemType?: 'tips' | 'typography' | 'top10'
}




export const NewsItem = (props: NewsItemPropsType ) => {
    const {title, date, parceling, img} = newsItems[props.NewsItemType || 'tips'];
    return (
        <StyledNewsItem img={img}>
            <StyledNewsParceling>{parceling}    /     {date}</StyledNewsParceling>
            <StyledNewsTitle>{title}</StyledNewsTitle>
        </StyledNewsItem>
    );
};

//refactor parceling for button

const StyledNewsItem = styled.div<{img: string}>`
    background-image: url(${({img}) => `${img}`});
    Width: 396px;
    Height: 477px;
    display: flex;
    flex-direction: column;
    justify-content: flex-end;
    padding: 0 48px 41px;

`

const StyledNewsParceling = styled.h4`
    display: inline-block;
    margin-bottom: 16px;
    font-family: "Manrope", sans-serif;
    font-weight: 700;
    font-size: 16px;
    letter-spacing: 0.02em;
    color: #fcfcfc;
`

const StyledNewsTitle = styled.h3`
    font-family: "Manrope", sans-serif;
    font-weight: 700;
    font-size: 26px;
    line-height: 1.6;
    letter-spacing: 0.01em;
    text-transform: capitalize;
    color: #fff;
`
