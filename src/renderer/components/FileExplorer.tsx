import React from 'react'
import {
    FileTextIcon,
    PlusIcon,
} from '@radix-ui/react-icons';
import '../styles/file-explorer.scss'

export const FileExplorer = () => {
    return (
        <div className='file-explorer'>
            <div className='button-group'>
                <button><FileTextIcon /></button>
                <button><PlusIcon /></button>
            </div>
            <label htmlFor="inp" className="inp">
                <input type='text' id="inp" placeholder="&nbsp;" />
                <span className="label">Document</span>
                <span className="focus-bg"></span>
            </label>
        </div>
    );
}

