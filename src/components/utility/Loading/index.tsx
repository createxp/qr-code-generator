import React from 'react'
import Image from 'next/image'
import { LoadingProps } from './interface'
import { FiLoader } from 'react-icons/fi'

const Loading = ({
    message,
    modal,
    inline
}: LoadingProps) => {
    if (inline) {
        return (
            <div className="flex w-full justify-center m-1 gap-2 items-center">
                <FiLoader className='animate-spin' size={24} />
                {message && <div>{message}</div>}
            </div>
        )
    }
    if (modal) {
        return (
            <div className='w-full h-screen fixed top-0 right-0 bg-black bg-opacity-40 flex  items-center justify-center z-50'>
                <div className="bg-white py-10 px-4 rounded shadow min-w-[280px] flex flex-col gap-2 items-center justify-center">
                    <FiLoader className='animate-spin' size={32} />

                    {message && <div>{message}</div>}
                </div>
            </div>
        )
    }
    return (
        <div className="w-full h-screen fixed top-0 right-0 bg-white z-50">
            <div className="w-full h-full flex flex-col items-center gap-2 justify-center">
                <FiLoader className='animate-spin' size={36} />
                {message && <div>{message}</div>}
            </div>
        </div>
    )
}

export default Loading