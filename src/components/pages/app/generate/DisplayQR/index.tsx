import React from 'react'
import { useGenerateQR } from '../../../../../contexts'
import { QRCodeSVG, QRCodeCanvas } from 'qrcode.react';
import { FiCopy, FiDownload } from 'react-icons/fi'
import { Button } from '../../../../utility';

const DisplayQR = () => {
    const {
        title,
        url,
        bgColor,
        fgColor,
        qrSize,
        enableMargin,
        includeImage,
        imageURL,
    } = useGenerateQR()


    // const copyImg = () => {
    //     const canvas = document.getElementById('image') as HTMLCanvasElement
    //     const image = canvas?.toDataURL('image/png')
    // }
    // const saveImg = () => {
    //     const canvas = document.getElementById('image') as HTMLCanvasElement
    //     const image = canvas?.toDataURL('image/png')
    //     // download image
    //     const link = document.createElement('a')
    //     link.download = 'qrcode.png'
    //     link.href = image
    //     link.click()
    // }

    return (
        <div className='p-1 md:w-1/2 flex items-center justify-center md:justify-end'>
            <div className='bg-white rounded w-[340px] h-[340px] p-7 pb-10 grid place-items-center border relative'>
                <div id="capture">
                    <QRCodeCanvas
                        id='image'
                        value={url}
                        size={qrSize}
                        bgColor={bgColor}
                        fgColor={fgColor}
                        level={"L"}
                        includeMargin={enableMargin}
                        imageSettings={
                            includeImage ? {
                                src: imageURL,
                                x: undefined,
                                y: undefined,
                                height: qrSize / 6,
                                width: qrSize / 6,
                                excavate: false,
                            } : undefined
                        }
                    />

                    <p className='mt-2 text-xl'>{title}</p>
                </div>

                <div className='flex gap-7 absolute -bottom-5'>
                    <Button icon={<FiCopy size={'16px'} />} rounded={true}
                    // onClick={copyImg}
                    />
                    <Button icon={<FiDownload size={'16px'} />} rounded={true}
                    // onClick={saveImg}
                    />
                </div>
            </div>
        </div>
    )
}

export default DisplayQR