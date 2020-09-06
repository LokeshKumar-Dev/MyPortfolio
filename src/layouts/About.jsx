import React, { useRef, useEffect } from 'react'
import SideMark from '../components/sideMark'
import gsap from 'gsap/gsap-core';
import { ScrollTrigger } from 'gsap/ScrollTrigger';
import Emoji from '../components/Emoji';

//img
import about from '../images/about.jpg'
import about_phone from '../images/about-phone.webp'

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger);
}
export default function About({Mode}) {
    var trigger = useRef(null);
    var tl = useRef(null);
    
    //mouse action
    function validA(){
        window.addEventListener('mousemove',(e) => {
                var xPos = e.clientX;
                var yPos = e.clientY;

                gsap
                .to('.A-ani',0.6,{
                    x: .009 * xPos, 
                    y: .01 * yPos, 
                    ease: 'Power1.easeOut',
                    transformOrigin: 'center'
                })
        })
    }

    useEffect(() => {
        var tl = gsap.timeline({scrollTrigger:{
            trigger:trigger.current,
            start:'top+=50 bottom-=200',
            toggleActions: "restart pause play reverse"
        }});
        tl
        .fromTo('.a-img-a',.8, {x:-500, scale:1.3}, {x:0, scale:1, ease:'Power4.in'})
        .from('.a-about-a',.8, {y:-1000, scale:1.1,onComplete:validA, ease:'Power4.in'},'-=.4');
    },[tl, trigger]);
    return (
        <section ref={trigger} id="about" className={ Mode ? 'base about scroll-A' : 'base about scroll-A light' }>
            <SideMark layout="about" name="about me"/>
            <div className="about-r">
                <div className="about-r--img">
                    <img className="A-ani a-img-a" srcSet={`${about_phone} 1x, ${about} 2x`} alt="about"/>          
                </div>
                <div className="A-ani a-about-a about-r--cont">
                    <article className="about__p">
<h6 className="about__p--head">Who<Emoji symbol="🙍‍♂️" label="smily"/></h6>
                        <p>
                                As I said before <span className="u-high-bg u-italic">" I AM LOKESH KUMAR "</span>,
                             My friends call me <span className="u-high-bg">LOKI</span> and others call me <span className="u-high-bg">LOKESSSH</span>. 
                             An engineering student who loves <Emoji symbol="😍" label="smily"/> 
                            <span className="u-high"> " Photography<Emoji symbol="📷" label="smily"/> "</span>,
                            <span className="u-high"> " Traveling<Emoji symbol="✈" label="smily"/>  "</span>,
                            <span className="u-high"> " Coding "</span>.
                        </p>

                        <h6 className="about__p--head">What<Emoji symbol="🤔" label="smily"/> </h6>
                        <p>
                            I do <span className="u-high-bg u-italic">WEB DESIGNING<Emoji symbol="🎨" label="smily"/>  </span>  
                             on <span className="u-high">" Figma "</span> &  
                            <span className="u-high-bg u-italic"> WEB DEVELOPING<Emoji symbol="✍" label="smily"/></span> on 
                            <span className="u-high"> " VScode " </span>
                             using 
                            <span className="u-high"> " Html "</span>,
                            <span className="u-high"> " Css/Scss-'BEM' "</span>,
                            <span className="u-high"> " Javascript "</span>,
                            <span className="u-high"> " React "</span>,
                            <span className="u-high"> " Redux "</span>,
                            <span className="u-high"> " Gsap "</span>,
                            <span className="u-high"> " Django "</span>.
                             It is also important to use a good Images<Emoji symbol="📸" label="smily"/> /Videos<Emoji symbol="🎥" label="smily"/>  on your Web page/Other uses, 
                            So I do it on 
                            <span className="u-high"> " Photoshop "</span>,
                            <span className="u-high"> " Filmora "</span>.
                        </p>

                        <h6 className="about__p--head">Why<Emoji symbol="🙄" label="smily"/> </h6>
                        <p>
                            I love<Emoji symbol="❤ " label="smily"/>doing awesome<Emoji symbol="🤩" label="smily"/>  things in <span className="u-high"> " easy<Emoji symbol="😃" label="smily"/>  and effective way "</span> for nice people. 
                            So you can Beleive in me to do things in <span className="u-high"> " simpler and classy<Emoji symbol="😎" label="smily"/>  way "</span>.
                        </p>
                    </article>
                </div>
            </div>
        </section>
    )
}
