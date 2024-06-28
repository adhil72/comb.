"use client";

import Page from "@/Componenets/Common/Page";
import Library from "@/Componenets/Feature/Library/Library";
import { IComponent } from "@/Constants/Components";
import AppBarSample from "@/samples/AppBar";
import ToastSample from "@/samples/Toast";

const component: IComponent = {
    title: "Appbar",
    details: [
        {
            subTitle: "",
            description: "Comb. Appbar is a horizontal bar that is fixed at the top of the page. It can be used to display the title of the page, the logo of the website, the navigation menu, and the user profile. The appbar can be used with a button, and the button can be positioned to the left or right of the appbar. The appbar can be used with a dropdown, and the dropdown can be positioned to the left or right of the appbar. The appbar can be used with a search bar, and the search bar can be positioned to the left or right of the appbar.",
            codes: [
                {
                    fileName: "Appbar usage",
                    code: "https://raw.githubusercontent.com/adhil72/comb./main/src/samples/AppBar.tsx",
                },
                {
                    fileName: "AppBar.tsx",
                    code: "https://raw.githubusercontent.com/adhil72/comb./main/src/Library/AppBar.tsx"
                }
            ],
            preview: <AppBarSample />
        }
    ]
}
export default function Index() {
    return <Page>
        <Library data={component} />
    </Page>
}