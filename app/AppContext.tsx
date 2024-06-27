import {createContext} from "react";

export interface AppContextType {}
const initialAppContext: AppContextType = {};
export const AppContext = createContext<AppContextType>(initialAppContext);