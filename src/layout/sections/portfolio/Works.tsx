import React from 'react';
import styled from 'styled-components';
import {WorkItem} from "./WorkItem";

/*const workItem = ['magazineFront' , 'productBottle' , 'brochureMockup' , 'coffeeBottle' , 'productTag' , 'perfumeBrand']
export const Works = () => {
    return (
        <StyledWorks>
            {workItem.map((item, index) =>(
                <Work key={index} workType={item} />
            ))}
        </StyledWorks>
    );
};*/


export const Works = () => {
    return (
        <StyledWorks>
            <WorkItem workType={'magazineFront'}/>
            <WorkItem workType={'productBottle'}/>
            <WorkItem workType={'brochureMockup'}/>
            <WorkItem workType={'coffeeBottle'}/>
            <WorkItem workType={'productTag'}/>
            <WorkItem workType={'perfumeBrand'}/>
        </StyledWorks>
    )
}

const StyledWorks = styled.div`
    
`

