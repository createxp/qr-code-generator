import React, { useCallback, useRef, useState } from 'react'
import { useGenerateQR } from '../../../../../contexts'
import { FiDownload, FiLoader } from 'react-icons/fi'
import { Button } from '../../../../utility';
import { toPng } from 'html-to-image';
import validator from 'validator';
import toast from 'react-hot-toast';
import { QRCode } from '../../../../app';

const DisplayQR = () => {
    const {
        title,
        url,
        bgColor,
        fgColor,
        qrSize,
        includeImage,
        imageURL,
        showTitle,
        titlePosition,
    } = useGenerateQR()

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

    return (
        <div className='p-1 md:w-1/2 flex items-start md:items-center justify-center md:justify-end'>
            <div className="flex flex-col items-center gap-3">
                <p className='text-2xl font-medium text-neutral-500'>Quick View</p>
                <div className='bg-white rounded-lg w-[340px] min-h-[360px] p-3 flex justify-center items-center border relative' style={{ backgroundColor: bgColor }}>
                    <QRCode
                        id='capture'
                        reference={ref}
                        bgColor={bgColor}
                        fgColor={fgColor}
                        url={url}
                        qrSize={qrSize}
                        includeImage={includeImage}
                        imageURL={imageURL}
                        showTitle={showTitle}
                        title={title}
                        titlePosition={titlePosition}
                    />
                    {
                        validator.isURL(url) && (
                            <div className='flex absolute -bottom-3 transform translate-y-full'>
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
                                    rounded={true}
                                    className='px-4'
                                    disabled={downloading}
                                />
                            </div>
                        )
                    }
                </div>
            </div>
        </div>
    )
}

export default DisplayQR