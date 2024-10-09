import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../SectionTitle";
import { Achievement } from './Achievement';

export const Achievements = () => {
    return (
        <StyledAchievements>
            <SectionTitle sectionTitleType={"achievement"}/>
            <Achievement></Achievement>
        </StyledAchievements>
    );
};

const StyledAchievements = styled.div``

