"use client"
import DeathScreenSelector from "@/components/ui/sectionComponents/deathSelectionScreen";
import Typography from "@/components/ui/typography";
import { CircleXIcon } from "lucide-react";
import Link from "next/link";
import { useState } from "react";
import Custom404Error from "../not-found";

export default function Page(){
    const [currentPage, setCurrentPage] = useState('select')
    
    switch (currentPage){
        case "select":
            return (
                <div>
                    <DeathScreenSelector/>
                </div>
            )
        case "editor":
            return (
                <div>
                    <DeathScreenSelector/>
                </div>
            )
        default:
            return (
                <Custom404Error/>
            )
    }
}