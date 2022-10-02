import { collection, DocumentData, onSnapshot } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useAuth } from '../../../../contexts'
import { db } from '../../../../firebase'
import ViewQRCode from './ViewQRCode'


const Saved = () => {
    const { user } = useAuth()
    const [savedQRs, setSavedQRs] = useState<DocumentData[]>([])

    useEffect(() => {
        onSnapshot(collection(db, `users/${user?.uid}/qrcodes`), (snapshot) => {
            setSavedQRs(snapshot.docs.map(doc => {
                return { ...doc.data(), id: doc.id }
            }))
        })
    }, [user])

    return (
        <>
            {
                savedQRs.length > 0 ? (

                    <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12 place-items-center'>
                        {
                            savedQRs.map((qr, index) => (
                                <ViewQRCode
                                    id={qr.id}
                                    key={index}
                                    bgColor={qr.bgColor}
                                    fgColor={qr.fgColor}
                                    url={qr.url}
                                    includeImage={qr.includeImage}
                                    imageURL={qr.imageURL}
                                    title={qr.title}
                                    views={qr.views}
                                    titlePosition={qr.titlePosition}
                                    showTitle={qr.showTitle}
                                    qrSize={qr.qrSize}
                                />
                            ))
                        }
                    </div>
                ) : (
                    <div className='flex flex-col items-center gap-4'>
                        <div className='text-2xl font-semibold'>No QR Codes Saved</div>
                        <div className='text-gray-500 text-center'>You can save QR Codes by clicking on the <span className='font-semibold'>Save</span> button on the <span className='font-semibold'>Generate</span> page.</div>
                    </div>
                )
            }
        </>
    )
}

export default Saved