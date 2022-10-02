import { toPng } from 'html-to-image'
import React, { useCallback, useRef, useState } from 'react'
import toast from 'react-hot-toast'
import { QRCode, VisitLink } from '../../../../app'
import { Button, Loading, Modal } from '../../../../utility'
import validator from 'validator'
import { FiDownload, FiEdit2, FiEye, FiLoader, FiTrash } from 'react-icons/fi'
import { deleteDoc, doc } from 'firebase/firestore'
import { db } from '../../../../../firebase'
import { useAuth } from '../../../../../contexts'

const QRDetailModal = ({
    id,
    qrCode,
    isOpen,
    onClose,

}: {
    id: string,
    qrCode: {
        bgColor: string,
        fgColor: string,
        url: string,
        includeImage: boolean,
        imageURL: string,
        title: string,
        views: number,
        titlePosition: string,
        showTitle: boolean,
        qrSize: number,
        createdAt: string,
        editedAt: string,
    },
    isOpen: boolean,
    onClose: () => void,
}) => {
    const {
        bgColor,
        fgColor,
        url,
        includeImage,
        imageURL,
        title,
        views,
        titlePosition,
        showTitle,
        qrSize,
        createdAt,
        editedAt
    } = qrCode

    const { user } = useAuth()

    const [loading, setLoading] = useState<boolean>(false)
    const [loadingMsg, setLoadingMsg] = useState<string>('')
    const [downloading, setDownloading] = useState<boolean>(false)

    const ref = useRef<HTMLDivElement>(null)

    const saveImg = useCallback(() => {
        setDownloading(true)
        if (ref.current === null) {
            setDownloading(false)
            return
        }

        toPng(ref.current, { cacheBust: true, })
            .then((dataUrl) => {
                const link = document.createElement('a')
                link.download = title || 'qr-code.png'
                link.href = dataUrl
                link.click()
                setDownloading(false)
            })
            .catch((err) => {
                toast.error('Image URL protected, use another!')
                console.log(err)
                setDownloading(false)
            })
    }, [ref])

    const handleDeleteQR = () => {
        setLoading(true)
        setLoadingMsg('Deleting QR Code...')
        setTimeout(() => {
            deleteDoc(doc(db, `users/${user?.uid}/qrcodes/${id}`))
                .then(() => {
                    toast.success('QR Code deleted successfully!')
                    setLoading(false)
                    setLoadingMsg('')
                    onClose()
                })
                .catch((err) => {
                    toast.error('Something went wrong!')
                    setLoading(false)
                    setLoadingMsg('')
                    console.log(err)
                })
        }, 1000)
    }

    return (
        <Modal
            isOpen={isOpen}
            onClose={onClose}
            title='QR Code Details'
        >
            <div className="flex flex-col justify-center items-center md:items-start md:justify-start w-full md:flex-row gap-6 mt-3">
                <div className='rounded-lg w-fit h-fit flex flex-col gap-3 justify-center items-center relative'>
                    <QRCode
                        id='capture'
                        reference={ref}
                        bgColor={bgColor}
                        fgColor={fgColor}
                        url={`https://qr.createxp.in/qr?id=${user?.uid}-${id}`}
                        qrSize={qrSize}
                        includeImage={includeImage}
                        imageURL={imageURL}
                        showTitle={showTitle}
                        title={title}
                        titlePosition={titlePosition}
                        titleSize={'20px'}
                    />
                    {
                        validator.isURL(url) && (
                            <Button
                                icon={
                                    !downloading ?
                                        <FiDownload size={'16px'} />
                                        : <FiLoader size={'16px'} className='animate-spin' />
                                }
                                onClick={saveImg}
                                text={
                                    downloading ? 'Downloading...' : 'Download'
                                }
                                className='px-4'
                                disabled={downloading}
                                wFull
                            />
                        )
                    }
                </div>
                <hr className='w-1/2 md:hidden' />
                <div className="flex flex-col gap-4 w-full">
                    <div className="flex flex-col gap-1">
                        <div className="flex items-center gap-2">
                            <p className='text-2xl'>
                                {title}
                            </p>
                            <VisitLink url={url} />
                        </div>
                        <p className='text-sm text-neutral-500'>
                            {url}
                        </p>
                        <div className="flex gap-2 mt-1">
                            <p className='text-xs text-neutral-400'>
                                Created:{createdAt}
                            </p>
                            <p className='text-xs text-neutral-400'>
                                Edited:{editedAt}
                            </p>
                        </div>
                    </div>
                    <div className="flex items-center gap-2">
                        <FiEye size={18} />
                        <span className='text-2xl'>{views}</span>
                    </div>
                    <div className="flex flex-col gap-2">
                        <Button
                            icon={<FiEdit2 size={16} />}
                            text={'Edit QR'}
                            wFull={true}
                            variant='outline'
                            disabled={loading}
                        />
                        <Button
                            icon={<FiTrash size={16} />}
                            text={'Delete QR'}
                            wFull={true}
                            variant='outline'
                            onClick={handleDeleteQR}
                            disabled={loading}
                        />
                        {
                            loading && (
                                <Loading inline message={loadingMsg} />
                            )
                        }
                    </div>
                </div>
            </div>
        </Modal>
    )
}

export default QRDetailModal