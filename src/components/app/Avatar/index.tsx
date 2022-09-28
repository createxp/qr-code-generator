import Image from 'next/image'
import React, { Fragment, useState } from 'react'
import { useAuth } from '../../../contexts'
import { Menu, Transition } from '@headlessui/react'
import { FiLogOut } from 'react-icons/fi'
import toast from 'react-hot-toast'
import { Loading } from '../../utility'

const Avatar = () => {
    const { userData, logOut } = useAuth()
    const [loading, setLoading] = useState(false)
    const handleLogout = () => {
        setLoading(true)
        setTimeout(() => {
            logOut().then(() => {

                toast.success('Logged out successfully')
                setLoading(false)

            }).catch((err) => {

                toast.error(err.message)
                setLoading(false)
            })
        }, 1000)
    }
    return (
        <div className='w-10 h-10 rounded-full absolute right-0 flex justify-center items-center'>
            <Menu>
                <Menu.Button>
                    <Image src={userData?.photoURL} alt="avatar" className='w-full h-full object-cover rounded-full' layout='fill' />
                </Menu.Button>
                <Transition
                    as={Fragment}
                    enter="transition ease-out duration-100"
                    enterFrom="transform opacity-0 scale-95"
                    enterTo="transform opacity-100 scale-100"
                    leave="transition ease-in duration-75"
                    leaveFrom="transform opacity-100 scale-100"
                    leaveTo="transform opacity-0 scale-95"
                >
                    <Menu.Items className="absolute right-0 top-full w-48 mt-2 origin-top-right bg-white divide-y divide-gray-100 rounded-md shadow-lg ring-1 ring-black ring-opacity-5 focus:outline-none">
                        <div className="px-1 py-1 ">
                            {/* <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={[
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'group flex rounded-md items-center w-full px-2 py-2 text-sm'
                                        ].join(' ')}
                                    >
                                        Your Profile
                                    </button>
                                )}
                            </Menu.Item> */}
                            <Menu.Item>
                                {({ active }) => (
                                    <button
                                        className={[
                                            active ? 'bg-gray-100 text-gray-900' : 'text-gray-700',
                                            'group flex gap-1 rounded-md items-center w-full px-2 py-2 text-sm'
                                        ].join(' ')}
                                        onClick={handleLogout}
                                    >
                                        <FiLogOut />
                                        Logout
                                    </button>
                                )}
                            </Menu.Item>
                        </div>
                    </Menu.Items>
                </Transition>
            </Menu>
            {
                loading && <Loading />
            }
        </div>
    )
}

export default Avatar