import React, { useEffect, useState } from 'react';

interface Props extends React.HTMLProps<HTMLDivElement> {
    title: string;
}

const Tooltip: React.FC<Props> = ({ title, children, ...rest }) => {
    const [showTooltip, setShowTooltip] = useState(false);
    const tooltipRef = React.useRef<HTMLDivElement>(null);
    const contentRef = React.useRef<HTMLDivElement>(null);

    const handleMouseEnter = () => {
        setShowTooltip(true);
    };

    const handleMouseLeave = () => {
        setShowTooltip(false);
    };

    useEffect(() => {
        if (!tooltipRef.current || !contentRef.current) return;
        const tooltip = tooltipRef.current;
        const content = contentRef.current;
        let my = content.offsetHeight
        tooltip.style.marginTop = `-${my + 10}px`
    })

    return (
        <div onMouseEnter={handleMouseEnter} onMouseLeave={handleMouseLeave} className='flex items-center justify-center'>
            <div ref={tooltipRef} className={`fixed opacit text-xs trans bg-slate-800 p-1 rounded-lg ${showTooltip ? "opacity-100" : "opacity-0"}`}>
                {title}
            </div>
            <div ref={contentRef}>
                {children}
            </div>
        </div>
    );
};

export default Tooltip;