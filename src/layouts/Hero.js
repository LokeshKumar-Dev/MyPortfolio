import React, { useEffect } from 'react'
import { BtnArrow } from '../components/buttons'//btn

//img
import hero from '../images/hero-pc.png'

import { useDencrypt } from "use-dencrypt-effect"//text anime
import { TimelineLite, CSSPlugin } from 'gsap/all';
import gsap from 'gsap/gsap-core';
gsap.registerPlugin( CSSPlugin);

//txt anime value
const values = ["FullStack Dev", "Web Designer", "Frontend Dev", "Photographer", "Editor"];
const options = {
    chars:['_'],
    interval:70
};
export default function Hero({Mode}) {
    //Text ANIMATION
    const { result, dencrypt } = useDencrypt(options);

    //mouse action
    function valid(){
        window.addEventListener('mousemove',(e) => {
                var xPos = e.clientX;
                var yPos = e.clientY;

                gsap
                .to('.ani',0.6,{
                    x: .02 * yPos, 
                    y: .02 * xPos, 
                    ease: 'Power1.easeOut',
                    transformPerspective: 900,
                    transformOrigin: 'center'
                });
                gsap
                .to('.ani-2',0.6,{
                    x: .009 * xPos, 
                    y: .01 * yPos, 
                    ease: 'Power1.easeOut',
                    transformOrigin: 'center'
                })
        })
    }

    useEffect(() => {

        function textAnime(){
            let i = 0;
            const action = setInterval(() => {
            dencrypt(values[i]);
        
            i = i === values.length - 1 ? 0 : i + 1;
            }, 2000);
        
            return () => clearInterval(action);
        }

        //gsap anime
        const tl = new TimelineLite();
        tl.fromTo(['.a-fade-1', '.a-fade-2'],.9, {x:-300, opacity:0}, {x:0, opacity:1, stagger:.3, ease:'back(10)'})
        tl.fromTo('.a-img',.7, {x:-500,autoAlpha:0}, {x:0,autoAlpha:1, ease:'Power4.inOut'},'-=.3')
        tl.fromTo('.a-hi',.7, {x:500}, {x:0, ease:'Power4.inOut'})
        tl.fromTo('.a-am',.5, {y:100}, {y:0, ease:'Power4.inOut'},'-=.1')
        tl.fromTo('.a-lokesh',.7, {x:-500}, {x:0,stagger:{amount:.3}, ease:'Power4.inOut'},'-=.4')
        tl.fromTo('.a-kumar',.6, {y:100}, {y:0, onStart:textAnime, ease:'Power4.inOut'},'-=.1')//onstr txtanime
        tl.fromTo('.a-btn',.7, {x:-1500}, {x:0, ease:'Power4.inOut'})
        tl.fromTo('.a-self',.7, {x:-500}, {x:0, onComplete:valid, ease:'Power4.inOut'})
      }, [dencrypt]);

    return (
        <> 
            <header id="hero" className={ Mode ? 'base hero' : 'base hero light' }>
            <h3 className="ani-2 a-fade-1 hero_fade-1 u-caps">lokesh</h3>
            <h3 className="ani-2 a-fade-2 hero_fade-2 u-caps">kumar</h3>
            <div className="hero_1">
                <div className="hero_1-l">
                    <h1 className="ani a-hi u-caps bold">hi</h1>
                    <h2 className="ani a-am u-high u-caps">I AM</h2>
                </div>
                <div className="hero_1-r">
                    <h1 className="ani a-lokesh u-caps bold">lokesh</h1>
                    <h2 className="ani a-kumar u-high u-caps bold">kumar</h2>
                </div>
            </div>
            <div className="hero_2">
                <img className="ani-2 a-img hero_2-img" srcSet={hero} alt="Hero"/>
            </div>
            <div className="hero_3">
                <div className="hero_3-l">
                    <h2 className="ani a-self">A selftaught</h2>
                    <h1 className="ani a-self a-result u-caps u-high">{result}</h1>
                </div>
                <div className="a-btn hero_3-r">
                    < BtnArrow />
                </div>
            </div>    
        </header>
    </>
    )
}
