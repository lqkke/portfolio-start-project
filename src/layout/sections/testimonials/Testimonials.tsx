import React from 'react';
import styled from "styled-components";
import testimonialsBackground from '../../../assets/images/Rectan.png'
import { Testimonial } from './Testimonial';
import {SectionTitle} from "../SectionTitle";

export const Testimonials = () => {
    return (
        <StyledTestimonials>
            <SectionTitle sectionTitleType={'testimonials'}/>
            <Testimonial testimonialType={'lucasWolfer'}/>
        </StyledTestimonials>
    );
};

const StyledTestimonials = styled.section`
    background-image: url(${testimonialsBackground});
`