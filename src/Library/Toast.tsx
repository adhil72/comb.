import { TiTick } from "react-icons/ti";
import CircularProgress from "@/Library/CircularProgress";
import { use, useEffect, useState } from "react";

interface Props {
    duration?: number;
    title: string;
    message: string;
    type?: "success" | "error" | "warning" | "default";
    open?: boolean;
    close?: () => void;
}

const createToastContainer = () => {
    const toastLayout = document.createElement("div");
    toastLayout.id = "toast-layout";
    toastLayout.className = "fixed top-0 right-0 z-40 p-5 trans";
    document.body.appendChild(toastLayout);
    return toastLayout;
}

const themes: { bg: string, text: string, "progress-dark": string, "progress-tint": string, type: "success" | "error" | "warning" | "default" }[] = [
    {
        type: "success",
        bg: "bg-green-900",
        text: "text-green-300",
        "progress-dark": "bg-green-300",
        "progress-tint": "bg-green-900"
    },
    {
        type: "error",
        bg: "bg-red-800",
        text: "text-red-300",
        "progress-dark": "bg-red-300",
        "progress-tint": "bg-red-800"
    },
    {
        type: "warning",
        bg: "bg-yellow-700",
        text: "text-yellow-300",
        "progress-dark": "bg-yellow-300",
        "progress-tint": "bg-yellow-700"
    },
    {
        type: "default",
        bg: "bg-slate-800",
        text: "text-slate-300",
        "progress-dark": "bg-tint-dark",
        "progress-tint": "bg-slate-800"
    }
]

export const createToast = ({ message, title, close, duration = 3000, open, type = "default" }: Props) => {
    let toastLayout = document.getElementById("toast-layout");
    if (!toastLayout) toastLayout = createToastContainer();

    const theme = themes.find(t => t.type === type);

    const toast = document.createElement("div");
    toast.className = `m-1 transform duration-100 opacity-0 translate-x-full h-0 rounded-xl ${theme?.bg} overflow-hidden`

    const progress = document.createElement("div");
    progress.className = `w-full h-1 z-50 ${theme?.["progress-dark"]}`;
    const progressTint = document.createElement("div");
    progressTint.className = `trans h-full ${theme?.["progress-tint"]}`;
    progressTint.style.width = "0%";
    progress.appendChild(progressTint);
    toast.appendChild(progress);

    const toastContainer = document.createElement("div");
    toastContainer.className = "w-[400px] p-5";

    const toastTitle = document.createElement("span");
    toastTitle.className = "text-xl font-bold text-primary";
    toastTitle.innerText = title;
    toastContainer.appendChild(toastTitle);

    const toastMessage = document.createElement("p");
    toastMessage.className = `text-justify ${theme?.text} mt-0`;
    toastMessage.innerText = message;
    toastContainer.appendChild(toastMessage);

    toast.appendChild(toastContainer);

    toastLayout.appendChild(toast);

    setTimeout(() => {
        toast.classList.remove("h-0");
        toast.classList.add("translate-x-0", "opacity-100");
    }, 0);

    const now = Date.now();
    const timerInterval = setInterval(() => {
        let progress = ((Date.now() - now) / duration) * 100;
        if (progress > 110) {
            clearInterval(timerInterval);
            toast.classList.remove("translate-x-0", "opacity-100");
            toast.classList.add("translate-x-full", "opacity-0");
            setTimeout(() => {
                toastLayout.removeChild(toast);
                close && close();
            }, 300);
            return
        }
        progressTint.style.width = `${progress}%`;
    }, 10)
}

// export default function Toast({ message, title, type = "default", duration, open, close, ...props }: Props) {

//     const bg = `${type === "warning" ? "bg-yellow-700" : type === "error" ? "bg-red-800" : type === "success" ? "bg-green-900" : "bg-slate-800"}`
//     const smallText = `${type === "default" ? "text-secondary" : "text-slate-300"} text-justify mt-1`

//     const [tintProgress, setTintProgress] = useState(0);

//     useEffect(() => {
//         if (open) {
//             const now = Date.now();
//             const iv: any = setInterval(() => {
//                 let progress = ((Date.now() - now) / (duration || 3000)) * 100;
//                 if (progress > 100) {
//                     close && close();
//                     setTintProgress(100);
//                     return clearInterval(iv);
//                 }
//                 setTintProgress(progress);

//             }, duration || 100)
//         }
//     }, [open])

//     return (
//         <div
//             {...props}
//             className={`fixed w-[400px] ${bg} top-0 right-0 p-5 z-40 mt-5 rounded-xl transition-all duration-300 ${open ? "opacity-100 transform translate-x-0" : "opacity-0 transform translate-x-full"
//                 }`}
//         >
//             <div className="w-full text-xl font-bold flex items-center justify-between">
//                 <div>{title}</div>
//                 <div>
//                     <CircularProgress
//                         progress={tintProgress}
//                         varient="progress"
//                         tintColor="stroke-white"
//                         className="absolute"
//                         size={20}
//                     />
//                 </div>
//             </div>
//             <p className={smallText}>{message}</p>
//         </div>
//     );
// }