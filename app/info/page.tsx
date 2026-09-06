import ImageTextComponent from "@/components/ui/imageTextComponent";
import Typography from "@/components/ui/typography";
import Link from "next/link";

export default function Page(){
    return ( 
        <div className="bg-[url(/guiding_static.gif)] bg-fixed min-h-screen flex items-center flex-col gap-10">
            <div className="flex flex-row gap-10 items-center justify-center mt-5">
                <Link href={"/"}>
                    <Typography variant="h1" isBold style="hover:text-white">Information</Typography>
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

            <div className="text-center p-15">
                <Typography>If you find this website useful, please link back to it and spread the word &#60;3</Typography>
                <Typography>If you have any questions or concerns, feel free to DM me on Twitter!</Typography>
                <Typography>All Assets Created by hand in Photoshop.</Typography>

                <Typography style="mt-10" isBold>This Project is not affiliated with or endorsed by LSplash.</Typography>
            </div>

            <div className="text-center p-15 pt-0">
                <Typography variant="h2" isBold>Other Credits</Typography>
                <Typography>Oswald Font from Google Fonts</Typography>
                <Typography>Icons by Lucide Icons</Typography>
            </div>
            
        </div>
    )
}