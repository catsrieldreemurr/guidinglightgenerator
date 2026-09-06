import FrontpageButton from "@/components/ui/frontpageButton";
import Typography from "@/components/ui/typography";
import { ImagePlusIcon, InfoIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-[url(/guiding_static.gif)] bg-fixed min-h-screen flex justify-center items-center flex-col gap-10">
      <div>
        <Typography variant="h1" isBold isCentered>Fern's Guiding Light Generator</Typography>
        <Typography variant="h2" isCentered>Create your own Death Messages!</Typography>
      </div>  
      
      <div className="flex flex-col gap-5">
        <FrontpageButton linkDestination="/generate" icon={<ImagePlusIcon className="size-2xl"/>}>Create</FrontpageButton>
        <FrontpageButton linkDestination="/info" icon={<InfoIcon className="size-2xl"/>}>Info</FrontpageButton>
      </div>
    </div>
  );
}
