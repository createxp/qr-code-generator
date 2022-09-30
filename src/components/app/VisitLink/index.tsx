import React from 'react'
import { FiArrowUpRight } from 'react-icons/fi'

const VisitLink = ({
    url,
    className,
}: {
    url: string,
    className?: string,
}) => {
    return (
        <div className={className}>
            <a
                href={url}
                target="_blank"
                rel="noreferrer"
                className={[
                    'flex bg-neutral-800 text-neutral-100 rounded-full items-center justify-center',
                    'w-[34px] h-[34px]',
                    'group overflow-clip transition-all relative'
                ].join(' ')}
            >
                <FiArrowUpRight className={[
                    'absolute transform',
                    'group-hover:translate-x-[16px] group-hover:-translate-y-[16px] duration-300 transition-all'
                ].join(' ')} />
                <FiArrowUpRight className={[
                    'absolute transform -translate-x-[16px] translate-y-[16px]',
                    'group-hover:translate-x-[0px] group-hover:translate-y-[0px] duration-300 transition-all'
                ].join(' ')} />
            </a>
        </div>
    )
}

export default VisitLink