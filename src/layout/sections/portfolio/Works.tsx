import React from 'react';
import styled from 'styled-components';
import {WorkItem} from "./WorkItem";
import {FlexWrapper} from "../../../components/FlexWrapper";

type WorkType = 'magazineFront' | 'productBottle' | 'brochureMockup' | 'coffeeBottle' | 'productTag' | 'perfumeBrand'

const leftWorksData:{ workType: WorkType}[] = [
    { workType: 'magazineFront' },
    { workType: 'productBottle' },
    { workType: 'brochureMockup' },
]

const rightWorksData:{ workType: WorkType }[] = [
    { workType: 'coffeeBottle' },
    { workType: 'productTag' },
    { workType: 'perfumeBrand' },
]




export const Works = () => {
    return (
        <StyledWorks>
            <FlexWrapper direction='column' gap='60px'>
                {leftWorksData.map((work, index) => (
                    <WorkItem key={index} workType={work.workType} />
                ))}
            </FlexWrapper>
            <FlexWrapper direction={'column'} gap='60px'>
                {rightWorksData.map((work, index) => (
                    <WorkItem key={index} workType={work.workType} />
                ))}
            </FlexWrapper>
        </StyledWorks>
    )
}

const StyledWorks = styled.div`
    display:flex;
    gap: 62px;
`

