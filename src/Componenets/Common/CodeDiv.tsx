export default function CodeDiv({ code, ...props }: React.HTMLProps<HTMLDivElement> & { code: string }) {
    return (
        <div {...props} className="bg-inherit w-full">
            <pre className="!bg-inherit" style={{ overflow: 'auto', whiteSpace: 'pre-wrap' }}>
                <code className="language-jsx !bg-inherit">
                    {code}
                </code>
            </pre>
        </div>
    );
}