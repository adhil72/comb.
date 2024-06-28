import { useContext, useEffect, useState } from 'react';
import { useRouter } from 'next/router';

import Container from "@/Componenets/Common/Container";
import Sidebar from "./Sidebar/Sidebar";
import Box from "@/Componenets/Common/Box";
import Flex from "@/Componenets/Common/Flex";
import AppBar from "../AppBar/AppBar";
import Logo from "../Logo/Logo";
import Button from "@/Componenets/Common/Button";
import CodeDiv from "@/Componenets/Common/CodeDiv";
import { IoLogoGithub } from "react-icons/io5";
import { IComponent } from "@/Constants/Components";
import { copyToClipboard } from "@/Utils/ClipboardUtils";
import { MdMenu } from 'react-icons/md';
import { LibraryContext } from '../../../../app/library/context';

export default function Library(props: { data: IComponent }) {

    const [data, setData] = useState<IComponent>(props.data);
    const ctx = useContext(LibraryContext);

    return (
        <Flex className="w-full">
            <Box className="w-[15%] h-screen hidden lg:block" />
            <Flex className="h-screen hidden lg:block">
                <Box className="h-screen bg-opacity-30 w-[1px] bg-tint-dark" />
            </Flex>
            <Flex className="w-full lg:w-[85%] flex-col">
                <Flex className=' items-center'>
                    <Button onClick={() => ctx.setOpenSidebar(!ctx.openSidebar)} className='absolute z-10 !py-2 !px-3 ml-5 lg:hidden'>
                        <span className='text-primary text-xl'>
                            <MdMenu />
                        </span>
                    </Button>
                    <AppBar />
                </Flex>
                <Container className="py-10 lg:!px-20 flex flex-col">
                    <span className="text-4xl font-extrabold">{props.data.title}</span>
                    {
                        data.details.map((detail, index) => <Box key={index}>
                            <span className="text-2xl font-semibold mt-5">{detail.subTitle}</span>
                            <span className="!text-secondary mt-2">
                                <Logo className="!font-normal" />{detail.description}
                            </span>
                            <Flex className="mt-10 justify-center">
                                {detail.preview}
                            </Flex>
                            {detail.codes.map(({ code, fileName }, index) => (
                                <Box key={index} className="bg-secondary rounded-xl mt-10 pb-3">
                                    <Flex className="justify-between p-2 items-center">
                                        <Flex className="pl-4">
                                            <span className="font-semibold">{fileName}</span>
                                        </Flex>
                                        <Flex className="pr-4">
                                            <Button variant="text" className="text-tint" onClick={() => copyToClipboard(code)}>copy</Button>
                                            <Button variant="text" className="text-tint"><IoLogoGithub className="text-2xl mr-2" /> View on github</Button>
                                        </Flex>
                                    </Flex>
                                    <Box className="w-full h-[1px] bg-tint-dark mb-2 bg-opacity-30"></Box>
                                    <Box className="mx-4 bg-black rounded-2xl overflow-hidden p-3">
                                        <CodeDiv url={code} />
                                    </Box>
                                </Box>
                            ))}
                        </Box>
                        )}
                </Container>
            </Flex>
        </Flex>
    );
}
