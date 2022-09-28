import { ReactNode } from "react";

export interface ButtonProps {
    icon?: ReactNode,
    text?: String,
    onClick?: () => void ,
    onSubmit?: (e: React.FormEvent) => void,
    disabled?: boolean,
    type?: 'button' | 'submit',
    className?: string,
    rounded?: boolean,
    wFull?: boolean,
    variant?:'fill' | 'outline'
}