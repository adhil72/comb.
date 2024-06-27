export default function CodeDiv({ code, ...props }: React.HTMLProps<HTMLDivElement> & { code: string }) {
    return <div {...props} className="bg-primary">
        <pre className="!bg-primary"><code className="language-jsx !bg-primary">
            {code}
        </code></pre>

    </div>
}