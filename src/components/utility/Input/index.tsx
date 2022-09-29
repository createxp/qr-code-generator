import React from 'react'
import { InputProps } from './interface'

const Input = ({
    type = 'text',
    placeholder,
    value,
    onChange,
    id,
    name,
    wrapperClassName,
    fit = false,
    inputClassName,
    labelClassName,
    required = true,
    disabled = false,
    min,
    max,
    step,
    label,
    ...props
}: InputProps) => {
    if (type === 'color') {
        return (
            <div className={[
                'flex flex-col p-1 gap-1',
                !fit ? 'w-full' : 'w-fit',
                disabled && 'opacity-50 cursor-not-allowed',
                wrapperClassName
            ].join(' ')}>
                <label htmlFor={name} className={[
                    'text-sm text-neutral-700 ml-1 whitespace-nowrap',
                    labelClassName
                ].join(' ')}>
                    {label}
                </label>
                <input
                    type={type}
                    value={value}
                    onChange={onChange}
                    id={id}
                    name={name}
                    className={[
                        'outline-none border border-neutral-300 rounded-lg p-1 w-full min-w-[80px] max-w-[100px]',
                        'colorInput',
                        disabled && 'cursor-not-allowed',
                        inputClassName
                    ].join(' ')}
                    required={required}
                    disabled={disabled}
                    {...props}
                />
            </div>
        )
    }
    if (type === 'range') {
        return (
            <div className={[
                'flex flex-col p-1 gap-1',
                !fit ? 'w-full' : 'w-fit',
                disabled && 'opacity-50 cursor-not-allowed',
                wrapperClassName
            ].join(' ')}>
                <label htmlFor={name} className={[
                    'text-sm text-neutral-700 ml-1 whitespace-nowrap',
                    labelClassName
                ].join(' ')}>
                    {label} ({value}px)
                </label>
                <input
                    type={type}
                    value={value}
                    onChange={onChange}
                    id={id}
                    name={name}
                    className={[
                        'p-1 w-full',
                        'rangeInput',
                        disabled && 'cursor-not-allowed',
                        inputClassName
                    ].join(' ')}
                    required={required}
                    disabled={disabled}
                    min={min}
                    max={max}
                    step={step}
                    {...props}
                />
            </div>
        )
    }
    return (
        <div className={[
            'flex flex-col p-1 gap-1',
            !fit ? 'w-full' : 'w-fit',
            disabled && 'opacity-50 cursor-not-allowed',
            wrapperClassName
        ].join(' ')}>
            <label htmlFor={name} className={[
                'text-sm text-neutral-700 ml-1 whitespace-nowrap',
                labelClassName
            ].join(' ')}>
                {label}
            </label>
            <input
                type='text'
                placeholder={placeholder}
                value={value}
                onChange={onChange}
                id={id}
                name={name}
                className={[
                    'outline-none border border-neutral-300 rounded-lg p-2',
                    'active:border-neutral-500 focus:border-neutral-500',
                    disabled && 'cursor-not-allowed',
                    inputClassName
                ].join(' ')}
                required={required}
                disabled={disabled}
                minLength={min}
                maxLength={max}
                {...props}
            />
        </div>
    )
}

export default Input