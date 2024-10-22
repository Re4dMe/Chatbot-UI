import React, { useEffect, useRef, useState } from 'react'
import {
    FileTextIcon,
    PlusIcon,
    DotsHorizontalIcon,
    Cross2Icon,
    DrawingPinFilledIcon,
    ColorWheelIcon,
    AvatarIcon,
    DashboardIcon,
    PaperPlaneIcon
} from '@radix-ui/react-icons';


export interface textBubbleProps {
    text: string;
}

export const TextBubble = (props: textBubbleProps) => {

    return (
        <div className={`speechbubble`}>
            <div className='header'>
                <p> 
                    { props.text }
                </p>
            </div>
            <div className='footer'>
                <div className='circular-menu'>
                    <div className='icon'>
                        <DotsHorizontalIcon />
                    </div>
                    <input type='checkbox' className='menu-toggler' />
                    <ul>
                        <li className='menu-item'>
                            <div className='menu-item-background'></div>
                            <a><DrawingPinFilledIcon /></a>
                        </li>
                        <li className='menu-item'>
                            <div className='menu-item-background'></div>
                            <a><DotsHorizontalIcon /></a>
                        </li>
                        <li className='menu-item'>
                            <div className='menu-item-background'></div>
                            <a><Cross2Icon /></a>
                        </li>
                    </ul>
                </div>
            </div>
        </div>
    );
}

export const NavMenu = () => {
    return (
        <div className='nav-menu'>
            <input type='checkbox' id='menu-toggle' />
            <label className='button' htmlFor='menu-toggle'>
                <div className='menu-icon'>
                    <span></span>
                    <span></span>
                    <span></span>
                    <span></span>
                </div>
                <nav className='nav'>
                    <ul>
                        <li><a><ColorWheelIcon /></a></li>
                        <li><a><AvatarIcon /></a></li>
                        <li><a><DashboardIcon /></a></li>
                    </ul>
                </nav>
            </label>
        </div>
    );
}

export const FileExplorer = () => {
    return (
        <div className='input-group1'>
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

export const MessageBoard = () => {
    let messagesEnd: any = useRef()
    let [stateTextBubbleList, setTextBubbleList] : any = useState([])
    let [stateInputText, setInputText]: any = useState('')

    const defaultText = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.'

    useEffect(() => {
        setTextBubbleList([<TextBubble text={defaultText}/>, <TextBubble text={defaultText}/>]);
    }, []); 

    const addTextBubble = (): void => {
        setTextBubbleList([
            ...stateTextBubbleList,
            <TextBubble text={stateInputText}/>
        ]);
        scrollToBottom();
    }

    const scrollToBottom = () => {
        messagesEnd.scrollIntoView({ behavior: "smooth" });
    }

    return (
        <div className='wrapper'>
            <div className='chat-window'>
                {
                    stateTextBubbleList.map((name, i) => {
                        return name;
                    })
                }
                { /* Create dummy message to auto scroll to bottom */ }
                <div 
                    style={{ float: "left", clear: "both", marginBottom: "150px"}}
                    ref={(el) => { messagesEnd = el; }}
                >
                </div>
            </div>
            <label htmlFor="user-text-input-id" className="label-user-input">
                <div className='user-input-box'>
                <textarea 
                    id='user-text-input-id' 
                    className='user-text-input'
                    onChange={(event) => setInputText(event.target.value)}
                    style={{ resize: 'none' }} 
                    placeholder="Type something..." />
                <button className='round-button'>
                    <PaperPlaneIcon onClick={addTextBubble}/>
                </button>
                </div>
            </label>
        </div>
    )
}