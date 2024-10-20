import React from 'react';
import styled from "styled-components";
import magazineFrontImg from '../../../assets/images/MagazineFront.webp';
import productBottleImg from '../../../assets/images/productBottle.webp';
import brochureImg from '../../../assets/images/magazineMockup.webp';
import coffeeImg from '../../../assets/images/coffeeBotle.webp';
import productTagImg from '../../../assets/images/productTag.webp';
import perfumeImg from '../../../assets/images/parfumeBrand.webp';


type WorkPropsType = {
    workType?: 'magazineFront' | 'productBottle' | 'brochureMockup' | 'coffeeBottle' | 'productTag' | 'perfumeBrand';
}



const works = {
    magazineFront: {
        img: magazineFrontImg,
        title: 'magazine front design',
    },
    productBottle: {
        img: productBottleImg,
        title: 'product bottle design',
    },
    brochureMockup: {
        img: brochureImg,
        title: 'magazine & brochure mockup',
    },
    coffeeBottle: {
        img: coffeeImg,
        title: 'coffee bottle mockup',
    },
    productTag: {
        img: productTagImg,
        title: 'product tag mockup',
    },
    perfumeBrand: {
        img: perfumeImg,
        title: 'perfume brand identity'
    },
}

export const WorkItem = (props: WorkPropsType) => {
    const {img, title} = works[props.workType || 'magazineFront' ];
    return (
        <StyledWork>
            <Img src={img}/>
            <WorkTitle>{title}</WorkTitle>
        </StyledWork>
    );
};




const StyledWork = styled.div`
    position: relative;
    display: inline-block;
    text-align: right;
`

const Img = styled.img`
    margin-bottom: 18px;
`

const WorkTitle = styled.h3`
    font-family: "Manrope", sans-serif;
    font-weight: 400;
    font-size: 26px;
    line-height: 1.03846;
    text-transform: lowercase;
    color: #2f2f2f;
    position: relative;
    display: inline-block;

    &::after {
        content: '';
        position: absolute;
        bottom: -8px; /* Отступ подчеркивания от текста */
        left: 0;
        width: 100%;
        height: 3px; /* Толщина подчеркивания */
        background-color: #2f2f2f; /* Цвет подчеркивания */
    }
`