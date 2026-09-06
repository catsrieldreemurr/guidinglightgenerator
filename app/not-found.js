import Typography from "@/components/ui/typography"
import { CircleXIcon } from "lucide-react"
import Link from "next/link"

export default function Custom404Error(){
    return(
        <div className="bg-[url(/guiding_static.gif)] bg-fixed min-h-screen flex justify-center items-center flex-col gap-10">
            <div className="flex justify-center items-center gap-5">
                <CircleXIcon className="text-blue-300 size-xl-"/>
                <Typography variant="h1">Error 404: Page not found</Typography>
                <CircleXIcon className="text-blue-300 size-xl-"/>
            </div>
            
            <Link href={"/"}><Typography style="hover:text-white hover:underline">Go back home.</Typography></Link>
        </div>
    )
}