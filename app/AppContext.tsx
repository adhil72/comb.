import { IComponent } from "@/Constants/Components";
import { createContext } from "react";

export interface AppContextType {
    setSelectedComponent?: (component: IComponent) => void;
    selectedComponent?: IComponent;
}
const initialAppContext: AppContextType = {};

export const AppContext = createContext<AppContextType>(initialAppContext);