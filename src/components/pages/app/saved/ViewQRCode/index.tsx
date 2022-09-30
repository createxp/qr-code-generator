import React from 'react'
import { FiEye } from 'react-icons/fi'
import { QRCode, VisitLink } from '../../../../app'

const ViewQRCode = ({
    bgColor,
    fgColor,
    url,
    includeImage,
    imageURL,
    title,
    views
}: {
    bgColor: string,
    fgColor: string,
    url: string,
    includeImage: boolean,
    imageURL: string,
    title: string,
    views: number,
}) => {
    return (
        <div className={[
            'border border-neutral-200 rounded transition-all cursor-pointer relative  w-fit',
            'hover:transform hover:scale-[1.01] hover:shadow',
        ].join(' ')}>
            <VisitLink url={url} className='absolute -top-4 -right-4 z-10' />
            <QRCode
                bgColor={bgColor}
                fgColor={fgColor}
                qrSize={150}
                includeImage={includeImage}
                imageURL={imageURL}
                showTitle={true}
                title={title}
                titlePosition='left'
                url={url}
                titleSize={'16px'}
            />
            <div className={[
                'flex flex-col bg-neutral-800 h-[100px] w-[34px] rounded-r-lg text-white justify-center items-center gap-1',
                'absolute bottom-[16px] -z-10 -right-2',
                'peer-hover:-right-[32px] duration-300 transition-all'
            ].join(' ')}>
                <FiEye size={12} />
                <span className='text-xs'>{views}</span>
            </div>
        </div>
    )
}

export default ViewQRCode