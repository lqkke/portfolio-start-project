import React from 'react';
import styled from "styled-components";
import aboutImg from '../../assets/images/about.webp'
import portfolioImg from '../../assets/images/portfolio.webp'
import achievementImg from '../../assets/images/achievement.webp'
import blogsImg from '../../assets/images/blogs.webp'
import testimonialsImg from '../../assets/images/testimonial.webp'

type SectionTitlePropsType= {
    sectionTitleType: 'about' | 'portfolio' | 'achievement' | 'blogs' | 'testimonials'
}
const sections = {
    about: {
        img: aboutImg,
        text: 'who am i'
    },
    portfolio: {
        img: portfolioImg,
        text: 'latest works',
    },
    achievement: {
        img: achievementImg,
        text: 'awards and recognition',
    },
    blogs: {
        img: blogsImg,
        text: 'latest news',
    },
    testimonials: {
        img: testimonialsImg,
        text: 'what clients says'
    },
}

export const SectionTitle = (props: SectionTitlePropsType) => {
    const {img, text} = sections[props.sectionTitleType || 'about']
    return (
        <StyledSectionTitle img={img}>
            <SectionTitleText> {text}</SectionTitleText>
        </StyledSectionTitle>
    );
};

const StyledSectionTitle = styled.div<{ img:string }>`
    background-image: url(${({img}) => `${img}`});
    background-repeat: no-repeat;
    background-position: center;
    width: 600px;  //refactor!
    height: 200px; //refactor!
    display: flex;
    justify-content: center;
    align-items: center;
`


const SectionTitleText = styled.h2`  ///refactor
`



