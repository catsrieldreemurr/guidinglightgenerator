import ImageTextComponent from "@/components/ui/imageTextComponent";
import Typography from "@/components/ui/typography";
import { InfoIcon } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

export default function Page(){
    return ( 
        <div className="bg-[url(/guiding_static.gif)] min-h-screen flex items-center flex-col gap-10">
            <div className="flex flex-row gap-10 items-center justify-center mt-5">
                <Link href={"/"}>
                    <Typography variant="h1" style="hover:text-white">Information</Typography>
                </Link>
            </div>
            
            <ImageTextComponent 
                imageURL="/shootsyou.png"
                imageAlt="Fern holding a musket like a shotgun"
                headerText="Created by Fern Baxxter"
                imageDirection="imageLeft"
            >
                <Link href={"https://x.com/purrfectiu"}><Typography>@purrfectiu</Typography></Link>
                <Link href={"https://x.com/GuidingTheHotel"}><Typography>@GuidingTheHotel</Typography></Link>
            </ImageTextComponent>
            
            <ImageTextComponent 
                imageURL="/LSplash.png" 
                imageAlt="LSplash"
                headerText="DOORS Created by LSplash"
            >
                <Link href={"https://x.com/LightningSplash"}><Typography>@LightningSplash</Typography></Link>
                <Link href={"https://www.roblox.com/games/6516141723/DOORS"}><Typography>🔗DOORS</Typography></Link>  
            </ImageTextComponent>
         </div>
    )
}