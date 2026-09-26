import React, { Dispatch, SetStateAction, useEffect, useState } from "react";
import ContentContainer from "../contentContainer";
import Typography from "../typography";
import { Textarea } from "../textarea";
import { Button } from "../button";

import html2canvas from 'html2canvas-pro';
import { toast, Toaster } from "../toast";

interface CreatorScreenProps {
    setCurrentPage: Dispatch<SetStateAction<string>>

    selectedScreen: string
}

export default function CreatorScreen({ setCurrentPage, selectedScreen }: CreatorScreenProps) {
    const [dialogue, setDialogue] = useState('')
    const [characterCount, setCharacterCount] = useState(0)
    const [currentDialogueColour, setCurrentDialogueColour] = useState('')

    const imageRef = React.useRef(null)

    function setTextColour(){
        switch(selectedScreen){
            case "/guidingTheHotel_bg.png":
                setCurrentDialogueColour('text-guide')
                break
            case "/Guidinglightblank.png":
                setCurrentDialogueColour('text-guide')
                break
            case "/curiouslightBack.png":
                setCurrentDialogueColour('text-curi')
                break
            case "/curiouslightBlank.png":
                setCurrentDialogueColour('text-curi')
                break
            case "/mischevioustemplate.png":
                setCurrentDialogueColour('text-redLight')
                break
            default: 
                setCurrentDialogueColour('text-default')
                break
        }
    }

async function copyImageToClipboard() {
        const element = imageRef.current;
        if (!element) return;

        try {
            const canvas = await html2canvas(element, {
                scale: 2,
                backgroundColor: null
            });

            canvas.toBlob(async (blob) => {
                if (!blob) {
                    console.error("Canvas to Blob conversion failed");
                    return;
                }

                const item = new ClipboardItem({ "image/png": blob });
                await navigator.clipboard.write([item]);
            }, "image/png");

        } catch (error) {
            console.error("Failed to copy image:", error);
        }
    }

    useEffect(() => {
        setTextColour()
    }, [])
    
    return (
        <ContentContainer>
            <button onClick={() => {
                setCurrentPage("select")
            }}>
                <Typography variant="h1" isBold style="mt-5 hover:text-white">Death Screen Creator</Typography>
            </button>

            <Typography>Selected: {selectedScreen}</Typography>
            
            {/* Editor Section */}
            <div ref={imageRef} className="relative max-w-xl mx-auto mt-20 overflow-hidden">
                <img src={selectedScreen} alt={selectedScreen} height={1836} width={1034} className="block align-bottom"/>
                <div className="absolute inset-0 flex items-center justify-center">
                    <p className={`${currentDialogueColour} sm:text-2xl whitespace-pre-line break-keep text-center`}>{dialogue}</p>
                </div>
            </div>

            <form className="text-center text-blue-300 flex gap-5 flex-col w-[20rem]">
                <label htmlFor="dialoguebox" className="text-xl">Custom Dialogue Here ({characterCount}/200)</label>
                <div>
                    <Textarea title="dialoguebox" className="text-center text-blue-300 border-2 border-blue-300 bg-blue-50/10" 
                    value={dialogue} maxLength={200} onChange={(e) => {
                        setDialogue(e.target.value)
                        setCharacterCount(e.target.value.length)
                    }}/>
                </div>
            </form>

            <div className="flex flex-row gap-5">
                <Button onClick={() => {
                    copyImageToClipboard()
                    toast.add({
                        title: 'Copy Image',
                        type: 'success',
                        description: 'Successfully Copied Image to Clipboard'
                    })
                }} className={'text-blue-300 hover:underline hover:bg-transparent border-2 border-blue-300 hover:text-blue-200'} variant={'ghost'}>Copy Image</Button>
                <Button onClick={() => {
                    navigator.clipboard.writeText(dialogue)
                    toast.add({
                        title: 'Copy Alt-Text',
                        type: 'success',
                        description: 'Successfully Copied Alt-Text to Clipboard'    
                    })
                }} className={'text-blue-300 hover:underline hover:bg-transparent border-2 border-blue-300 hover:text-blue-200'} variant={'ghost'}>Copy Alt-Text</Button>
            </div>

            <Toaster></Toaster>
            

        </ContentContainer>
    )
}