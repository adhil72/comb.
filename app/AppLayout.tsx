"use client";

import AppBar from "@/Componenets/Feature/AppBar/AppBar";
import { AppContext, AppContextType } from "./AppContext";
import React, { useEffect, useMemo } from "react";
import Footer from "@/Componenets/Feature/Footer/Footer";

export default function AppLayout(props: React.HTMLAttributes<HTMLBodyElement>) {

    const ContextData: AppContextType = useMemo(() => {
        return {}
    }, [])

    return <>
        <AppContext.Provider value={ContextData}>
            <body {...props} className={"bg-primary text-primary w-full h-screen overflow-auto"}>
                <AppBar />
                {props.children}
                <Footer />
            </body>
        </AppContext.Provider>
    </>
}