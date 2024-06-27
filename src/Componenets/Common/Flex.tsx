import React from "react";

export default function Flex({className, ...rest}: React.HTMLProps<HTMLDivElement>) {
    return <div {...rest} className={`flex ${className}`}></div>
}