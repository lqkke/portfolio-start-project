import React from 'react';
import styled from "styled-components";

type SkillPropsType = {
    title?: string;
    progress?: number;
}

export const Skill = (props: SkillPropsType) => {
    return (
        <StyledSkill>
            <SkillTitle>{props.title}</SkillTitle>
            <BaseLine>
                <ProgressBar progress={props.progress} />
            </BaseLine>
        </StyledSkill>
    );
};



const StyledSkill = styled.div`
    width: 100%;
    height: 20%;
`

const SkillTitle = styled.h3`
`

const BaseLine =styled.div`
    width: 100%;
    background-color: #dbdbdb;
    height: 1px;
`

const ProgressBar = styled.div<SkillPropsType>`
    width: ${({progress}) => `${progress}%`} ;
    height: 3px;
    background-color: #3A3422;
`
