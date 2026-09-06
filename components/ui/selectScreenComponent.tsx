import Image from "next/image";
import { Dispatch, SetStateAction } from "react";
import Typography from "./typography";

interface SelectScreenComponentProps {
    setCurrentPage: Dispatch<SetStateAction<string>>
    setSelectedScreen: Dispatch<SetStateAction<string>>
    imageURL: string
    imageAlt: string
}

export default function SelectScreenComponent({ setCurrentPage, setSelectedScreen, imageURL, imageAlt }:SelectScreenComponentProps) {
    return (
        <button className="flex flex-col items-center gap-5" onClick={() => {
            setCurrentPage('editor')
            setSelectedScreen(imageURL)
            console.log('editing')
        }}>
            <Image className="rounded-xl" src={imageURL} alt={imageAlt} width={300} height={200}/>
            <Typography style="text-2xl">Guiding The Hotel</Typography>
        </button>
    )
}