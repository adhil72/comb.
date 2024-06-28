"use client";

import Page from "@/Componenets/Common/Page";
import Library from "@/Componenets/Feature/Library/Library";
import { IComponent } from "@/Constants/Components";
import CircularProgress from "@/Library/CircularProgress";
import CircularProgressSample from "@/samples/CircularProgress";
import InputSample from "@/samples/Input";
import LinearProgressSample from "@/samples/LinearProgress";

const component: IComponent = {
    title: "Progress",
    details: [
        {
            subTitle: "Circular Progress",
            description: "Circular progress is a component that shows the progress of an operation in a circular form. It is used to show the progress of an operation in a circular form. It is also used to show the progress of an operation in a circular form.",
            codes: [
                {
                    fileName: "Input usage",
                    code: "https://raw.githubusercontent.com/adhil72/comb./main/src/samples/CircularProgress.tsx",
                },
                {
                    fileName: "Input.tsx",
                    code: "https://raw.githubusercontent.com/adhil72/comb./main/src/Library/CircularProgress.tsx"
                }
            ],
            preview: <CircularProgressSample />
        },
        {
            subTitle: "Linear Progress",
            description: "Linear progress is a component that shows the progress of an operation in a linear form. It is used to show the progress of an operation in a linear form. It is also used to show the progress of an operation in a linear form.",
            codes: [
                {
                    fileName: "Input usage",
                    code: "https://raw.githubusercontent.com/adhil72/comb./main/src/samples/LinearProgress.tsx",
                },
                {
                    fileName: "Input.tsx",
                    code: "https://raw.githubusercontent.com/adhil72/comb./main/src/Library/LinearProgress.tsx"
                }
            ],
            preview: <LinearProgressSample />
        }
    ]
}
export default function Index() {
    return <Page>
        <Library data={component} />
    </Page>
}