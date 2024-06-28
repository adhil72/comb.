import Input from "@/Library/Input";

export default function InputsSample() {
    return <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 w-full justify-center gap-5">
        <Input variant="outlined" label="Email" type="email" />
        <Input variant="outlined" defaultValue="Find me" label="Password" type="password" />
        <Input variant="outlined" label="Date" type="date" />
        <Input variant="outlined" label="Time" type="time" />
        <Input variant="outlined" label="Number" type="number" defaultValue={"234"} />
        <Input variant="outlined" label="Tel" type="tel" />

        <Input variant="solid" label="Email" type="email" />
        <Input variant="solid" defaultValue="Find me" label="Password" type="password" />
        <Input variant="solid" label="Date" type="date" />
        <Input variant="solid" label="Time" type="time" />
        <Input variant="solid" label="Number" type="number" defaultValue={"234"} />
        <Input variant="solid" label="Tel" type="tel" />
    </div>
}