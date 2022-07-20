import React from 'react';
import { BlockText, BlockTitle } from "../../Typography";

const AboutUsBlock = () => {
    return (
        <div className='block-container'>
            <BlockTitle>Хто ми</BlockTitle>
            <BlockText>Ми благодійний фонд, який займається допомогою цивільного населення які постраждали в результаті
                російського вторгнення на територію України, також ми допомагаємо нашим воїнам на передовійі.
            </BlockText>
        </div>
    )
}

export default AboutUsBlock;
