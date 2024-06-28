export interface ISidebarButton {
    title: string;
    path: string;
}

const sidebarButtons: ISidebarButton[] = [
    { title: "Button", path: "/library/button" },
    { title: "Container", path: "/library/container" },
    { title: "Inputs", path: "/library/inputs" },
    { title: "Progress", path: "/library/progress" },
    { title: "Grid", path: "/library/grid" },
    { title: "Toast", path: "/library/toast" }
]

export { sidebarButtons }