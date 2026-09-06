import Link from "next/link";
import Typography from "../typography";

export default function DeathScreenSelector(){
    return (
        <div className="bg-[url(/guiding_static.gif)] bg-fixed min-h-screen flex items-center flex-col gap-10">
            <Link href={"/"}>
                <Typography variant="h1" isBold style="mt-5 hover:text-white">Select a Death Screen</Typography>
            </Link>
        </div>

    )
}