import React from 'react';
import {SectionTitle} from "../SectionTitle";
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import { Works } from './Works';

export const Portfolio = () => {
    return (
        <StyledPortfolio>
            <SectionTitle/>
            <Works/>
        </StyledPortfolio>
    );
};

const StyledPortfolio = styled.div`
    
`