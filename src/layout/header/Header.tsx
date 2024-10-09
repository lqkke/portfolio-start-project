import React from 'react';
import styled from 'styled-components';
import {FlexWrapper} from "../../components/FlexWrapper";
import {Menu} from "../../components/menu/Menu";
import {Logo} from "../../components/logo/Logo";

export const Header = () => {
    return (
        <FlexWrapper justify='space-between'>
            <Logo></Logo>
            <Menu></Menu>
        </FlexWrapper>

    );
};

const StyledHeader = styled.header`

`


