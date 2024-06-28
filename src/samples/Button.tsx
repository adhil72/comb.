import Button from "@/Library/Button";

export default function ButtonSample() {
    return <div className="flex justify-center">
        <Button variant="text" className="w-60 text-center ml-5">Click me</Button>
        <Button variant="outlined" className="w-60 text-center mx-5">Click me</Button>
        <Button className="w-60 text-center mr-5">Click me</Button>
    </div>
}