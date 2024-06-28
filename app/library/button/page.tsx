"use client";

import Button from "@/Componenets/Common/Button";
import Page from "@/Componenets/Common/Page";
import Library from "@/Componenets/Feature/Library/Library";
import { IComponent } from "@/Constants/Components";

const component: IComponent = {
    title: "Button",
    description: " button have a variety of styles and colors. You can use them in your project to make it more attractive. they are fully customizable. It is also provided with click effects.",
    codes: [
        {
            fileName: "Button usage",
            code: "https://raw.githubusercontent.com/adhil72/my-portfolio/main/src/Components/Common/Button.tsx",
        },
        {
            fileName: "Button.tsx",
            code: "https://raw.githubusercontent.com/adhil72/my-portfolio/main/src/Components/Common/Button.tsx"
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