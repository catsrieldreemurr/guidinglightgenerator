import Link from "next/link";
import Typography from "../typography";
import ContentContainer from "../contentContainer";
import SelectScreenComponent from "../selectScreenComponent";
import { Dispatch, SetStateAction } from "react";

interface DeathScreenSelectorProps{
    setCurrentPage: Dispatch<SetStateAction<string>>
    setSelectedScreen: Dispatch<SetStateAction<string>>
}


export default function DeathScreenSelector({ setCurrentPage, setSelectedScreen }:DeathScreenSelectorProps){
    return (
        <ContentContainer>
            <Link href={"/"}>
                <Typography variant="h1" isBold style="mt-5 hover:text-white">Select a Death Screen</Typography>
            </Link>

            <div className="flex gap-10 flex-wrap justify-center items-center sm:flex-row flex-col">
                <SelectScreenComponent 
                    setCurrentPage={setCurrentPage}
                    setSelectedScreen={setSelectedScreen}
                    imageAlt="Moonlight Modern" 
                    imageURL="/guidingTheHotel_bg.png">
                </SelectScreenComponent>

                <SelectScreenComponent
                    setCurrentPage={setCurrentPage}
                    setSelectedScreen={setSelectedScreen}
                    imageAlt="Moonlight Classic"
                    imageURL="/Guidinglightblank.png">
                </SelectScreenComponent>

                <SelectScreenComponent
                    setCurrentPage={setCurrentPage}
                    setSelectedScreen={setSelectedScreen}
                    imageAlt="Starlight Modern"
                    imageURL="/curiouslightBack.png">
                </SelectScreenComponent>

                <SelectScreenComponent
                    setCurrentPage={setCurrentPage}
                    setSelectedScreen={setSelectedScreen}
                    imageAlt="Starlight Classic"
                    imageURL="/curiouslightBlank.png">
                </SelectScreenComponent>

                <SelectScreenComponent
                    setCurrentPage={setCurrentPage}
                    setSelectedScreen={setSelectedScreen}
                    imageAlt="Red Light"
                    imageURL="/mischevioustemplate.png">
                </SelectScreenComponent>

            </div>
        </ContentContainer>

    )
}