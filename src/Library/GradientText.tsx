import React from "react";

interface Props extends React.HTMLAttributes<HTMLSpanElement> {
    color1?: string;
    color2?: string;
}

export default function GradientText({ color1, color2, ...props }: Props) {
    const c1 = `from-${color1 ? `${color1}` : "tint"}`
    const c2 = `to-${color2 ? `${color2}` : "tint-alt"}`

    return <span {...props} className={`bg-gradient-to-r ${c1} ${c2} bg-clip-text text-transparent ${props.className}`}></span>
}