import { ISidebarButton } from "@/Constants/SIdebar";
import { createContext } from "react";

export interface LibraryContextType {
    selectedSidebarButton?: ISidebarButton;
    setSelectedSidebarButton?: (selectedSidebarButton: ISidebarButton) => void;
}

const initialData: LibraryContextType = {
    selectedSidebarButton: { title: "", path: "" },
    setSelectedSidebarButton: () => { },
};

export const LibraryContext = createContext(initialData);