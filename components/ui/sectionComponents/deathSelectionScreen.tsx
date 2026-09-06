import Link from "next/link";
import Typography from "../typography";
import ContentContainer from "../contentContainer";

export default function DeathScreenSelector(){
    return (
        <ContentContainer>
            <Link href={"/"}>
                <Typography variant="h1" isBold style="mt-5 hover:text-white">Select a Death Screen</Typography>
            </Link>
        </ContentContainer>

    )
}