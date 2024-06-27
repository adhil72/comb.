"use client";

import Flex from "@/Componenets/Common/Flex";
import Sidebar from "@/Componenets/Feature/Library/Sidebar/Sidebar";

export default function Layout({
    children,
}: Readonly<{
    children: React.ReactNode;
}>) {
    return <Flex>
        <Sidebar />
        {children}
    </Flex>
}