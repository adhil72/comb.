import React from "react";

export default function Page({className,...props}:React.HTMLAttributes<HTMLDivElement>){
    return <div {...props} className={`w-full ${className} bg-primary text-primary`}></div>
}