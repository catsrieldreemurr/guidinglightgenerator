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
            
            <div className="flex sm:flex-row flex-col">
                <Image src={"/shootsyou.png"} alt="Fern holding a musket like a shotgun" height={200} width={200}/>
                <div className="flex flex-row items-center justify-center">
                    <Typography>Created by Fern Baxter</Typography>
                    <div>
                        <Link href={"https://x.com/purrfectiu"}>@purrfectiu</Link>
                        <Link href={"https://x.com/GuidingTheHotel"}>@GuidingTheHotel</Link>
                    </div>
                    
                </div>
            </div>
         </div>
    )
}