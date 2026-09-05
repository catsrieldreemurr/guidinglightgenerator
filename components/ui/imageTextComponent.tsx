import Image from "next/image"
import { ReactNode } from "react"
import Typography from "./typography"

interface ImageTextComponentProps{
    imageDirection?: 'imageLeft' | 'imageRight'
    imageURL: string
    imageAlt: string
    headerText: string
    children: ReactNode
}

export default function ImageTextComponent({ imageDirection, imageURL, imageAlt, headerText, children }:ImageTextComponentProps){
    return ( 
        <div className={`flex gap-5 flex-col 
            ${(imageDirection === "imageRight" || imageDirection === undefined) && 'sm:flex-row'} 
            ${imageDirection === "imageLeft" && 'sm:flex-row-reverse'} gap-5`}>

            <div className="flex flex-col items-center justify-center border-2 border-blue-300">
                <Typography isBold>{headerText}</Typography>
                <div className="flex gap-5">
                   {children}
                </div>
                
            </div>
            <Image src={imageURL} alt={imageAlt} height={200} width={200}/>
        </div>
    )
}