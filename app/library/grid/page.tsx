"use client";

import Page from "@/Componenets/Common/Page";
import Library from "@/Componenets/Feature/Library/Library";
import { IComponent } from "@/Constants/Components";
import GridSample from "@/samples/Grid";
import InputSample from "@/samples/Input";

const component: IComponent = {
    title: "Grid",
    details: [
        {
            subTitle: "",
            description: "The grid component is used to create a grid layout. The grid component can be used with the autoArrangement prop to automatically arrange the grid columns based on the arrangement formula. The grid component can be used with the arrangementFormula prop to specify the arrangement formula. The grid component can be used with the children prop to add child components to the grid. The grid component can be used with the className prop to add custom styles to the grid.",
            codes: [
                {
                    fileName: "Grid usage",
                    code: "https://raw.githubusercontent.com/adhil72/comb./main/src/samples/Grid.tsx",
                },
                {
                    fileName: "Grid.tsx",
                    code: "https://raw.githubusercontent.com/adhil72/comb./main/src/Library/Grid.tsx"
                }
            ],
            preview: <GridSample />
        }
    ]
}
export default function Index() {
    return <Page>
        <Library data={component} />
    </Page>
}