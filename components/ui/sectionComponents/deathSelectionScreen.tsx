import Link from "next/link";
import Typography from "../typography";

export default function DeathScreenSelector(){
    return (
        <div className="bg-[url(/guiding_static.gif)] min-h-screen flex items-center flex-col gap-10">
            <Link href={"/"}>
                <Typography variant="h1" style="mt-5 hover:text-white">Select a Death Screen</Typography>
            </Link>
        </div>

    )
}