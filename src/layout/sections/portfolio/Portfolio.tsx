import React from 'react';
import {SectionTitle} from "../SectionTitle";
import styled from "styled-components";
import { Works } from './Works';
import {Button} from "../../../components/Button";

export const Portfolio = () => {
    return (
        <StyledPortfolio>
            <SectionTitle sectionTitleType={"portfolio"}/>
            <Works/>
            <Button ButtonType={"portfolio"}/>
        </StyledPortfolio>
    );
};

const StyledPortfolio = styled.section`
    
`