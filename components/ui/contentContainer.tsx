import { ReactNode } from "react"

interface ContentContainerProps {
    children?: ReactNode
    doJustifyCenter?: boolean
}

export default function ContentContainer({ children, doJustifyCenter }: ContentContainerProps) {
    return (
        <div className={`bg-[url(/guiding_static.gif)] bg-fixed min-h-screen flex items-center flex-col gap-10 ${doJustifyCenter && 'justify-center'}`}>
            {children}
        </div>
    )
}