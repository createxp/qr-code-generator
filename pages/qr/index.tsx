import { doc, getDoc, increment, onSnapshot, setDoc } from 'firebase/firestore'
import { useRouter } from 'next/router'
import React, { useEffect, useState } from 'react'
import { FiLoader } from 'react-icons/fi'
import { db } from '../../src/firebase'
import { publicRoute } from '../../src/routes'

const VisitQRLink = () => {
    const router = useRouter()
    const { id } = router.query

    const [notFound, setNotFound] = useState(false)

    useEffect(() => {
        if (id) {
            const user = (id as string).split('-')[0]
            const qr = (id as string).split('-')[1]
            if (!user || !qr) {
                setNotFound(true)
                return
            }
            const docRef = doc(db, 'users', user, 'qrcodes', qr)
            getDoc(docRef).then((doc) => {
                if (doc.exists()) {
                    const data = doc.data()
                    setDoc(docRef, {
                        views: increment(1)
                    }, { merge: true }).then(() => {
                        router.push(data?.url)
                    })
                } else {
                    setNotFound(true)
                }
            })
        }
    }, [id])
    return (
        <div className='flex flex-col justify-center items-center w-full h-screen text-xl text-center'>
            {id ?
                (!notFound ?
                    (
                        <h2 className="animate-pulse flex flex-col justify-center items-center gap-2">
                            <span>
                                Redirecting
                            </span>
                            <FiLoader className='animate-spin' />
                        </h2>
                    ) : (
                        <h2 className="flex flex-col justify-center items-center gap-4">
                            <img src="/images/brokenLink.png" width={'36px'} alt="" />
                            <span>
                                QR Code
                                <br />
                                does not exist
                            </span>
                        </h2>
                    )
                ) : (
                    <h2 className="flex flex-col justify-center items-center gap-4">
                        <img src="/images/brokenLink.png" width={'36px'} alt="" />
                        <span>
                            Broken Link
                        </span>
                    </h2>
                )
            }
            <a href='https://qr.createxp.in' className="flex flex-col justify-center items-center absolute bottom-12 gap-1">
                <p className='text-sm text-neutral-500'>
                    Create & Manage your QR Codes
                </p>
                <img src="/images/createxp.png" width={'120px'} alt="" />
            </a>
        </div>
    )
}

export default publicRoute(VisitQRLink)