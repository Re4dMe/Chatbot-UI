import React, { useEffect, useRef, useState } from 'react'
import { TextBubble } from './TextBubble'
import { PaperPlaneIcon } from '@radix-ui/react-icons';


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