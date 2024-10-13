import React from 'react';
import {Icon} from "../icon/Icon";

type LogoPropsType = {
    logoType: "White" | "Black"
}

export const Logo = (props: LogoPropsType) => {
    return (
        <a href=''>
            <Icon iconId={`logo${props.logoType}`} width={'94'} height={'45'} viewBox={'0 0 94 45'}/>
        </a>
    );
};

