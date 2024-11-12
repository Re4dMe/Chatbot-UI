import React from 'react'
import {
    DotsHorizontalIcon,
    Cross2Icon,
    DrawingPinFilledIcon,
} from '@radix-ui/react-icons';
import '../styles/circular-menu.scss'


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