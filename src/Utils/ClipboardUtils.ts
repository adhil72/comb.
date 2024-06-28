import { createToast } from "@/Library/Toast";

export const copyToClipboard = async (text: string) => {
    try {
        await navigator.clipboard.writeText(text);
        createToast({ title: 'Copied to clipboard', type: 'success', message: "Data copied to clipboard" })
    } catch (error) {
        console.error('Failed to copy text to clipboard:', error);
        createToast({ title: 'Failed to copy to clipboard', type: 'error', message: "Failed to copy data to clipboard" })
    }
}