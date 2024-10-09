import React from 'react';
import styled from "styled-components";

import {Icon} from "../icon/Icon";

export const Menu = () => {
    return (
        <StyledMenu>
            <Icon iconId={'burgerMenu'}/>
        </StyledMenu>
    );
};


const StyledMenu = styled.nav`
`

