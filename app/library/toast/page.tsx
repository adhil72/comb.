"use client";

import Page from "@/Componenets/Common/Page";
import Library from "@/Componenets/Feature/Library/Library";
import { IComponent } from "@/Constants/Components";
import ToastSample from "@/samples/Toast";

const component: IComponent = {
    title: "Toast",
    details: [
        {
            subTitle: "",
            description: "Comb. provides a toast component that can be used to display a message to the user. The toast can be used to display a success, error, warning, or default message. The toast can be used with a title, message, and duration. The toast can be used with a close button, and the close button can be positioned to the left or right of the toast.",
            codes: [
                {
                    fileName: "Toast usage",
                    code: "https://raw.githubusercontent.com/adhil72/comb./main/src/samples/Toast.tsx",
                },
                {
                    fileName: "Toast.tsx",
                    code: "https://raw.githubusercontent.com/adhil72/comb./main/src/Library/Toast.tsx"
                }
            ],
            preview: <ToastSample />
        }
    ]
}
export default function Index() {
    return <Page>
        <Library data={component} />
    </Page>
}