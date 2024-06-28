"use client";

import Button from "@/Componenets/Common/Button";
import Page from "@/Componenets/Common/Page";
import RawText from "@/Componenets/Common/RawText";
import Library from "@/Componenets/Feature/Library/Library";
import { IComponent } from "@/Constants/Components";
import Input from "@/Library/Input";

const component: IComponent = {
    title: "Inputs",
    description: " Comb. provides styled inputs for text, number, email, password, and textarea. It is also possible to add a label, placeholder, and error message to the input. The input can be disabled, read-only, or required. The input can be used with an icon, and the icon can be positioned to the left or right of the input. The input can be used with a button, and the button can be positioned to the left or right of the input. The input can be used with a dropdown, and the dropdown can be positioned to the left or right of the input. The input can be used with a date picker, and the date picker can be positioned to the left or right of the input",
    codes: [
        {
            fileName: "Input usage",
            code: "https://raw.githubusercontent.com/adhil72/my-portfolio/main/src/Components/Common/Button.tsx"
        },
        {
            fileName: "Input.tsx",
            code: "https://raw.githubusercontent.com/adhil72/my-portfolio/main/src/Components/Common/Button.tsx"
        }
    ],
    preview: <div className="flex w-full justify-center">
        <Input className="mr-2" variant="outlined" label="Email" type="email" />
        <Input className="ml-2" variant="solid" label="Email" type="email" />
    </div>
}
export default function Index() {
    return <Page>
        <Library data={component} />
    </Page>
}