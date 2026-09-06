"use client"
import DeathScreenSelector from "@/components/ui/sectionComponents/deathSelectionScreen";
import { useState } from "react";
import Custom404Error from "../not-found";
import ContentContainer from "@/components/ui/contentContainer";
import Typography from "@/components/ui/typography";
import CreatorScreen from "@/components/ui/sectionComponents/creatorScreen";

export default function Page(){
    const [currentPage, setCurrentPage] = useState('select')
    const [selectedScreen, setSelectedScreen] = useState('');
    
    switch (currentPage){
        case "select":
            return (
                <div>
                    <DeathScreenSelector setCurrentPage={setCurrentPage}/>
                </div>
            )
        case "editor":
            return (
                <div>
                    <CreatorScreen setCurrentPage={setCurrentPage}/>
                </div>
            )
        default:
            return (
                <Custom404Error/>
            )
    }
}