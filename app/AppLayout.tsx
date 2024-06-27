"use client";

import AppBar from "@/Componenets/Feature/AppBar/AppBar";
import {AppContext, AppContextType} from "./AppContext";
import React, {useEffect, useMemo} from "react";

export default function AppLayout(props: React.HTMLAttributes<HTMLBodyElement>) {

    const ContextData: AppContextType = useMemo(() => {
        return {}
    }, [])

    return <>
        <AppContext.Provider value={ContextData}>
            <body {...props} className={"bg-primary text-primary"}>
            <AppBar/>
            {props.children}
            </body>
        </AppContext.Provider>
    </>
}