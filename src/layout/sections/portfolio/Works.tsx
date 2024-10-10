import React from 'react';
import styled from 'styled-components';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Work} from "./Work";


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
            <Work workType={'magazineFront'}/>
            <Work workType={'productBottle'}/>
            <Work workType={'brochureMockup'}/>
            <Work workType={'coffeeBottle'}/>
            <Work workType={'productTag'}/>
            <Work workType={'perfumeBrand'}/>
        </StyledWorks>
    )
}

const StyledWorks = styled.div`
    
`

