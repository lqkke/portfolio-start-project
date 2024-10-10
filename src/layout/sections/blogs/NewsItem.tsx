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
        title: 'Graphic Designing Useful Tips & Best Practices',
        date: 'July 1, 2021',
        parceling: 'Graphic Design',
        img: typographyImg,
    },
    top10: {
        title: 'Graphic Designing Useful Tips & Best Practices',
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


const StyledNewsItem = styled.div<{img: string}>`
    background-image: url(${({img}) => `${img}`});
    Width: 396px;
    Height: 477px;

`

const StyledNewsParceling = styled.h4``

const StyledNewsTitle = styled.h2``
