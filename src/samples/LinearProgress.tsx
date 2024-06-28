import LinearProgress from "@/Library/LinearProgress";

export default function LinearProgressSample() {
    return <div className="w-3/4">
        <LinearProgress />
        <LinearProgress varient="progress" progress={50} className="mt-5"/>
    </div>
}