export interface SelectProps {
    id?: string,
    name?: string,
    label?: string,
    options: { value: string, label: React.ReactNode }[],
    value: string,
    onChange: (value: string) => void,
    wFull?: boolean,
    wrapperClassName?: string,
    disabled?: boolean,
    labelClassName?: string,
}