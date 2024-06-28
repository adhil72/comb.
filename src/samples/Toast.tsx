import Button from "@/Library/Button";
import Grid from "@/Library/Grid";
import { createToast } from "@/Library/Toast";

export default function ToastSample() {
    return <Grid autoArrangement arrangementFormula="2-4-6-8" className="gap-10 w-full">
        <Button className="bg-green-700" onClick={() => createToast({ title: "Success", message: "This is a success message", type: "success" })}>Success</Button>
        <Button className="bg-red-700" onClick={() => createToast({ title: "Error", message: "This is an error message", type: "error" })}>Error</Button>
        <Button className="bg-yellow-600" onClick={() => createToast({ title: "Warning", message: "This is a warning message", type: "warning" })}>Warning</Button>
        <Button onClick={() => createToast({ title: "Default", message: "This is a default message" })}>Default</Button>
    </Grid>
}