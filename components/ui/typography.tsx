import { ReactNode } from "react";

interface TypographyProps {
    children?: ReactNode
    isBold?: boolean
    isCentered?: boolean
    variant?: 'h1' | 'h2' | 'h3' | 'p' | 'subtitle'
    style?: string
}

export default function Typography({ children, isBold, isCentered, variant, style }: TypographyProps) {
    const variableStyles = `${isBold && 'font-bold'} ${isCentered && 'text-center'} ${style}`
    const commonStyles = 'text-blue-300'

    switch (variant) {
        case 'h1':
            return <h1 className={`${commonStyles} ${variableStyles} text-2xl sm:text-4xl`}>{children}</h1>
        case 'h2':
            return <h2 className={`${commonStyles} ${variableStyles} text-xl sm:text-3xl`}>{children}</h2>
        case 'h3':
            return <h3 className={`${commonStyles} ${variableStyles} text-lg sm:text-2xl`}>{children}</h3>
        case 'p':
            return <p className={`${commonStyles} ${variableStyles} text-sm sm:text-md`}>{children}</p>
        case 'subtitle':
            return <p className={`${commonStyles} ${variableStyles} text-sm text-gray-700`}>{children}</p>
        default:
            return <p className={`${commonStyles} ${variableStyles}`}>{children}</p>
    }
}