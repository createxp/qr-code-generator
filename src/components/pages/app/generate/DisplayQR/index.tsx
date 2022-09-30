import React, { useCallback, useRef, useState } from 'react'
import { useGenerateQR } from '../../../../../contexts'
import { QRCodeSVG, QRCodeCanvas } from 'qrcode.react';
import { FiCopy, FiDownload, FiLoader } from 'react-icons/fi'
import { Button } from '../../../../utility';
import { toPng } from 'html-to-image';
import validator from 'validator';
import toast from 'react-hot-toast';

const DisplayQR = () => {
    const {
        title,
        url,
        bgColor,
        fgColor,
        qrSize,
        includeImage,
        imageURL,
        showTitle
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
        <div className='p-1 md:w-1/2 flex items-center justify-center md:justify-end'>
            <div className='bg-white rounded-lg w-[340px] min-h-[360px] p-3 flex justify-center items-center border relative' style={{ backgroundColor: bgColor }}>
                <div id="capture" className='p-4 rounded' ref={ref} style={{
                    backgroundColor: bgColor,
                }} >
                    {
                        url === '' ? (
                            <div className="flex-1">
                                <p className='text-gray-500 text-center'>
                                    Enter URL to generate
                                    <br />
                                    QR Code
                                </p>
                            </div>
                        ) : validator.isURL(url) ? (
                            <div className="relative">
                                <QRCodeSVG
                                    id='image'
                                    value={url}
                                    size={qrSize}
                                    bgColor={bgColor}
                                    fgColor={fgColor}
                                    level={"L"}
                                    includeMargin={false}
                                />
                                {
                                    includeImage && imageURL && (
                                        <img
                                            src={imageURL}
                                            alt='logo'
                                            className='absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2'
                                            style={{
                                                height: qrSize / 6,
                                            }}
                                        />
                                    )
                                }
                            </div>
                        ) : (
                            <div className="flex-1">
                                <p className='text-red-500'>
                                    Please enter a valid URL
                                </p>
                            </div>
                        )
                    }
                    {
                        showTitle && title && (
                            <p className='mt-2 text-2xl' style={{
                                color: fgColor,
                            }}>{title}</p>
                        )
                    }
                </div>
                {
                    validator.isURL(url) && (
                        <div className='flex gap-7 absolute -bottom-2 transform translate-y-full'>
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
                            {/* <Button icon={<FiCopy size={'16px'} />} rounded={true}
                                onClick={copyImg}
                            /> */}
                        </div>
                    )
                }
            </div>
        </div>
    )
}

export default DisplayQR