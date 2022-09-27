import React from 'react'
import Image from 'next/image'
import qrCodeImg from '../../public/images/createxpQR.png'
import qrCodes from '../../public/images/qrCodes.png'
import { Button } from '../../src/components/utility'
import { FcGoogle } from 'react-icons/fc'
import { useAuth } from '../../src/contexts'

const Login = () => {
    const { signInWithGoogle, user } = useAuth()
    return (
        <div className='h-screen grid place-items-center relative'>
            {/* <div className="absolute top-[100px] rotate-45 z-index">
                <Image src={qrCodeImg} />
            </div>
            <div className="absolute top-[100px] rotate-0 left-[550px] z-index">
                <Image src={qrCodeImg} />
            </div>
            <div className="absolute top-[100px] rotate-[135deg] left-[600px] z-index">
                <Image src={qrCodeImg} />
            </div>
            <div className="absolute top-[100px] rotate-[70deg] left-[800px] z-index">
                <Image src={qrCodeImg} />
            </div> */}
            <div className={[
                "absolute top-[100px]",
            ].join()}>
                <Image src={qrCodes} />
            </div>
            <div className='bg-white p-20 border rounded-lg flex flex-col justify-center items-center gap-9 z-10'>
                <h2 className={[
                    'text-2xl text-center font-bold',
                    'md:text-4xl'
                ]
                    .join(" ")}>Track all your QRs <br />
                    in one place.
                </h2>
                <hr className='w-1/2' />
                {
                    !user && (
                        <Button icon={<FcGoogle />} text={'Sign in with Google'} onClick={signInWithGoogle} />
                    )
                }
            </div>

        </div>


    )
}

export default Login