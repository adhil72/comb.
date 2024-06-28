"use client";

import Page from "@/Componenets/Common/Page";
import Library from "@/Componenets/Feature/Library/Library";
import { IComponent } from "@/Constants/Components";
import InputSample from "@/samples/Input";

const component: IComponent = {
    title: "Inputs",
    description: " Comb. provides styled inputs for text, number, email, password, and textarea. It is also possible to add a label, placeholder, and error message to the input. The input can be disabled, read-only, or required. The input can be used with an icon, and the icon can be positioned to the left or right of the input. The input can be used with a button, and the button can be positioned to the left or right of the input. The input can be used with a dropdown, and the dropdown can be positioned to the left or right of the input. The input can be used with a date picker, and the date picker can be positioned to the left or right of the input",
    codes: [
        {
            fileName: "Input usage",
            code: "https://raw.githubusercontent.com/adhil72/comb./main/src/samples/Input.tsx",
        },
        {
            fileName: "Input.tsx",
            code: "https://raw.githubusercontent.com/adhil72/comb./main/src/Library/Input.tsx"
        }
    ],
    preview: <InputSample />
}
export default function Index() {
    return <Page>
        <Library data={component} />
    </Page>
}