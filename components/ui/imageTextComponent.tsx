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
        <div className={`flex gap-5 flex-col justify-center items-center
            ${(imageDirection === "imageRight" || imageDirection === undefined) && 'sm:flex-row'} 
            ${imageDirection === "imageLeft" && 'sm:flex-row-reverse'} gap-5`}>
            
            <div className="flex items-center">
                <div className="flex flex-col items-center justify-center border-2 border-blue-300 p-5">
                <Typography isBold>{headerText}</Typography>
                <div className="flex gap-5">
                   {children}
                </div>
                
                </div>
            </div>
            
            <Image src={imageURL} alt={imageAlt} className="rounded-xl" height={200} width={200}/>
        </div>
    )
}