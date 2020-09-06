import React from 'react';
import { BtnBox } from './buttons';

export default function Works({img_url, head, subHead, trigger, link, link_sc}) {
    return (
        <>
            <div className='w-ani-2 works_cont'>
                <img src={img_url.weather || img_url.estore || img_url.movie} alt="work" className="works_cont-img"/>
                <h2 className="works_cont-head u-caps">{head}</h2>
                <p className="works_cont-subHead">{subHead}</p>
                <div className="works_cont-btn">
                    <BtnBox bg="bg-blue" link={link_sc} name="Live"/>
                    <BtnBox bg="bg-sec" link={link} name="Source code"/>
                </div>
            </div>
        </>
    )
}
