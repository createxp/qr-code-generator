import React from 'react'
import { SwitchProps } from './interface'
const Switch = ({
    id,
    name,
    label,
    state,
    onChange,
    disabled = false,
    wrapperClassName,
    labelClassName,
    switchClassName,
    ...props
}: SwitchProps) => {

    return (
        <div className={[
            'flex flex-col w-full p-1 gap-1',
            disabled && 'opacity-50',
            wrapperClassName
        ].join(' ')}>
            <label htmlFor={name} className={[
                'text-sm text-neutral-700 ml-1 whitespace-nowrap',
                labelClassName
            ].join(' ')}>
                {label}
            </label>
            <div
                className={[
                    'w-11 p-1 flex items-center rounded-full',
                    'transition-all duration-300 ease-in-out',
                    'group relative',
                    disabled ? 'cursor-not-allowed opacity-50' : 'cursor-pointer',
                    state ? 'bg-neutral-800' : 'bg-neutral-200',
                ].join(' ')}
                onClick={!disabled ? onChange : () => { }}
                {...props}
            >
                <div className={[
                    'flex h-[18px] w-[18px] rounded-full bg-white items-center justify-center shadow-sm',
                    'transition-all duration-300 ease-in-out',
                    state ? 'translate-x-full' : 'translate-x-0',
                ].join(' ')}>
                </div>
            </div>
        </div>
    )
}

export default Switch