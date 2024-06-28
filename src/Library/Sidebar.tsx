"use client";

import Box from "@/Componenets/Common/Box";
import Flex from "@/Componenets/Common/Flex";
import { BsSearch } from "react-icons/bs";
import Button from "@/Componenets/Common/Button";

export interface ISidebarButton {
    title: string;
}

interface Props {
    selectedSidebarButton: any;
    openSidebar: any;
    setOpenSidebar: any;
    itemClick?: (button: any) => void;
    sidebarButtons: ISidebarButton[];
}

export default function Sidebar({ selectedSidebarButton, openSidebar, setOpenSidebar, itemClick, sidebarButtons }: Props) {
    return <Flex onClick={() => setOpenSidebar(false)} className={`trans ${openSidebar ? "w-full" : "w-0"} h-full overflow-x-hidden cursor-pointer lg:flex lg:w-[100%] flex-col z-20 bg-black lg:bg-none bg-opacity-30`}>
        <Flex className="w-[40%] lg:w-full h-full text-start cursor-default">
            <Flex onClick={(e) => e.stopPropagation()} className="w-full bg-secondary backdrop-blur-[100px] bg-opacity-85 z-10 flex-col py-4 px-4 overflow-auto">
                <span className="text-3xl text-primary font-extrabold">Library</span>
                <Flex className="p-2 bg-white bg-opacity-10 rounded-full items-center text-sm mt-2">
                    <BsSearch className="mx-3" />
                    <input type="text" className="bg-transparent text-white w-full outline-none" placeholder="Search" />
                </Flex>
                <Box className="w-full h-[1px] bg-tint-dark my-2 bg-opacity-75" />

                <Box className="h-[100%] overflow-y-auto scrollable-div text-start">
                    {
                        sidebarButtons?.map((button, index) => <Button key={index} onClick={() => { itemClick && itemClick(button) }} variant={button.title === selectedSidebarButton?.title ? "contained" : "text"} className={`!text-primary !normal-case !font-semibold !justify-start mt-2`}>{button.title}</Button>)
                    }
                </Box>

            </Flex>
            <Box className="w-[10%] h-52 bg-tint absolute z-0 " />
        </Flex>
    </Flex>
}