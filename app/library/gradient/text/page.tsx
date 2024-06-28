"use client";

import Page from "@/Componenets/Common/Page";
import Library from "@/Componenets/Feature/Library/Library";
import { IComponent } from "@/Constants/Components";
import GradientText from "@/samples/GradientText";
import GradientTextSample from "@/samples/GradientText";
import ToastSample from "@/samples/Toast";
import TooltipSample from "@/samples/Tooltip";

const component: IComponent = {
    title: "Gradient Text",
    details: [
        {
            subTitle: "",
            description: "Comb. provides a gradient text component that can be used to display a text with gradient color. The gradient text can be used with a title, message, and duration. The gradient text can be used with a close button, and the close button can be positioned to the left or right of the gradient text.",
            codes: [
                {
                    fileName: "GradientText.tsx",
                    code: "https://raw.githubusercontent.com/adhil72/comb./main/src/samples/GradientText.tsx"
                }
            ],
            preview: <GradientTextSample />
        }
    ]
}
export default function Index() {
    return <Page>
        <Library data={component} />
    </Page>
}