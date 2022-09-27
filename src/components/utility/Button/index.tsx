import React, { ReactNode } from 'react'
import { ButtonProps } from './interface'


const Button = ({
    icon,
    text,
    onClick,
    onSubmit,
    disabled = false,
    type = 'button',
    className = '',
    rounded = false,
    wFull = false,
    ...props
}: ButtonProps) => {
    return (
        <button
            className={[
                'bg-neutral-800 flex justify-center items-center gap-3 transition-all duration-100',
                wFull ? 'w-full' : 'w-fit',
                !rounded ? 'px-6 py-3' : 'p-3',
                !rounded ? 'rounded-lg' : 'rounded-full',
                'hover:bg-neutral-900',
                'active:scale-[0.98]',
                disabled && 'opacity-50 cursor-not-allowed',
                className
            ].join(' ')}
            onClick={onClick}
            onSubmit={onSubmit}
            disabled={disabled}
            type={type}
            {...props}
        >
            {
                icon && (
                    <span className='text-2xl'>{icon}</span>
                )
            }
            {
                text && (
                    <span className='text-white'>{text}</span>
                )
            }
        </button>
    )
}

export default Button