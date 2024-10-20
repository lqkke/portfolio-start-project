import React from 'react';
import styled from 'styled-components';
import {FlexWrapper} from "../../components/FlexWrapper";
import {Menu} from "../../components/menu/Menu";
import {Logo} from "../../components/logo/Logo";

export const Header = () => {
    return (
        <StyledHeader>
            <FlexWrapper justify='space-between'>
                <Logo logoType={'White'}></Logo>
                <Menu></Menu>
            </FlexWrapper>
        </StyledHeader>

    );
};

const StyledHeader = styled.header`
    margin: 70px;
`


