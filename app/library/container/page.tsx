"use client";

import Button from "@/Componenets/Common/Button";
import Container from "@/Componenets/Common/Container";
import Flex from "@/Componenets/Common/Flex";
import Page from "@/Componenets/Common/Page";
import Library from "@/Componenets/Feature/Library/Library";
import { IComponent } from "@/Constants/Components";

const data: IComponent ={
        title: "Container",
        description: "Container is a simple component that is used to wrap other components. It is used to provide padding and margin to the components. It is also used to provide a background color to the components.",
        codes: [
            {
                fileName: "Container usage",
                code: `<Flex className="justify-center">
    <div className="w-full bg-slate-900">
        <Container>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
        </Container>
    </div>
</Flex>`
            },
            {
                fileName: "Container.tsx",
                code: `import React from "react";

export default function Container(props: React.HTMLProps<HTMLDivElement>) {
    return <div {...props} className={\`w-full px-10 md:px-28 lg:px-40 \$\{props.className\}]\`}></div>
}`
            }
        ],
        preview: <Flex className="justify-center">
            <div className="w-full bg-slate-900">
                <Container>
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum. 
                </Container>
            </div>
        </Flex>
    }
export default function Index() {
    return <Page>
        <Library data={data} />
    </Page>
}