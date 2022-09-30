import React from 'react'
import { SelectProps } from './interface'

const Select = ({
    id,
    name,
    label,
    options,
    value,
    onChange,
    wrapperClassName,
    wFull = false,
    disabled = false,
    labelClassName,
}: SelectProps) => {
    return (
        <div id={id} className={[
            'flex flex-col p-1 gap-1',
            wFull ? 'w-full' : 'w-fit',
            disabled && 'opacity-50 cursor-not-allowed',
            wrapperClassName
        ].join(' ')}>
            <label htmlFor={name} className={[
                'text-sm text-neutral-700 ml-1 whitespace-nowrap',
                labelClassName
            ].join(' ')}>
                {label}
            </label>
            <div className={[
                "flex gap-1 bg-white rounded-lg outline-none border border-neutral-300",
                wFull ? 'w-full' : 'w-fit',
            ].join(' ')}>
                {
                    options.map((option, index) => (
                        <div key={index} className={[
                            "rounded-lg p-1 transition-all active:bg-neutral-200 hover:bg-neutral-100 cursor-pointer",
                            option.value === value && 'bg-neutral-800 text-neutral-100 hover:bg-neutral-700 hover:text-neutral-100 active:bg-neutral-900',
                            disabled && 'cursor-not-allowed pointer-events-none'
                        ].join(' ')}
                            onClick={() => onChange(option.value)}
                        >
                            {option.label}
                        </div>
                    ))
                }
            </div>
        </div>
    )
}

export default Select