import React from 'react';
import styled from "styled-components";

import {Icon} from "../icon/Icon";

export const Menu = () => {
    return (
        <StyledMenu>
            <Icon iconId={'burgerMenu'} width={'32'} height={'21'} viewBox={'0 0 32 21'}/>
        </StyledMenu>
    );
};


const StyledMenu = styled.nav`
`

