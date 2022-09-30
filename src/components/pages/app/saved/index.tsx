import { collection, DocumentData, onSnapshot } from 'firebase/firestore'
import React, { useEffect, useState } from 'react'
import { useAuth } from '../../../../contexts'
import { db } from '../../../../firebase'
import ViewQRCode from './ViewQRCode'


const Saved = () => {
    const { user } = useAuth()
    const [savedQRs, setSavedQRs] = useState<DocumentData[]>([])
    console.log(savedQRs)

    useEffect(() => {
        onSnapshot(collection(db, `users/${user?.uid}/qrcodes`), (snapshot) => {
            setSavedQRs(snapshot.docs.map(doc => {
                return { ...doc.data(), id: doc.id }
            }))
        })
    }, [user])

    return (
        <div className='grid md:grid-cols-3 lg:grid-cols-4 gap-8 md:gap-12 place-items-center'>
            {
                savedQRs.map((qr, index) => (
                    <ViewQRCode
                        key={index}
                        bgColor={qr.bgColor}
                        fgColor={qr.fgColor}
                        url={qr.url}
                        includeImage={qr.includeImage}
                        imageURL={qr.imageURL}
                        title={qr.title}
                        views={qr.views}
                    />
                ))
            }
        </div>
    )
}

export default Saved