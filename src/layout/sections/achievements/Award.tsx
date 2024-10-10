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
    border-bottom: 1px solid #bfbfbf;
    width: 15vw;
`

const AwardTitle = styled.h3``

const AwardDescription = styled.span``