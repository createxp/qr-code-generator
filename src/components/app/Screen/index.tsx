import React from 'react'
import Navbar from '../Navbar'
import { ScreenProps } from './interface'
const Screen = (props: ScreenProps) => {
    const { className } = props
    return (
        <div className={[
            "lg:px-[160px] p-4 flex flex-col gap-10 pb-[100px]",
            className
        ].join(' ')}>
            <Navbar />
            {props.children}
        </div>
    )
}

export default Screen