import Button from "./Button";

export default function Test() {
    return <div>
        <Button variant="text" className="w-full text-center ml-1">Click me</Button>
        <Button variant="outlined" className="w-full text-center mx-1">Click me</Button>
        <Button className="w-full text-center mr-1">Click me</Button>
    </div>
}