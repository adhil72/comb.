"use client";

import Page from "@/Componenets/Common/Page";
import Library from "@/Componenets/Feature/Library/Library";
import { IComponent } from "@/Constants/Components";
import ToastSample from "@/samples/Toast";
import TooltipSample from "@/samples/Tooltip";

const component: IComponent = {
    title: "Tooltip",
    details: [
        {
            subTitle: "",
            description: "Comb. provides a tooltip component that can be used to display a message to the user. The tooltip can be used to display a success, error, warning, or default message. The tooltip can be used with a title, message, and duration. The tooltip can be used with a close button, and the close button can be positioned to the left or right of the tooltip.",
            codes: [
                {
                    fileName: "Tooltip usage",
                    code: "https://raw.githubusercontent.com/adhil72/comb./main/src/samples/Tooltip.tsx",
                },
                {
                    fileName: "Tooltip.tsx",
                    code: "https://raw.githubusercontent.com/adhil72/comb./main/src/Library/Tooltip.tsx"
                }
            ],
            preview: <TooltipSample />
        }
    ]
}
export default function Index() {
    return <Page>
        <Library data={component} />
    </Page>
}