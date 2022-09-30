import React from 'react'
import validator from 'validator'
import { QRCodeSVG } from 'qrcode.react';
import { QRCodeProps } from './interface';

const QRCode = ({
    id,
    reference,
    bgColor,
    fgColor,
    url,
    qrSize,
    includeImage,
    imageURL,
    showTitle,
    title,
    titlePosition,
    titleSize = '24px'
}: QRCodeProps) => {
    return (
        <div id={id} className='p-4 rounded w-fit peer' ref={reference} style={{
            backgroundColor: bgColor,
        }} >
            <div style={{
                width: qrSize,
            }}>
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
                        <div className="relative" style={{
                            width: qrSize,
                        }} >
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
                        <p className='mt-2 overflow-hidden text-ellipsis whitespace-nowrap' style={{
                            fontSize: titleSize,
                            color: fgColor,
                            textAlign: titlePosition === 'center' ? 'center' : titlePosition === 'left' ? 'left' : 'right',
                        }}>{title}</p>
                    )
                }
            </div>
        </div>
    )
}

export default QRCode