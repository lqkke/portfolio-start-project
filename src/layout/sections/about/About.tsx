import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {StyledText} from "../../../components/StyledText";
import {Button} from "../../../components/Button";
import {SectionTitle} from "../SectionTitle";
import {SkillsStats} from "../../../components/skills/SkillsStats";

export const About = () => {
    return (
        <StyledAbout>
            <SectionTitle sectionTitleType={'about'}/>
            <FlexWrapper justify='space-between'>
                <FlexWrapper direction='column' justify={'flex-start'}>
                    <StyledText>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus
                        maiores alias consequatur aut perferendis doloribus asperiores repellat quia voluptas sit
                        aspernatur te natus accusan. maiores alias consequatur aut equatur aut perferendi.</StyledText>
                    <Button ButtonType={'about'}/>
                </FlexWrapper>
                <SkillsStats/>
            </FlexWrapper>
        </StyledAbout>
    );
};

const StyledAbout = styled.div`
    height: 60vh;
`
