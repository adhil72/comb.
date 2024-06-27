import React from "react";

export default function Logo(props: React.HTMLAttributes<HTMLSpanElement>) {
    return <span {...props} className={`font-extrabold ${props.className} bg-gradient-to-r from-30% to-80% from-tint-alt to to-tint`}>Comp.</span>
}