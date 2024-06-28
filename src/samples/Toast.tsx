import Button from "@/Library/Button";
import Toast from "@/Library/Toast";
import { useState } from "react";

export default function ToastSample() {
    const [open, setOpen] = useState(true);

    return <>
        <Button onClick={() => setOpen(true)}>Show Toast</Button>
        <Toast title="Just updated" message="Your profile has been updated successfully" open={open} close={() => setOpen(false)} />
    </>
}