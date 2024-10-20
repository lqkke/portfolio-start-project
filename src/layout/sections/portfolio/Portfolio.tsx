import React from 'react';
import {SectionTitle} from "../SectionTitle";
import styled from "styled-components";
import { Works } from './Works';
import {Button} from "../../../components/Button";
import {Container} from "../../../components/Container";

export const Portfolio = () => {
    return (
        <StyledPortfolio>
            <Container>
                <SectionTitle sectionTitleType={"portfolio"}/>
                <Works/>
                <Button ButtonType={"portfolio"}/>
            </Container>
        </StyledPortfolio>
    );
};

const StyledPortfolio = styled.section`
    margin-bottom: 200px;
    position: relative;
`