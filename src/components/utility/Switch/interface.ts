export interface SwitchProps {
    id: string,
    name: string,
    state: boolean,
    onChange: () => void,
    label?: string,
    disabled?: boolean,
    wrapperClassName?: string,
    labelClassName?: string,
    switchClassName?: string,
}