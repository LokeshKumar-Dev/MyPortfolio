import React, { useRef, useEffect } from 'react'
import Works from '../components/Works'
import SideMark from '../components/sideMark';
import gsap from 'gsap/gsap-core';
import { ScrollTrigger, CSSPlugin } from 'gsap/all';

//img
import movie from '../images/movie.jpg'
import weather from '../images/weather.jpg'
import estore from '../images/estore.jpg'

if (typeof window !== "undefined") {
    gsap.registerPlugin(ScrollTrigger, CSSPlugin);
}
export default function Work({Mode}) {
    var trigger = useRef(null);
    //obj works
    const work_detail = [
        {img_url:{weather}, head:'Weather', subHead:"React & Redux", link: "https://github.com/LokeshKumar-Dev/Whats-Weather", link_sc: "https://lokeshkumar-dev.github.io/Whats-Weather/"},
        {img_url:{estore}, head:'Estore', subHead:"Django", link: "https://github.com/LokeshKumar-Dev/Dstore", link_sc: "https://lokesh123.pythonanywhere.com"},
        {img_url:{movie}, head:'MovieBuff', subHead:"React Hooks and OMDb api", link: "https://github.com/LokeshKumar-Dev/MovieBuff", link_sc: "https://lokeshkumar-dev.github.io/MovieBuff/"}
    ];

    function works(work){//img-url, head, subHead
        return(
            <Works key={work.head} img_url={work.img_url} head={work.head} subHead={work.subHead} link={work.link} link_sc={work.link_sc} trigger={trigger}/>
        )
    }
    //mouse action
    function validW(){
        window.addEventListener('mousemove',(e) => {
                var xPos = e.clientX;
                var yPos = e.clientY;

                gsap
                .to('.w-ani',0.4,{
                    y: .02 * yPos, 
                    ease: 'Power3.easeOut',
                    transformOrigin: 'center'
                });
                gsap
                .to('.w-ani-2',0.6,{
                    x: .009 * xPos, 
                    y: .01 * yPos, 
                    ease: 'Power1.easeOut',
                    transformOrigin: 'center'
                })
        })
    }

    useEffect(() => {
        gsap
        .fromTo('.works_cont',.7, {y:900}, {y:0, stagger:.4, ease:'Power3.out', scrollTrigger:{
            trigger:trigger.current,
            start:'top+=50 bottom-=200',
            //toggleActions: "restart pause play reverse"
        }, onComplete:validW});
    },[ trigger ]);
    return (
        <section id="work"  className={ Mode ? 'base work scroll-A' : 'base work scroll-A light' } ref={(div) => {trigger.current = div}}>
            <SideMark layout="work" name="works"/>
            <div className="work-r">
                {work_detail.map((work) => {return works(work)})}
            </div>
        </section>
    )
}
