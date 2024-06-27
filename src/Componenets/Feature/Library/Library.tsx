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
import { useState } from "react";

export default function Library(props: { data: IComponent }) {

    const [data, setData] = useState<IComponent>(props.data);

    return (
        <Flex className="w-full">
            <Box className="w-[15%] h-screen" />
            <Flex className="h-screen">
                <Box className="h-screen bg-opacity-30 w-[1px] bg-tint-dark" />
            </Flex>
            <Flex className="w-[85%] flex-col ">
                <AppBar />
                <Container className="py-10 lg:!px-20 flex flex-col">
                    <span className="text-4xl font-extrabold">{props.data.title}</span>
                    <span className="!text-secondary">
                        <Logo className="!font-normal" /> {props.data.description}
                    </span>
                    <Flex className="mt-10 justify-center">
                        {props.data.preview}
                    </Flex>
                    {
                        data.codes.map(({ code, fileName }, index) => <Box key={index} className="bg-secondary rounded-xl mt-10 pb-3">
                            <Flex className="justify-between p-2 items-center">
                                <Flex className="pl-4">
                                    <span className="font-semibold">{fileName}</span>
                                </Flex>
                                <Flex className="pr-4">
                                    <Button variant="text" className="text-tint">copy</Button>
                                    <Button variant="text" className="text-tint"><IoLogoGithub className="text-2xl mr-2" /> View on github</Button>
                                </Flex>
                            </Flex>
                            <Box className="w-full h-[1px] bg-tint-dark mb-2 bg-opacity-30"></Box>
                            <Box className="mx-4 bg-black rounded-2xl overflow-hidden">
                                <CodeDiv code={code} />
                            </Box>
                        </Box>)
                    }
                </Container>
            </Flex>
        </Flex>
    );
}