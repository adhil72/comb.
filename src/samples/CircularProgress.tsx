import CircularProgress from "@/Library/CircularProgress";

export default function CircularProgressSample() {
    return <div className="flex">
        <CircularProgress className="mr-3"/>
        <CircularProgress varient="infinite" />
    </div>
}