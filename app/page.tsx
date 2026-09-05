import { Button } from "@/components/ui/button";
import Typography from "@/components/ui/typography";
import { MoonStarIcon } from "lucide-react";

export default function Home() {
  return (
    <div className="bg-[url(/guiding_static.gif)] min-h-screen flex justify-center items-center flex-col gap-10">
      <div>
        <Typography variant="h1" isBold isCentered>Fern's Guiding Light Generator</Typography>
        <Typography variant="h2" isCentered>Generate your own Death Messages!</Typography>
      </div>  

      <Button className={'text-blue-300 hover:underline'} variant={'ghost'}>
        <MoonStarIcon />
        Generate
      </Button>
    </div>
  );
}
