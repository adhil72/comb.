import Sidebar from "@/Library/Sidebar";
import { useState } from "react";

export default function SidebarSample() {
    const [openSidebar, setOpenSidebar] = useState(false);
    const [selectedSidebarButton, setSelectedSidebarButton] = useState();

    const sidebarButtons = [
        { title: "Button 1" },
        { title: "Button 2" },
        { title: "Button 3" },
        { title: "Button 4" },
        { title: "Button 5" },
        { title: "Button 6" },
        { title: "Button 7" },
    ]

    return <div className="w-96 h-[50vh]">
        <Sidebar openSidebar={openSidebar} setOpenSidebar={setOpenSidebar} selectedSidebarButton={selectedSidebarButton} sidebarButtons={sidebarButtons} />
    </div>
}