"use client";

import Box from "@/Componenets/Common/Box";
import Flex from "@/Componenets/Common/Flex";
import IconBox from "@/Componenets/Common/IconBox";
import Logo from "../../Logo/Logo";
import { BsSearch } from "react-icons/bs";
import Button from "@/Componenets/Common/Button";
import { useContext, useEffect, useState } from "react";
import { useParams, usePathname, useRouter } from "next/navigation";
import { ISidebarButton, sidebarButtons } from "@/Constants/SIdebar";
import { LibraryContext } from "../../../../../app/library/context";

export default function Sidebar() {

    const path = usePathname();
    const router = useRouter();

    const { selectedSidebarButton, setSelectedSidebarButton } = useContext(LibraryContext);

    const handleButtonClick = (button: ISidebarButton) => {
        if (setSelectedSidebarButton) setSelectedSidebarButton(button);
        router.push(button.path);
    }

    useEffect(() => {
        const selected = sidebarButtons.find(button => button.path === path);
        if (selected && setSelectedSidebarButton) setSelectedSidebarButton(selected);
    }, [path])

    return <Flex className="w-[15%] flex-col fixed">
        <Flex className="w-full h-screen text-start">
            <Flex className="w-full bg-secondary backdrop-blur-[100px] bg-opacity-85 z-10 flex-col py-4 px-4 overflow-auto">
                <span className="text-3xl text-primary font-extrabold">Library</span>
                <Flex className="p-2 bg-white bg-opacity-10 rounded-full items-center text-sm mt-2">
                    <BsSearch className="mx-3" />
                    <input type="text" className="bg-transparent text-white w-full outline-none" placeholder="Search" />
                </Flex>
                <Box className="w-full h-[1px] bg-tint-dark my-2 bg-opacity-75" />

                <Box className="h-[100%] overflow-y-auto scrollable-div text-start">
                    {
                        sidebarButtons?.map((button, index) => <Button onClick={() => handleButtonClick(button)} variant={button.title === selectedSidebarButton?.title ? "contained" : "text"} className={`!text-primary !normal-case !font-semibold !justify-start mt-2`}>{button.title}</Button>)
                    }
                </Box>

            </Flex>
            <Box className="w-32 h-screen bg-tint absolute z-0 " />
        </Flex>
    </Flex>
}