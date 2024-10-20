import React from 'react';
import styled from "styled-components";

const awards = {
    interiorDesign: {
        title: "Interior design",
        description: "Breakthrough designer of the year 2020",
    },
}

type AwardPropsType = {
    awardType?: "interiorDesign"
}


export const Award = (props: AwardPropsType) => {
    const {title, description} = awards[props.awardType || "interiorDesign" ];
    return (
        <StyledAward>
            <AwardTitle>{title}</AwardTitle>
            <AwardDescription>{description}</AwardDescription>
        </StyledAward>
    );
};

const StyledAward = styled.div`
`

const AwardTitle = styled.h3`
    font-family: "Manrope", sans-serif;
    font-weight: 500;
    font-size: 22px;
    text-transform: capitalize;
    color: #111;
    margin-bottom: 3px;
`

const AwardDescription = styled.span`
    font-family: "Manrope", sans-serif;
    font-weight: 300;
    font-size: 19px;
    line-height: 1.88023;
    letter-spacing: 0.02em;
    color: #282828;
    display: inline-block;
    position: relative;
    

    &::after {
        content: '';
        position: absolute;
        bottom: -41px; /* Отступ подчеркивания от текста */
        left: 0;
        width: 100%;
        height: 1px; /* Толщина подчеркивания */
        background-color: #e2e2e2; /* Цвет подчеркивания */
    }
`