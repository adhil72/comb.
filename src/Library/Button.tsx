import React, { HTMLAttributes, useEffect } from "react";

interface ButtonProps extends HTMLAttributes<HTMLDivElement> {
    variant?: "contained" | "outlined" | "text";
}

export default function Button({ className, unselectable = "on", variant = "contained", ...props }: ButtonProps) {

    const solidButton = `bg-tint text-white px-5 py-3 rounded-xl cursor-pointer hover:bg-opacity-90 ${className}`;
    const outlinedButton = `border border-tint text-tint px-5 py-3 rounded-xl cursor-pointer bg-tint bg-opacity-0 hover:bg-opacity-10 ${className}`;
    const textButton = `text-tint bg-tint bg-opacity-0 px-5 py-3 cursor-pointer hover:bg-opacity-10 rounded-xl ${className}`;
    const ref = React.createRef<HTMLDivElement>();

    useEffect(() => {
        if (ref.current === null) return;
        ref.current.addEventListener('mousedown', () => {
            if (ref.current === null) return;
            if (variant === "contained") {
                ref.current.classList.remove("hover:bg-opacity-90");
                ref.current.classList.add("bg-opacity-70");
            } else if (variant === "outlined") {
                ref.current.classList.remove("hover:bg-opacity-10");
                ref.current.classList.add("bg-opacity-20");
            } else {
                ref.current.classList.remove("hover:bg-opacity-10");
                ref.current.classList.add("bg-opacity-20");
            }
        });

        ref.current.addEventListener('mouseup', () => {
            if (ref.current === null) return;
            if (variant === "contained") {
                ref.current.classList.add("hover:bg-opacity-90");
                ref.current.classList.remove("bg-opacity-70");
            } else if (variant === "outlined") {
                ref.current.classList.add("hover:bg-opacity-10");
                ref.current.classList.remove("bg-opacity-20");
            } else {
                ref.current.classList.add("hover:bg-opacity-10");
                ref.current.classList.remove("bg-opacity-20");
            }
        });

        ref.current.addEventListener('mouseleave', () => {
            if (ref.current === null) return;
            if (variant === "contained") {
                ref.current.classList.add("hover:bg-opacity-90");
                ref.current.classList.remove("bg-opacity-70");
            } else if (variant === "outlined") {
                ref.current.classList.add("hover:bg-opacity-10");
                ref.current.classList.remove("bg-opacity-20");
            } else {
                ref.current.classList.add("hover:bg-opacity-10");
                ref.current.classList.remove("bg-opacity-20");
            }
        });
    })

    return (
        <div
            ref={ref}
            unselectable={unselectable}
            {...props}
            className={`${variant === "contained" ? solidButton : variant === "outlined" ? outlinedButton : textButton} font-bold uppercase flex items-center justify-center trans`}
            style={{ userSelect: "none" }} // Add this line
        ></div>
    );
}
