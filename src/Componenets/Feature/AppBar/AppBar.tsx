import Box from "@/Componenets/Common/Box";
import Flex from "@/Componenets/Common/Flex";
import Logo from "../Logo/Logo";
import Button from "@/Componenets/Common/Button";

export default function AppBar() {
    return <Box className={"bg-secondary w-full backdrop-blur-[10px] bg-opacity-65 fixed"}>
        <Box className="py-5 flex justify-center md:justify-evenly items-center">
            <Flex>
                <Logo className="text-3xl" />
            </Flex>
            <Flex className={"w-[80%] md:w-[30%] justify-evenly hidden md:flex"}>
                <a href={"/"} className={"text-primary text-lg"}>Home</a>
                <a href={"/about"} className={"text-primary text-lg"}>About</a>
                <a href={"/projects"} className={"text-primary text-lg"}>Projects</a>
                <a href={"/contact"} className={"text-primary text-lg"}>Contact</a>
            </Flex>
            <Flex>
                <Button className={"!py-2 !px-5 hidden md:block"} variant="outlined">Contribute</Button>
            </Flex>
        </Box>
    </Box>
}