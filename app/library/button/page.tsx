"use client";

import Button from "@/Componenets/Common/Button";
import Page from "@/Componenets/Common/Page";
import Library from "@/Componenets/Feature/Library/Library";
import { IComponent } from "@/Constants/Components";
import ButtonSample from "@/samples/Button";

const component: IComponent = {
    title: "Button",
    description: " button have a variety of styles and colors. You can use them in your project to make it more attractive. they are fully customizable. It is also provided with click effects.",
    codes: [
        {
            fileName: "Button usage",
            code: "https://raw.githubusercontent.com/adhil72/comb./main/src/samples/Button.tsx",
        },
        {
            fileName: "Button.tsx",
            code: "https://raw.githubusercontent.com/adhil72/comb./main/src/Library/Button.tsx"
        }
    ],
    preview: <ButtonSample />
}
export default function Index() {
    return <Page>
        <Library data={component} />
    </Page>
}