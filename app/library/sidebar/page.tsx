"use client";

import Page from "@/Componenets/Common/Page";
import Library from "@/Componenets/Feature/Library/Library";
import { IComponent } from "@/Constants/Components";
import SidebarSample from "@/samples/Sidebar";

const component: IComponent = {
    title: "Sidebar",
    details: [
        {
            subTitle: "",
            description: "Comb. provides a sidebar component that can be used to display a sidebar to the user. The sidebar can be used to display a list of items. The sidebar can be used with a search input, and the search input can be used to filter the list of items. The sidebar can be used with a button, and the button can be used to add an item to the list of items. The sidebar can be used with a list of items, and the list of items can be used to navigate to a different page.",
            codes: [
                {
                    fileName: "Sidebar usage",
                    code: "https://raw.githubusercontent.com/adhil72/comb./main/src/samples/Sidebar.tsx",
                },
                {
                    fileName: "Sidebar.tsx",
                    code: "https://raw.githubusercontent.com/adhil72/comb./main/src/Library/Sidebar.tsx"
                }
            ],
            preview: <SidebarSample />
        }
    ]
}
export default function Index() {
    return <Page>
        <Library data={component} />
    </Page>
}