import { Dispatch, SetStateAction } from "react";
import ContentContainer from "../contentContainer";
import Typography from "../typography";

interface CreatorScreenProps{
    setCurrentPage: Dispatch<SetStateAction<string>>
}

export default function CreatorScreen({ setCurrentPage }: CreatorScreenProps){
    return (
        <ContentContainer>
            <button onClick={() => {
                setCurrentPage("select")
            }}>
                <Typography variant="h1" isBold style="mt-5 hover:text-white">Death Screen Creator</Typography>
            </button>

            <Typography>Selected: </Typography>
            
        </ContentContainer>
    )
}