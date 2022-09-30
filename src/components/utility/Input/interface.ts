export interface InputProps {
    type: 'text' | 'url' | 'color' | 'range' | 'file',
    placeholder?: string,
    value: string | number,
    onChange: (e: React.ChangeEvent<HTMLInputElement>) => void,
    id: string,
    name: string,
    fit?: boolean,
    wrapperClassName?: string,
    inputClassName?: string,
    labelClassName?: string,
    required?: boolean,
    disabled?: boolean,
    min?: number,
    max?: number,
    step?: number,
    label?: string,
}