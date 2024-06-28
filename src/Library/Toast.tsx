import { TiTick } from "react-icons/ti";
import CircularProgress from "@/Library/CircularProgress";
import { use, useEffect, useState } from "react";

interface Props extends React.HTMLProps<HTMLDivElement> {
    duration?: number;
    title: string;
    message: string;
    type?: "success" | "error" | "warning" | "default";
    open?: boolean;
    close?: () => void;
}

export default function Toast({ message, title, type = "default", duration, open, close, ...props }: Props) {

    const bg = `${type === "warning" ? "bg-yellow-700" : type === "error" ? "bg-red-800" : type === "success" ? "bg-green-900" : "bg-slate-800"}`
    const smallText = `${type === "default" ? "text-secondary" : "text-slate-300"} text-justify mt-1`

    const [tintProgress, setTintProgress] = useState(0);

    useEffect(() => {
        if (open) {
            const now = Date.now();
            const iv: any = setInterval(() => {
                let progress = ((Date.now() - now) / (duration || 3000)) * 100;
                if (progress > 100) {
                    close && close();
                    setTintProgress(100);
                    return clearInterval(iv);
                }
                setTintProgress(progress);

            }, duration || 100)
        }
    }, [open])

    return (
        <div
            {...props}
            className={`fixed w-[400px] ${bg} top-0 right-0 p-5 z-40 mt-5 rounded-xl transition-all duration-300 ${
                open ? "opacity-100 transform translate-x-0" : "opacity-0 transform translate-x-full"
            }`}
        >
            <div className="w-full text-xl font-bold flex items-center justify-between">
                <div>{title}</div>
                <div>
                    <CircularProgress
                        progress={tintProgress}
                        varient="progress"
                        tintColor="stroke-white"
                        className="absolute"
                        size={20}
                    />
                </div>
            </div>
            <p className={smallText}>{message}</p>
        </div>
    );
}