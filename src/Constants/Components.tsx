import Button from "@/Componenets/Common/Button"

export interface IComponent {
    title: string,
    details: {
        subTitle: string,
        description: string,
        preview: React.ReactNode,
        codes: { fileName: string, code: string }[],
    }[]
}

const Components: IComponent[] = [

]

export default Components