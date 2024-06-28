import React, { useEffect, useState } from 'react';
import Prism from 'prismjs';
import 'prismjs/themes/prism-tomorrow.css';
import RawText from './RawText';
import { BiCopy } from 'react-icons/bi';
import { copyToClipboard } from '@/Utils/ClipboardUtils';

require('prismjs/components/prism-javascript')
require('prismjs/components/prism-css')
require('prismjs/components/prism-jsx')

export default function CodeDiv({ url, ...props }: React.HTMLProps<HTMLDivElement> & { url: string }) {

    const codeRef = React.useRef<any>(null);
    const [code, setCode] = useState('');


    useEffect(() => {
        Prism.highlightAll();
    }, [code]);

    useEffect(() => {
        fetch(url)
            .then(response => response.text())
            .then(data => setCode(data));
    }, [url]);

    return (
        <div {...props} className="bg-inherit w-full">
            <div className='w-full flex justify-end text-end text-lg'>
                <BiCopy onClick={() => copyToClipboard(code)} className='text-white cursor-pointer hover:text-tint' />
            </div>
            <pre className="!bg-inherit overflow-auto max-h-[30vh]" >
                <code ref={codeRef} className="language-jsx !bg-inherit">
                    {code}
                </code>
            </pre>
        </div>
    );
}
