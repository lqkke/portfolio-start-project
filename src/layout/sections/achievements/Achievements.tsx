import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../SectionTitle";
import {Awards} from './Awards';
import {Container} from "../../../components/Container";
import {FlexWrapper} from "../../../components/FlexWrapper";

export const Achievements = () => {
    return (
        <StyledAchievements>
            <FlexWrapper justify={'center'} align={'center'}>
                <Container>
                    <SectionTitle sectionTitleType={"achievement"}/>
                    <Awards/>
                </Container>
            </FlexWrapper>
        </StyledAchievements>
    );
};

const StyledAchievements = styled.section`
    margin-bottom: 128px;
`

