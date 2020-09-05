import React from 'react'
import { HtmlSvg, JsSvg, CssSvg, ReduxSvg, DjSvg, PsSvg, ReactSvg, FilmoraSvg, FigmaSvg, LinkedinSvg, TwitterSvg } from '../components/svg'
import gsap from 'gsap/gsap-core';

export default function Footer({Mode}) {
    //mouse action
    function validF(){
        window.addEventListener('mousemove',(e) => {
                var xPos = e.clientX;
                var yPos = e.clientY;

                gsap
                .to('.F-ani',0.6,{
                    x: .01 * xPos, 
                    y: .01 * yPos, 
                    ease: 'Power1.easeOut',
                    transformOrigin: 'center'
                });
                gsap
                .to('.F-ani-2',0.6,{
                    x: .009 * xPos, 
                    ease: 'Power1.easeOut',
                    transformOrigin: 'center'
                });
        })
    }
    return (
        <section onMouseEnter={validF} id="contact" className={ Mode ? 'base Footer scroll-A' : 'base Footer scroll-A light' }>
            <div className="toolBelt">
                <h1 className="F-ani-2 toolBelt-h1 u-noselect">My ToolBelt</h1>
                <div className="toolBelt-svg">
                    <div className="toolBelt-svg--up">
                        <HtmlSvg name="F-ani html svg" p="html-p"/>
                        <JsSvg name="F-ani js svg" p="js-p"/>
                        <CssSvg name="F-ani css svg" p="css-p"/>
                        <ReactSvg name="F-ani react svg" p="react-p"/>
                        <FigmaSvg name="F-ani figma svg" p="figma-p"/>
                    </div>
                    <div className="toolBelt-svg--down">
                        <ReduxSvg name="F-ani redux svg" p="redux-p"/>
                        <DjSvg name="F-ani dj svg" p="dj-p"/>
                        <PsSvg name="F-ani ps svg" p="ps-p"/>
                        <FilmoraSvg name="F-ani filmmora svg" p="filmora-p"/>
                    </div>
                </div>
            </div>
            <footer>
                <a href="mailto:M.A.LokeshKumar@gmail.com" className="mail">M.A.LokeshKumar@gmail.com</a>
                <div className="socialMedia">
                    <a href="http://www.linkedin.com/in/lokesh-kumar-aa98441b3"><LinkedinSvg name="linkedin svg"/></a>
                    <a href="https://twitter.com/intent/tweet?screen_name=LokeshK81259967&ref_src=twsrc%5Etfw" data-show-count="false"><TwitterSvg name="twitter svg"/></a>
                </div>
                <p className="copy">Copyright &copy; 2020 | LokeshKumar | ALL RIGHTS RESERVED</p>
            </footer> 
        </section>
    )
}
