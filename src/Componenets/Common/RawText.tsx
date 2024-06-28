"use client";

import React, { useEffect, useState } from 'react';


export default function RawText({ filePath }: { filePath: string }) {
    const [htmlContent, setHtmlContent] = useState('');

    useEffect(() => {
        fetch(filePath)
            .then(response => response.text())
            .then(data => setHtmlContent(data));
    }, [filePath]);

    return <>
        {htmlContent}
    </>

}
