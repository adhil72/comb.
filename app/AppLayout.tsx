"use client";

import AppBar from "@/Componenets/Feature/AppBar/AppBar";
import { AppContext, AppContextType } from "./AppContext";
import React, { useEffect, useMemo, useState } from "react";
import Footer from "@/Componenets/Feature/Footer/Footer";
import Components, { IComponent } from "@/Constants/Components";

export default function AppLayout(props: React.HTMLAttributes<HTMLBodyElement>) {

    const [selectedComponent, setSelectedComponent] = useState<IComponent>(Components[0]);

    const ContextData: AppContextType = useMemo(() => {
        return {
            selectedComponent,
            setSelectedComponent
        }
    }, [selectedComponent, selectedComponent])

    return <>
        <AppContext.Provider value={ContextData}>
            <body {...props} className={"bg-primary text-primary w-full h-screen overflow-auto"}>
                {props.children}
            </body>
        </AppContext.Provider>
    </>
}