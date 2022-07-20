import React from 'react';
import { BlockText, BlockTitle } from "../../Typography";

const AboutUsBlock = ({aboutUsBlockTitle, aboutUsBlockText}) => {
    return (
        <div className='block-container'>
            <BlockTitle>{aboutUsBlockTitle}</BlockTitle>
            <BlockText>{aboutUsBlockText}</BlockText>
        </div>
    )
}

export default AboutUsBlock;
