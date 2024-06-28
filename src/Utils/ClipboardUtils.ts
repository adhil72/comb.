export const copyToClipboard = async (text: string) => {
    try {
        await navigator.clipboard.writeText(text);
        console.log('Text copied to clipboard');
    } catch (error) {
        console.error('Failed to copy text to clipboard:', error);
    }
}