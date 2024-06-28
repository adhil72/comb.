import React, { useEffect, useRef } from 'react';

interface Props {
    varient?: "infinite" | "progress";
    progress?: number;
    size?: number;
    label?: boolean;
    labelProps?: React.HTMLProps<HTMLSpanElement>;
    thickness?: number;
}

export default function CircularProgress({ labelProps, progress = 80, size = 60, varient = 'progress', label = true, thickness = 10 }: Props) {

    if (varient === "progress") {
        return (
            <div style={{ width: size + 'px', height: size + 'px' }} className={`relative`}>
                <svg className="w-full h-full" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="45" fill="none" className='stroke-tint-dark' strokeWidth={thickness} />
                    <circle cx="50" cy="50" r="45" fill="none" strokeWidth={thickness} className='stroke-tint trans' strokeDasharray="283" strokeDashoffset={(283 - (283 * progress) / 100)} transform="rotate(-90 50 50)" />
                </svg>
                {label && <span {...labelProps} className={`absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 font-semibold${labelProps}`}>{progress}%</span>}
            </div>
        );
    } else {
        return (
            <div style={{ width: size + 'px', height: size + 'px' }} className={`relative flex items-center justify-center`}>
                <svg className="w-full h-full absolute" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="45" fill="none" strokeWidth={thickness-5} className='stroke-tint-dark' strokeDasharray="283" strokeDashoffset={0} />
                </svg>
                <svg className="w-full h-full animate-spin duration-500" viewBox="0 0 100 100" xmlns="http://www.w3.org/2000/svg">
                    <circle cx="50" cy="50" r="45" fill="none" className='stroke-tint' strokeWidth={thickness} strokeDasharray="200" strokeDashoffset={200} />
                </svg>
            </div>
        );
    }
}