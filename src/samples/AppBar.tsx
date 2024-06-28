import Logo from "@/Componenets/Feature/Logo/Logo";
import AppBar from "@/Library/AppBar";

export default function AppBarSample() {
    return <div className="w-3/4">
        <AppBar button="get in touch" logo={<Logo className="text-3xl"/>} links={[
            { title: "Home", path: "/" },
            { title: "About", path: "/about" },
            { title: "Services", path: "/services" },
            { title: "Contact", path: "/contact" }
        ]} />
    </div>
}