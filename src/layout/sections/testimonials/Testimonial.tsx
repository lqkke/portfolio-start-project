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
                <Review>{review}</Review>
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
`

const Review = styled.p`
`

const Img = styled.img`
    width: 66px;
    height: 66px;
    object-fit: contain;
`

const Name = styled.h3``

const About = styled.h4``