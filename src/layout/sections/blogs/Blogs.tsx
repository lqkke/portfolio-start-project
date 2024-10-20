import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../SectionTitle";
import {Button} from "../../../components/Button";
import {News} from './News';
import {FlexWrapper} from "../../../components/FlexWrapper";
import {Container} from "../../../components/Container";

export const Blogs = () => {
    return (
        <StyledBlogs>
            <Container>
                <SectionTitle sectionTitleType={'blogs'}></SectionTitle>
                <News/>
            </Container>
            <Button ButtonType={'blogs'}/>
        </StyledBlogs>
    );
};

const StyledBlogs = styled.section`
    margin-bottom: 200px;
    display: flex;
    flex-direction: column;
    justify-content: center;
    align-items: center;
`