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
        <button className="flex flex-col items-center gap-5 flex-wrap sm:w-[30%]" onClick={() => {
            setCurrentPage('editor')
            setSelectedScreen(imageURL)
            console.log('editing')
        }}>
            <Image className="rounded-xl border-2 border-blue-400" src={imageURL} alt={imageAlt} width={300} height={200}/>
            <Typography style="text-2xl">{imageAlt}</Typography>
        </button>
    )
}