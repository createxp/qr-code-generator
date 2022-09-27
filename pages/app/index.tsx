import React from 'react'
import { Generate } from '../../src/components/pages'
import { GenerateQRProvider } from '../../src/contexts/GenerateQR'

const App = () => {

    return (
        <div className='p-1 select-none'>
            <GenerateQRProvider>
                <Generate />
            </GenerateQRProvider>
        </div>
    )
}

export default App