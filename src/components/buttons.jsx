import React, { useState, useRef, useEffect } from 'react'
import { gsap, TimelineLite, CSSPlugin } from "gsap/all";
//svg
import { RightArrow } from "./svg";

gsap.registerPlugin(CSSPlugin);

//BUTTON ARROW hero
function BtnArrow() {
    const [change,setChange] = useState(true);
    const t1 = useRef();

    //determine t1 once
    useEffect(()=>{
            t1.current = new TimelineLite({paused:true})
            .to('.arrow-1',.5,{
            x:50, ease:'Power4.out'
            })
            .to('.arrow-2',.4,{
            x:60, ease:'Power4.out'
            },'-=.3')
            .to('.arrow-3',.4,{
            x:195, ease:'Power4.out'
            },'-=.3')
            .to('.arrow-4',.4,{
            x:195, ease:'Power4.out'
            },'-=.2');
    },[]);

    //this run every changes
    useEffect(()=>{
        if(!t1.current.isActive()){
            t1.current.restart();
        }
    },[change,t1]);

    return (
        <div onMouseOver={() => {setChange(!change)}} className="ani btn_arrow btn">
            <a href="https://lokeshkumar-dev.github.io/MyResume/" target="_blank" rel="noopener noreferrer">
            < RightArrow className="arrow arrow-3"/>
            < RightArrow className="arrow arrow-4"/>
            <h2 className="btn_arrow-link">RESUME</h2>
            < RightArrow className="arrow arrow-1"/>
            < RightArrow className="arrow arrow-2"/>
            </a>
        </div>
    )
}

//BUTTON BOX (work)
function BtnBox({bg, name, link}) {
    return (
        <div className={`btn_box ${bg} btn`}>
            <a href={link} target="_blank" rel="noopener noreferrer" className="btn_box-link">{name}</a>
        </div>
    )
}

//BUTTON SWITCH
function Switch({checkBox, checkHandle}) {
    return (
        <label className="switch">
            <input onClick={ (e) => { checkHandle(e) }} type="checkbox" ref={checkBox} defaultChecked={true}/>
            <span className="slider round"></span>
        </label>
    )
}

export { BtnArrow, BtnBox, Switch};