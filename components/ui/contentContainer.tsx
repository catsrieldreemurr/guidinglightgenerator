import { ReactNode } from "react"

interface ContentContainerProps {
    children?: ReactNode
}

export default function ContentContainer({ children }: ContentContainerProps) {
    return (
        <div className="bg-[url(/guiding_static.gif)] bg-fixed min-h-screen flex items-center flex-col gap-10">
            {children}
        </div>
    )
}