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
    { title: "Toast", path: "/library/toast" },
    { title: "AppBar", path: "/library/appbar" },
    { title: "Modal", path: "/library/modal" },
    { title: "Sidebar", path: "/library/sidebar" },
    { title: "Tooltip", path: "/library/tooltip" },
    { title: "Gradient text", path: "/library/gradient/text" },
]

export { sidebarButtons }