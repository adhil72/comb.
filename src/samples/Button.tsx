import Button from "@/Library/Button";

export default function ButtonSample() {
    return <div className="w-full grid grid-cols-1 md:grid-cols-3 lg:grid-cols-4 xl:grid-cols-6 gap-4 justify-center">
        <Button variant="text" className="w-full text-center">Click me</Button>
        <Button variant="outlined" className="w-full text-center">Click me</Button>
        <Button className="w-full text-center">Click me</Button>
    </div>
}