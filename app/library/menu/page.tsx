"use client";

import Page from "@/Componenets/Common/Page";
import Library from "@/Componenets/Feature/Library/Library";
import { IComponent } from "@/Constants/Components";
import MenuSample from "@/samples/Menu";
import ToastSample from "@/samples/Toast";
import TooltipSample from "@/samples/Tooltip";

const component: IComponent = {
    title: "Menu",
    details: [
        {
            subTitle: "",
            description: " Menu is a component that displays a list of items in a dropdown. It is used to display a list of items that can be selected.",
            codes: [
                {
                    fileName: "Menu usage",
                    code: "https://raw.githubusercontent.com/adhil72/comb./main/src/samples/Menu.tsx",
                },
                {
                    fileName: "Menu.tsx",
                    code: "https://raw.githubusercontent.com/adhil72/comb./main/src/Library/Menu.tsx"
                }
            ],
            preview: <MenuSample />
        }
    ]
}
export default function Index() {
    return <Page>
        <Library data={component} />
    </Page>
}