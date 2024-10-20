import React from 'react';
import styled from "styled-components";
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Button} from "../../../components/Button";
import {SectionTitle} from "../SectionTitle";
import {SkillsStats} from "../../../components/skills/SkillsStats";
import {Container} from "../../../components/Container";

export const About = () => {
    return (
        <StyledAbout>
            <Container>
                <SectionTitle sectionTitleType={'about'}/>
                <FlexWrapper justify='space-around'>
                    <FlexWrapper direction='column' justify={'flex-start'}>
                        <StyledText>Itaque earum rerum hic tenetur a sapiente delectus, ut aut reiciendis voluptatibus
                            maiores alias consequatur aut perferendis doloribus asperiores repellat quia voluptas sit
                            aspernatur te natus accusan. maiores alias consequatur aut equatur aut
                            perferendi.</StyledText>
                        <Button ButtonType={'about'}/>
                    </FlexWrapper>
                    <SkillsStats/>
                </FlexWrapper>
            </Container>
        </StyledAbout>
    );
};

const StyledAbout = styled.section`
    min-height: 100%;
`

const StyledText = styled.p`
    font-family: "Manrope", sans-serif;
    font-weight: 400;
    font-size: 17px;
    line-height: 2.37523;
    letter-spacing: 0.02em;
    color: #555;
    display: inline-block;
    max-width: 640px;
    margin-right: 120px;
    margin-bottom: 60px;
`
