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
    { title: "Tabs", path: "/library/tabs" },
    { title: "Tooltip", path: "/library/tooltip" },
    { title: "Typography", path: "/library/typography" },
    { title: "Theme", path: "/library/theme" },
    { title: "Transition", path: "/library/transition" },
    { title: "Utilities", path: "/library/utilities" },
    { title: "Icons", path: "/library/icons" },
    { title: "Library", path: "/library" },
    { title: "Components", path: "/components" },
    { title: "Features", path: "/features" },
    { title: "Home", path: "/" }
]

export { sidebarButtons }