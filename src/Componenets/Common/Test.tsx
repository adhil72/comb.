import Input from "@/Library/Input";

export default function Test() {
    return <div className="flex w-full justify-center">
        <Input className="mr-2" variant="outlined" label="Email" type="email" />
        <Input className="ml-2" variant="solid" label="Email" type="email" />
    </div>
}