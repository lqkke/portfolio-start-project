import React from 'react';
import {Skill} from "./Skill";
import styled from "styled-components";

const skillsData = [
    { title: 'Photoshop', progress: 81 },
    { title: 'Illustrator', progress: 92 },
    { title: 'Figma', progress: 89 },
    { title: 'After Effect', progress: 76 },
    { title: 'InDesign', progress: 92 },
];


export const SkillsStats = () => {
    return (
        <StyledSkillsStats>
            {skillsData.map((skill, index) => (
                <Skill key={index} title={skill.title} progress={skill.progress} />
            ))}
        </StyledSkillsStats>
    );
};

const StyledSkillsStats = styled.div`
    min-width: 35vh;
    min-height: 340px;
`

