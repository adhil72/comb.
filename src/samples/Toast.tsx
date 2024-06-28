import Button from "@/Library/Button";
import { createToast } from "@/Library/Toast";
import { useState } from "react";

export default function ToastSample() {

    const [openDefault, setOpenDefault] = useState(false);
    const [openSuccess, setOpenSuccess] = useState(false);
    const [openError, setOpenError] = useState(false);
    const [openWarning, setOpenWarning] = useState(false);

    return <>

        <Button onClick={() => { createToast({ title: "Profile updated", message: "Your profile has been updated successfully", type: "default" }) }} className="mr-2">Default</Button>
        <Button onClick={() => { createToast({ title: "Success", message: "Your profile has been updated successfully", type: "success" }) }} className="mr-2">Success</Button>
        <Button onClick={() => { createToast({ title: "Error", message: "Failed to update your profile", type: "error" }) }} className="mr-2">Error</Button>
        <Button onClick={() => { createToast({ title: "Warning", message: "Your profile has been updated successfully", type: "warning" }) }} className="mr-2">Warning</Button>
    </>
}