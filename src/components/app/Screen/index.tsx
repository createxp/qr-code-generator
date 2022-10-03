import React from 'react'
import Navbar from '../Navbar'
import { ScreenProps } from './interface'
const Screen = (props: ScreenProps) => {
    const { className } = props
    return (
        <div>
            <Navbar />
            <div className='h-5 md:h-10'></div>
            <div className={[
                "lg:px-[160px] p-4 flex flex-col  pb-[100px]",
                className
            ].join(' ')}>
                {props.children}
            </div>
        </div>
    )
}

export default Screen