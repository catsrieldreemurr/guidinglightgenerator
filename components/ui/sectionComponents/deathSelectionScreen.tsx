import Link from "next/link";
import Typography from "../typography";
import ContentContainer from "../contentContainer";
import SelectScreenComponent from "../selectScreenComponent";
import { Dispatch, SetStateAction } from "react";

interface DeathScreenSelectorProps{
    setCurrentPage: Dispatch<SetStateAction<string>>
}


export default function DeathScreenSelector({ setCurrentPage }:DeathScreenSelectorProps){
    return (
        <ContentContainer>
            <Link href={"/"}>
                <Typography variant="h1" isBold style="mt-5 hover:text-white">Select a Death Screen</Typography>
            </Link>

            <div className="flex gap-10">
                <SelectScreenComponent setCurrentPage={setCurrentPage} imageAlt="Guiding The Hotel" imageURL="/guidingTheHotel_bg.png"/>
            </div>
        </ContentContainer>

    )
}