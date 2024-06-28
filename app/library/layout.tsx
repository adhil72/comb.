"use client";

import Flex from "@/Componenets/Common/Flex";
import Sidebar from "@/Componenets/Feature/Library/Sidebar/Sidebar";
import { LibraryContext } from "./context";
import { useMemo, useState } from "react";
import { ISidebarButton } from "@/Constants/SIdebar";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {

    const [selectedComponent, setSelectedComponent] = useState<ISidebarButton>()
    const [openSidebar, setOpenSidebar] = useState(false)

    const contextData = useMemo(() => ({
        selectedSidebarButton: selectedComponent,
        setSelectedSidebarButton: setSelectedComponent,
        openSidebar,
        setOpenSidebar
    }), [selectedComponent, setSelectedComponent, openSidebar, setOpenSidebar])

    return <Flex>
        <LibraryContext.Provider value={contextData}>
            <Sidebar />
            {children}
        </LibraryContext.Provider>
    </Flex>
}