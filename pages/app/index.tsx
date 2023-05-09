import React from 'react'
import { Screen } from '../../src/components/app'
import { Generate, Saved } from '../../src/components/pages/app'
import { GenerateQRProvider, useScreen } from '../../src/contexts'
import { privateRoute } from '../../src/routes'

const App = () => {
    const { selectedTab } = useScreen()
    return (
        <Screen className='select-none'>
            {selectedTab === 0 && (
                <Saved />
            )}
            {selectedTab === 1 && (
                <GenerateQRProvider>
                    <Generate />
                </GenerateQRProvider>
            )}
        </Screen>
    )
}

export default privateRoute(App)