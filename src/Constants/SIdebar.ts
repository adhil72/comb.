export interface ISidebarButton {
    title: string;
    path: string;
}

const sidebarButtons: ISidebarButton[] = [
    { title: "Button", path: "/library/button" },
    { title: "Container", path: "/library/container" },
    { title: "Inputs", path: "/library/inputs" },
]

export { sidebarButtons }