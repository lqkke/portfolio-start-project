import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";

const socialNetworksData = [
    {iconId: 'footerFB', href: '#'},
    {iconId: 'footerTwitter', href: '#'},
    {iconId: 'footerLinkedIn', href: '#'},
    {iconId: 'footerDunno', href: '#'},
    {iconId: 'footerYoutube', href: '#'},
];


export const SocialNetworks = () => {
    return (
        <StyledNetworks>
            {socialNetworksData.map((network, index) => (
                <SocialItem key={index}>
                    <SocialLink href={network.href}>
                        <Icon iconId={network.iconId} />
                    </SocialLink>
                </SocialItem>
            ))}
        </StyledNetworks>
    );
};

const StyledNetworks = styled.ul`
    display: flex;

    li + li {
        margin-left: 66px;
    }
`

const SocialItem = styled.li`
    list-style: none;
    height: 20px;
    width: 20px;

`

const SocialLink = styled.a`

`




