import Box from "@/Componenets/Common/Box";
import Flex from "@/Componenets/Common/Flex";
import Logo from "@/Componenets/Feature/Logo/Logo";
import Button from "./Button";

interface Props {
    logo?: React.ReactNode;
    links?: { path: string, title: string }[];
    button?: string;
}

export default function AppBar({ logo, links, button }: Props) {
    return <Box className={"bg-secondary w-full backdrop-blur-[10px] bg-opacity-65"}>
        <Box className="py-5 flex justify-center md:justify-evenly items-center">
            <Flex>
                {logo}
            </Flex>
            <Flex className={"w-[80%] md:w-[30%] justify-evenly hidden md:flex"}>
                {
                    links?.map((link, index) => <a key={index} href={link.path} className={"text-primary text-lg"}>{link.title}</a>)
                }
            </Flex>
            <Flex>
                <Button className={"!py-2 !px-5 hidden md:block"} variant="outlined">{button}</Button>
            </Flex>
        </Box>
    </Box>
}