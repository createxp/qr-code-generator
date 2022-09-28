import React, { useCallback, useRef } from 'react'
import { useGenerateQR } from '../../../../../contexts'
import { QRCodeSVG } from 'qrcode.react';
import { FiCopy, FiDownload } from 'react-icons/fi'
import { Button } from '../../../../utility';
import { toPng } from 'html-to-image';

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
    const ref = useRef<HTMLDivElement>(null)
    const saveImg = useCallback(() => {
        if (ref.current === null) {
            return
        }
        toPng(ref.current, { cacheBust: true, })
            .then(((url: string) => {
                const link = document.createElement('a')
                link.download = `${title}.png`
                link.href = url
                link.click()
            }))
    }, [ref])

    return (
        <div className='p-1 md:w-1/2 flex items-center justify-center'>
            <div className='bg-white rounded w-fit p-10 grid place-items-center border relative'>
                <div id="capture" ref={ref}>
                    <QRCodeSVG
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
                </div>

                <div className='flex gap-7 absolute -bottom-5'>
                    <Button icon={<FiCopy size={'16px'} />} rounded={true} />
                    <Button icon={<FiDownload size={'16px'} />} rounded={true} onClick={saveImg} />
                </div>
            </div>
        </div>
    )
}

export default DisplayQR