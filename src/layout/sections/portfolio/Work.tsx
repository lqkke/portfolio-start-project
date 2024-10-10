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

export const Work = (props: WorkPropsType) => {
    const {img, title} = works[props.workType || 'magazineFront' ];
    return (
        <StyledWork>
            <Img src={img}/>
            <WorkTitle>{title}</WorkTitle>
        </StyledWork>
    );
};




const StyledWork = styled.div`
`

const Img = styled.img`
`

const WorkTitle = styled.h3``