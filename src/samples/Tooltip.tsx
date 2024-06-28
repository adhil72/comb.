import Button from "@/Library/Button";
import Tooltip from "@/Library/Tooltip";

export default function TooltipSample() {
    return (
        <div>
            <Tooltip title="i am tooltip">
                <Button className="bg-slate-800" variant="text">Hover me</Button>
            </Tooltip>
        </div>
    );
}