"use client";

import Button from "@/Componenets/Common/Button";
import Container from "@/Componenets/Common/Container";
import Flex from "@/Componenets/Common/Flex";
import Page from "@/Componenets/Common/Page";
import Library from "@/Componenets/Feature/Library/Library";
import { IComponent } from "@/Constants/Components";
import ContainerSample from "@/samples/Container";

const data: IComponent = {
    title: "Container",
    description: " Container is a simple component that is used to wrap other components. It is used to provide padding and margin to the components. It is also used to provide a background color to the components.",
    codes: [
        {
            fileName: "Container usage",
            code: "https://raw.githubusercontent.com/adhil72/my-portfolio/main/src/Components/Common/Button.tsx"
        },
        {
            fileName: "Container.tsx",
            code: "https://raw.githubusercontent.com/adhil72/my-portfolio/main/src/Components/Common/Button.tsx"
        }
    ],
    preview: <ContainerSample />
}
export default function Index() {
    return <Page>
        <Library data={data} />
    </Page>
}