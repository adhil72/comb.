export default function IconBox(props: React.HTMLAttributes<HTMLDivElement>) {
    return <div {...props} className={`flex items-center justify-center ${props.className} border border-1 border-tint p-3`} />
}