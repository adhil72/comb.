import Button from "@/Library/Button";
import Input from "@/Library/Input";
import Modal from "@/Library/Modal";
import { createToast } from "@/Library/Toast";
import { useState } from "react";

export default function ModalSample() {

    const [open, setOpen] = useState(false);

    return <div>
        <Button onClick={() => { setOpen(true) }} className="btn">Open Modal</Button>
        <Modal close={() => { setOpen(false) }} open={open} >
            <div className="flex flex-col w-96">
                <span className="text-2xl font-bold text-primary">Add task</span>
                <Input variant="solid" label="Task name" className="mt-2" />
                <Input variant="solid" multiline label="Description" className="mt-2" />
                <div className="flex justify-end mt-2">
                    <Button onClick={() => { setOpen(false); createToast({ message: "Task added successfully", title: "Task added", type: "success" }) }} variant="text" className="btn text-green-600">Add</Button>
                    <Button variant="text" onClick={() => { setOpen(false) }} className="btn ml-2 text-red-700">Cancel</Button>
                </div>

            </div>
        </Modal>
    </div>
}