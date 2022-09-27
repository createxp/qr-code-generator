import React from 'react'
import DisplayQR from './DisplayQR'
import NewQRForm from './NewQRForm'

const Generate = () => {
    return (
        <div className='flex flex-col-reverse md:flex-row gap-2'>
            <NewQRForm />
            <DisplayQR />
        </div>
    )
}

export default Generate