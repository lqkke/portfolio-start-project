import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";
import AboutImg from '../../assets/images/about.webp'

export const SectionTitle = () => {
    return (
        <StyledSectionTitle>
            <SectionTitleText>text</SectionTitleText>
        </StyledSectionTitle>
    );
};

const StyledSectionTitle = styled.div`
    background-image: url(${AboutImg});
    background-repeat: no-repeat;
    background-position: center;
    width: 342px;
    height: 180px;
    display: flex;
    justify-content: center;
    align-items: center;
`


const SectionTitleText = styled.h2`
`



