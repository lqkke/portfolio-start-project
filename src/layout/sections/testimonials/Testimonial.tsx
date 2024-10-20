import React from 'react';
import lucasWolferIcon from '../../../assets/images/testimonial.webp'
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Button} from "../../../components/Button";


const testimonials = {
    lucasWolfer: {
        review: "“Lorem ipsum dolor sit amet, elit consectetur adipiscing. Odio tincidunt et, massa, turpis nec dolor posuere tempus. Nulla congue et dolor sit amet, elit consectetur adipiscing.”",
        icon: lucasWolferIcon,
        name: "Lucas Wolfer",
        about: "CEO - RAISINS",
    },
}

type TestimonialPropsType = {
    testimonialType: "lucasWolfer"
}


export const Testimonial = (props: TestimonialPropsType) => {
    const {review, icon, name, about} = testimonials[props.testimonialType];
    return (
        <StyledTestimonials>
            <FlexWrapper direction={"row"}>
                <Button ButtonType={"prevButton"}/>
                <ReviewWrapper>
                    <Review>{review}</Review>
                </ReviewWrapper>
                <Button ButtonType={"nextButton"}/>
            </FlexWrapper>
            <Img src={icon}></Img>
            <Name>{name}</Name>
            <About>{about}</About>
        </StyledTestimonials>
    );
};

const StyledTestimonials = styled.div`
    display: flex;
    flex-direction: column;
    align-items: center;
`

const ReviewWrapper = styled.div`
    max-width: 900px;
    margin-bottom: 50px;
`

const Review = styled.p`
    font-family: "Manrope", sans-serif;
    font-weight: 400;
    font-size: 29px;
    line-height: 1.83023;
    letter-spacing: 0.01em;
    text-align: center;
    color: #fff;

`

const Img = styled.img`
    width: 66px;
    height: 66px;
    object-fit: contain;
    margin-bottom: 10px;
`

const Name = styled.h3`
    font-family: "Manrope", sans-serif;
    font-weight: 500;
    font-size: 21px;
    line-height: 2.25023;
    letter-spacing: 0.02em;
    text-transform: capitalize;
    text-align: center;
    color: #fff;
`

const About = styled.h4`
    font-family: "Manrope", sans-serif;
    font-weight: 500;
    font-size: 14px;
    line-height: 1.78523;
    letter-spacing: 0.05em;
    text-transform: uppercase;
    text-align: center;
    color: #f6f6f6;
    margin-bottom: 145px;
`