import React from 'react'
import DisplayQR from './DisplayQR'
import NewQRForm from './NewQRForm'

const Generate = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row gap-8 md:gap-2 items-center'>
            <NewQRForm />
            <hr className='w-1/2 md:hidden' />
            <DisplayQR />
        </div>
    )
}

export default Generate