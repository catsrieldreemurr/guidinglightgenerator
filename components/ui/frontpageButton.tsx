import { ReactNode } from "react"
import { Button } from "./button"
import Link from "next/link"

interface FrontPageButtonProps{
    children: ReactNode
    linkDestination: string
    icon: ReactNode
}

export default function FrontpageButton({ children, linkDestination, icon }:FrontPageButtonProps){
    return (
       <Button className={'text-blue-300 hover:underline hover:bg-transparent'} variant={'ghost'}>
            <div className="text-blue-300">
                {icon}
            </div>
           <Link className="text-blue-300 hover:text-white hover:underline text-2xl" href={linkDestination}>{children}</Link>
        </Button> 
    )
}