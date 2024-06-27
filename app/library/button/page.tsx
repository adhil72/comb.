"use client";

import Button from "@/Componenets/Common/Button";
import Page from "@/Componenets/Common/Page";
import Library from "@/Componenets/Feature/Library/Library";
import { IComponent } from "@/Constants/Components";

const component: IComponent = {
    title: "Button",
    description: "Comp. button have a variety of styles and colors. You can use them in your project to make it more attractive. they are fully customizable. It is also provided with click effects.",
    codes: [
        {
            fileName: "Button usage",
            code: `import Button from "./Button";
export default function Test() {
return <div className="flex">
    <Button variant="text" className="w-full text-center ml-1">Click me</Button>
    <Button variant="outlined" className="w-full text-center mx-1">Click me</Button>
    <Button className="w-full text-center mr-1">Click me</Button>
</div>
}`,
        },
        {
            fileName: "Button.tsx",
            code: `import React, { HTMLAttributes, useEffect } from "react";

interface ButtonProps extends HTMLAttributes<HTMLDivElement> {
variant?: "contained" | "outlined" | "text";
}

export default function Button({ className, unselectable = "on", variant = "contained", ...props }: ButtonProps) {

const solidButton = \`bg-tint text-white px-5 py-3 rounded-xl cursor-pointer hover:bg-opacity-90 \${className\}\`;
const outlinedButton = \`border border-tint text-tint px-5 py-3 rounded-xl cursor-pointer bg-tint bg-opacity-0 hover:bg-opacity-10 \$\{className\}\`;
const textButton = \`text-tint bg-tint bg-opacity-0 px-5 py-3 cursor-pointer hover:bg-opacity-10 rounded-xl \$\{className\}\`;
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
})

return (
    <div
        ref={ref}
        unselectable={unselectable}
        {...props}
        className={\`\${variant === "contained" ? solidButton : variant === "outlined" ? outlinedButton : textButton} font-bold uppercase flex items-center justify-center\`\}
        style={{ userSelect: "none" }} // Add this line
    ></div>
);
}
`
        }
    ],
    preview: <div className="flex justify-center">
        <Button variant="text" className="w-60 text-center ml-5">Click me</Button>
        <Button variant="outlined" className="w-60 text-center mx-5">Click me</Button>
        <Button className="w-60 text-center mr-5">Click me</Button>
    </div>
}
export default function Index() {
    return <Page>
        <Library data={component} />
    </Page>
}