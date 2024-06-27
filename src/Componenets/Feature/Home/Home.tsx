import Cover from "@/Assets/Cover";
import Box from "@/Componenets/Common/Box";
import Button from "@/Componenets/Common/Button";
import Container from "@/Componenets/Common/Container";
import Flex from "@/Componenets/Common/Flex";
import Image from "next/image";
import Logo from "../Logo/Logo";
import { IoLogoWebComponent } from "react-icons/io5";
import { RiNpmjsFill } from "react-icons/ri";
import { BsCode } from "react-icons/bs";
import CodeDiv from "@/Componenets/Common/CodeDiv";

const code = `import Button from "./Button";

export default function Test() {
    return <div>
        <Button variant="text" className="w-full text-center ml-1">Click me</Button>
        <Button variant="outlined" className="w-full text-center mx-1">Click me</Button>
        <Button className="w-full text-center mr-1">Click me</Button>
    </div>
}`

export default function Home() {
    return <Container className="w-full">
        <Flex className="lg:h-screen flex-col-reverse lg:justify-normal lg:items-center lg:flex-row">
            <Box className="w-full lg:w-1/2 mt-10 lg:mt-0">
                <Box className="text-start">
                    <span className="text-3xl md:text-6xl font-extrabold">Uncover the Perfect Component</span> <br />
                    <span className="text-xl md:text-4xl font-semibold">Tailored Solutions for Your Unique Requirements</span>
                    <Button className="mt-5 w-full text-center md:w-fit">discover components</Button>
                </Box>
            </Box>
            <Box className="w-full lg:w-1/2 mt-32 lg:mt-0">
                <Flex className="justify-end">
                    <Box className="w-full h-3/4 rounded-3xl overflow-hidden">
                        <img src={"https://img.uxcel.com/tags/user-interface-ui-components-1707764923906-2x.jpg"} alt="Cover" className="w-full h-full" />
                    </Box>
                </Flex>
            </Box>
        </Flex>
        <Flex className="flex-col py-10">
            <span className="text-tint uppercase font-extrabold">components</span>
            <span className="text-primary text-5xl font-extrabold">
                How to use <Logo />
            </span>
            <span className="text-secondary"><Logo className="!font-normal" /> provides diffrent methods to use its library </span>

            <Flex className="justify-between flex-col md:flex-row mt-5">
                <Flex className="w-full md:w-1/2 flex-col md:mr-2 xl:mr-10">
                    <Flex className="items-center border-[1px] border-tint-dark bg-tint bg-opacity-10 p-4 rounded-xl w-full ">
                        <Box className="p-2 bg-secondary rounded-full ml-5">
                            <span className="text-xl uppercase font-extrabold"><RiNpmjsFill /></span>
                        </Box>
                        <Box className="p-2 ml-5">
                            <span className="text-md font-bold">Components</span>
                            <p className="text-secondary">
                                Our components are available as npm packages. You can install them using npm or yarn. it is the easiest way to use our components.
                            </p>
                            <a className="text-tint font-extrabold mt-2" href="">Get started</a>
                        </Box>
                    </Flex>

                    <Flex className="items-center border-[1px] border-tint-dark p-4 rounded-xl w-full mt-3">
                        <Box className="p-2 bg-secondary rounded-full ml-5">
                            <span className="text-xl uppercase font-extrabold"><BsCode /></span>
                        </Box>
                        <Box className="p-2 ml-5">
                            <span className="text-md font-bold">Code</span>
                            <p className="text-secondary">
                                You can use our components by copying the code from our website. it enables you to use our components without installing any packages.
                            </p>
                            <a className="text-tint font-extrabold mt-2" href="">Get started</a>
                        </Box>
                    </Flex>
                </Flex>
                <Flex className="w-full md:w-1/2 items-center mt-5 md:mt-0 md:ml-2 xl:ml-10">
                    <Box className="bg-secondary w-full rounded-xl overflow-hidden h-fit">
                        <Flex className="p-4">
                            <Button variant="text" className="w-full text-center ml-1">Click me</Button>
                            <Button variant="outlined" className="w-full text-center mx-1">Click me</Button>
                            <Button className="w-full text-center mr-1">Click me</Button>
                        </Flex>
                        <Box className="p-4">
                            <Box className="bg-primary w-full rounded-xl overflow-hidden">
                                <CodeDiv code={code} />
                            </Box>
                        </Box>
                    </Box>
                </Flex>
            </Flex>
        </Flex>
    </Container>
}