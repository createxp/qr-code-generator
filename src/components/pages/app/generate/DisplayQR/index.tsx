import React from 'react'
import { useGenerateQR } from '../../../../../contexts'


const DisplayQR = () => {
    const { qrSize } = useGenerateQR()
    return (
        <div className='bg-red-200 mt-2 rounded p-1 mx-1 w-full md:w-1/2' style={{
            width: `${qrSize}px`,
            height: `${qrSize}px`,
        }}>
            hello
        </div>
    )
}

export default DisplayQR