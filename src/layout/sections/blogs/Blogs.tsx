import React from 'react';
import styled from "styled-components";
import {SectionTitle} from "../SectionTitle";
import {Button} from "../../../components/Button";
import { News } from './News';

export const Blogs = () => {
    return (
        <StyledBlogs>
            <SectionTitle sectionTitleType={'blogs'}/>
            <News/>
            <Button ButtonType={'blogs'}/>
        </StyledBlogs>
    );
};

const StyledBlogs = styled.div``