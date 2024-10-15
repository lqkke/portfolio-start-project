import React from 'react';
import styled from "styled-components";
import {Icon} from "../../components/icon/Icon";

//refactor???

export const SocialNetworks = () => {
    return (
        <StyledNetworks>
            <SocialItem>
                <SocialLink>
                    <Icon iconId={'footerFB'}/>
                </SocialLink>
            </SocialItem>
            <SocialItem>
                <SocialLink>
                    <Icon iconId={'footerTwitter'}/>
                </SocialLink>
            </SocialItem>
            <SocialItem>
                <SocialLink>
                    <Icon iconId={'footerLinkedIn'}/>
                </SocialLink>
            </SocialItem>
            <SocialItem>
                <SocialLink>
                    <Icon iconId={'footerDunno'}/>
                </SocialLink>
            </SocialItem>
            <SocialItem>
                <SocialLink>
                    <Icon iconId={'footerYoutube'}/>
                </SocialLink>
            </SocialItem>
        </StyledNetworks>
    );
};

const StyledNetworks = styled.ul`
    display: flex;
`

const SocialItem = styled.li`
    list-style: none;
`

const SocialLink = styled.a``




