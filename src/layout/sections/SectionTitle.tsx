import React from 'react';
import styled from "styled-components";
import aboutImg from '../../assets/images/about.webp'
import portfolioImg from '../../assets/images/portfolio.webp'
import achievementImg from '../../assets/images/achievement.webp'
import blogsImg from '../../assets/images/blogs.webp'
import testimonialsImg from '../../assets/images/testimonials.webp'

type SectionTitlePropsType= {
    sectionTitleType: 'about' | 'portfolio' | 'achievement' | 'blogs' | 'testimonials'
}
const sections = {
    about: {
        img: aboutImg,
        text: 'who am i',
        width: '353px',
        height: '180px',
        margin: '0 0',
    },
    portfolio: {
        img: portfolioImg,
        text: 'latest works',
        width: '560px',
        height: '180px',
        margin: '0 auto',
    },
    achievement: {
        img: achievementImg,
        text: 'awards and recognition',
        width: '353px',
        height: '180px',
        margin: '0 auto',
    },
    blogs: {
        img: blogsImg,
        text: 'latest news',
        width: '353px',
        height: '180px',
        margin: '0 auto',
    },
    testimonials: {
        img: testimonialsImg,
        text: 'what clients says',
        width: '353px',
        height: '180px',
        margin: '0 auto',
    },
}

export const SectionTitle = (props: SectionTitlePropsType) => {
    const {img, text, width, height, margin} = sections[props.sectionTitleType || 'about']
    return (
        <StyledSectionTitle img={img} width={width} height={height} margin={margin}>
            <SectionTitleText> {text}</SectionTitleText>
        </StyledSectionTitle>
    );
};

const StyledSectionTitle = styled.div<{ img:string, width:string, height:string, margin: string }>`
    background-image: url(${({img}) => `${img}`});
    background-repeat: no-repeat;
    background-position: center;
    width: ${({ width }) => width};
    height: ${({ height }) => height};
    margin: ${({ margin }) => margin} 20px;
    display: flex;
    justify-content: center;
    align-items: center;
`


const SectionTitleText = styled.h2`
    font-family: "Inconsolata", sans-serif;
    font-weight: 400;
    font-size: 22px;
    line-height: 1.26023;
    letter-spacing: 0.1em;
    text-transform: uppercase;
    color: #111;
    display:inline-block;
    padding: 0 12px;
    border: 2px solid #f8f8f8;
    background: #fff;
`



