import React from 'react'
import { useScreen } from '../../../contexts'
import { navbarTabs } from '../../../data'
import Avatar from '../Avatar'

const Navbar = () => {
    const { selectedTab, setSelectedTab } = useScreen()
    return (
        <div className='w-full flex justify-center items-center py-5 select-none relative'>
            <div className='flex gap-1 px-1 py-2 border border-neutral-800 w-fit rounded-full relative transition-all'>
                <div className={[
                    "slider absolute w-[100px] p-4 rounded-full top-1/2 -translate-y-1/2 bg-neutral-800 transition-all",
                    selectedTab === 0 ? "left-1" : "left-[51%]"
                ].join(' ')}>
                </div>
                {navbarTabs.map((tab, index) => (
                    <div key={index} className={[
                        'flex items-center justify-center cursor-pointer whitespace-nowrap text-sm w-[100px] z-10',
                        selectedTab === index ? 'text-white' : 'text-neutral-800'
                    ].join(' ')} onClick={() => setSelectedTab(index)}>
                        {tab}
                    </div>
                ))}
            </div>
            <Avatar />
        </div>
    )
}

export default Navbar