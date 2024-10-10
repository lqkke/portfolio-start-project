import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../SectionTitle";
import { Awards } from './Awards';

export const Achievements = () => {
    return (
        <StyledAchievements>
            <SectionTitle sectionTitleType={"achievement"}/>
            <Awards/>
        </StyledAchievements>
    );
};

const StyledAchievements = styled.div``

