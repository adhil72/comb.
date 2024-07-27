import Box from "@/Componenets/Common/Box";
import Container from "@/Componenets/Common/Container";
import Flex from "@/Componenets/Common/Flex";
import { AiFillGithub, AiFillInstagram, AiFillLinkedin, AiOutlineMail } from "react-icons/ai";
import { TbBrandTelegram } from "react-icons/tb";
import Logo from "../Logo/Logo";

export default function Footer() {
    return (
        <Box className="w-full relative flex items-center justify-center overflow-hidden">
            <Box className={"bg-secondary z-10 backdrop-blur-[100px] bg-opacity-75"}>
                <Container className={"py-10"}>
                    <span id={"contact"} className={"text-3xl font-bold text-primary"}>
                        <Logo />
                    </span>
                    <p className="py-5 text-secondary text-lg">
                        combdot is a react based component library that is designed using tailwindcss. It is a collection of components that are designed to be used in any react project. The components are designed to be simple and easy to use. The components are designed to be simple and easy to use. The components are designed to be simple and easy to use.
                    </p>
                    <span id={"contact"} className={"text-xl font-bold text-primary"}>Contact developer</span>
                    <Flex className="text-lg text-primary items-center">
                        <AiOutlineMail /> <span className={""}>adhil.mhdk28@gmail.com</span>
                    </Flex>
                    <Flex className={"text-primary text-3xl mt-2"}>
                        <AiFillInstagram onClick={() => window.open("https://www.instagram.com/adhilmhd28")} className={"hover:text-tint cursor-pointer"} />
                        <AiFillLinkedin onClick={() => window.open("https://www.linkedin.com/in/adhil-muhammed-k-200b13292")} className={"ml-5 hover:text-tint cursor-pointer"} />
                        <AiFillGithub onClick={() => window.open("https://github.com/adhil72")} className={"ml-5 hover:text-tint cursor-pointer"} />
                        <TbBrandTelegram onClick={() => window.open("https://t.me/adhil28")} className={"ml-5 hover:text-tint cursor-pointer"} />
                    </Flex>
                </Container>
            </Box>
            <Box className="z-0 bg-tint w-[80%] h-40 absolute"></Box>
        </Box>
    );
}
