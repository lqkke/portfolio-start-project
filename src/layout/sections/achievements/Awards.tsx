import React from 'react';
import styled from "styled-components";
import {Award} from "./Award";

export const Awards = () => {
    return (
        <StyledAwards>
            <Award awardType={'interiorDesign'}/>
            <Award awardType={'interiorDesign'}/>
            <Award awardType={'interiorDesign'}/>
            <Award awardType={'interiorDesign'}/>
            <Award awardType={'interiorDesign'}/>
            <Award awardType={'interiorDesign'}/>
        </StyledAwards>
    );
};

const StyledAwards = styled.div`
    display: flex;
    gap: 90px;
    flex-wrap: wrap;
    justify-content: center;
    
`
