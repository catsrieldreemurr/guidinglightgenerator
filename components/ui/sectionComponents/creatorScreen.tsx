import { Dispatch, SetStateAction } from "react";
import ContentContainer from "../contentContainer";
import Typography from "../typography";
import Image from "next/image";

interface CreatorScreenProps {
    setCurrentPage: Dispatch<SetStateAction<string>>

    selectedScreen: string
}

export default function CreatorScreen({ setCurrentPage, selectedScreen }: CreatorScreenProps) {
    return (
        <ContentContainer>
            <button onClick={() => {
                setCurrentPage("select")
            }}>
                <Typography variant="h1" isBold style="mt-5 hover:text-white">Death Screen Creator</Typography>
            </button>

            <Typography>Selected: {selectedScreen}</Typography>
            
            {/* Editor Section */}
            <Image src={selectedScreen} alt={selectedScreen} height={600} width={600}/>

        </ContentContainer>
    )
}