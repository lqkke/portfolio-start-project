import React from 'react';
import {SectionTitle} from "../SectionTitle";
import styled from "styled-components";
import { Works } from './Works';

export const Portfolio = () => {
    return (
        <StyledPortfolio>
            <SectionTitle sectionTitleType={"portfolio"}/>
            <Works/>
        </StyledPortfolio>
    );
};

const StyledPortfolio = styled.div`
    
`