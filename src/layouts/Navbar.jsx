import React, { useState, useEffect, useRef } from 'react'
import { Switch } from '../components/buttons'
import { TextPlugin, TimelineLite, CSSRulePlugin } from 'gsap/all';
import gsap from 'gsap/gsap-core';
import { Linear } from 'gsap/all';
import useDencrypt from 'use-dencrypt-effect';
import { Link } from 'react-scroll'

gsap.registerPlugin( TimelineLite, CSSRulePlugin, TextPlugin );

//txt anime value
const values = ["|Lokesh.kumara|", "|lo.ki|"];
const options = {
    chars: ["|"," "],
    interval:70
};

export default function Navbar({trigger, Mode, setMode}) {
    const [toggle,setToggle] = useState(false);
    const nav_dash = useRef();

    //checkbox
    const checkBox = useRef();
    function checkHandle(e){
        if ( checkBox.current.checked === true){
            setMode(true);
        }else{
            setMode(false);
        }
    }
    
    //Text ANIMATION
    const { result, dencrypt } = useDencrypt(options);

    //determine t1 once
    useEffect(() => {
        //txt anime
        function nameHandle(e = 0){
            let i = e;
            dencrypt(values[i]);
        }
        nameHandle(0);

        //hamburger menu
        nav_dash.current = new TimelineLite({paused:true})
        .to(['.navigation-sec','.navigation__body'],.5,{
        yPercent:190, ease:'Power3.inOut', stagger:{ amount:.08 }
        })
        .to('.navigation__body-link',.5,{
           xPercent:-300, ease:'ease.in', stagger:{ amount:.3 }
        },'-=.2 ')
        .reverse();
        //txt anime
        gsap
        .to('.a-loki',.7, { onStart:nameHandle,onStartParams:['1'], onReverseComplete:nameHandle,onReverseCompleteParams:['0'], ease:Linear.easeInOut , scrollTrigger:{
            trigger:trigger.current,
            start:"top+=300 top",
            toggleActions:"restart play play reverse"
        }});
    },[nav_dash,trigger,dencrypt]);

    //this run every changes
    useEffect(()=>{
        if(!nav_dash.current.isActive()){
            nav_dash.current.reversed(!toggle);
        }
    },[toggle,nav_dash]);
    return (
        <nav className={ Mode ? 'nav scroll-A' : 'nav scroll-A light' }>
            <Switch checkBox={checkBox} checkHandle={checkHandle}/>
            <div className="h1-cont">
                <h1 className="a-loki u-noselect u-caps">{result}</h1>
            </div>
            <div className="navigation u-noselect">
                <NavBody toggle={toggle} setToggle={setToggle}/>
                <div className="navigation-sec">&nbsp;</div>
                <div className={ !toggle ? `navigation-icon` : `navigation-icon open` } onClick={() => { setToggle(!toggle) }}>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
            </div>
            </nav>
    )
}

function NavBody({ toggle, setToggle }) {
    return (
        <div onClick={() => { setToggle(!toggle) }} className="navigation__body">
            <Link className="navigation__body-link" to="hero" spy={true} smooth={true} duration={500} onClick={() => { setToggle(!toggle) }}>Home</Link>
            <Link className="navigation__body-link" to="work" spy={true} smooth={true} duration={500} onClick={() => { setToggle(!toggle) }}>Works</Link>
            <Link className="navigation__body-link" to="about" spy={true} smooth={true} duration={500} onClick={() => { setToggle(!toggle) }}>About</Link>
            <Link className="navigation__body-link" to="contact" spy={true} smooth={true} duration={500} onClick={() => { setToggle(!toggle) }}>Contact</Link>
        </div>
    )
}
