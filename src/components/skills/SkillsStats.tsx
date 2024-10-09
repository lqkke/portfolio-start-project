import React from 'react';
import {Skill} from "./Skill";
import {FlexWrapper} from "../FlexWrapper";
import styled from "styled-components";


export const SkillsStats = () => {
    return (
        <StyledSkillsStats>
            <Skill title={'Photoshop'} progress={81}/>
            <Skill title={'Illustrator'} progress={92}/>
            <Skill title={'Figma'} progress={89}/>
            <Skill title={'after effect'} progress={76}/>
            <Skill title={'indesign'} progress={92}/>
        </StyledSkillsStats>
    );
};

const StyledSkillsStats = styled.div`
    min-width: 35vh;
    min-height: 340px;
`

