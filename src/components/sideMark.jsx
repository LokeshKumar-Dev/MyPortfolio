import React from 'react'

export default function SideMark({layout, name}) {
    return (
        <div className={`${layout}-l`}>
            <h1 className={`w-ani u-caps u-noselect`}>{name}</h1>
        </div>
    )
}
