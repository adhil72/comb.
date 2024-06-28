import { ISidebarButton } from "@/Constants/SIdebar";
import { createContext } from "react";

export interface LibraryContextType {
    selectedSidebarButton?: ISidebarButton;
    setSelectedSidebarButton?: (selectedSidebarButton: ISidebarButton) => void;
    openSidebar: boolean;
    setOpenSidebar: (openSidebar: boolean) => void;
}

const initialData: LibraryContextType = {
    selectedSidebarButton: { title: "", path: "" },
    setSelectedSidebarButton: () => { },
    openSidebar: false,
    setOpenSidebar: () => { },
};

export const LibraryContext = createContext(initialData);