import React, { useRef, useState } from 'react'

import Navbar from './layouts/Navbar'
import Hero from './layouts/Hero'
import Work from './layouts/Work'
import About from './layouts/About'
import Footer from './layouts/Footer'

export default function App() {
    const trigger = useRef();
    var [Mode, setMode] = useState(true);

    return (
        <>
            <Navbar Mode={Mode} setMode={setMode} trigger={trigger}/>
            <Hero Mode={Mode}/>
            <Work Mode={Mode}/>
            <About Mode={Mode}/>
            <Footer Mode={Mode}/>
        </>
    )
}
