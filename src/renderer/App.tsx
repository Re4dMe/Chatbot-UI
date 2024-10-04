import { BrowserRouter, Router, Routes, Route, Link } from 'react-router-dom'
import { TestComponent } from './TestPage'
import { TestComponent2 } from './TestPage2'
import {
    FileTextIcon,
    PlusIcon,
    DotsHorizontalIcon,
    PaperPlaneIcon,
    Cross2Icon,
    DrawingPinFilledIcon,
    DragHandleHorizontalIcon,
} from '@radix-ui/react-icons';
  
import './AppStyles.scss'
import './styles.css';
import { AppNavDropdownMenu } from './components/NavBar';
import React, { useEffect, useState } from 'react'
/*
const textBubble = () => {

    let onClickEvent = () => {
        console.log('');
    }

    return (
        <div className='speechbubble'>
            <div className='header'>
                <p> 
                    So I created this thread to see if anyone wants to work on creating an N Wheeled class vehicle with me, as opposed to a bunch of people banging their heads against the wall seperately
                </p>
            </div>
            <div className='footer'>
                <div className='circular-menu'>
                    <button className='round-button'>
                        <DotsHorizontalIcon onClick={onClickEvent}/>
                        <ul>
                            <li className='menu-item'>
                                <a>A</a>
                            </li>
                            <li className='menu-item'>
                                <a>B</a>
                            </li>
                        </ul>
                    </button>
                </div>
            </div>
        </div>
    );
}
*/

interface textBubbleProps {
    text: string;
}

const TextBubble = (props: textBubbleProps) => {

    /*
    useEffect(() => {
        setTimeout(() => {
            props.setLoadStatus('');
        }, 5000)
    }, []);
    */

    let onClickEvent = () => {
        console.log('');
    }

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

const Apps = () => {
    let [loadStatus, setLoadStatus] = useState('.load-in');
    let [stateTextBubbleList, setTextBubbleList] : any = useState([])
    
    const defaultText = 'So I created this thread to see if anyone wants to work on creating an N Wheeled class vehicle with me, as opposed to a bunch of people banging their heads against the wall seperately'

    useEffect(() => {
        setTextBubbleList([<TextBubble text={defaultText}/>, <TextBubble text={defaultText}/>]);
    }, []) 

    const addTextBubble = (): void => {
        setTextBubbleList([
            <TextBubble text=''/>,
            ...stateTextBubbleList]);
    }

    return (
        <>
            <div className='main-container'>
                {
                /*
                <div className='block' 
                    style={{
                        backgroundColor: 'transparent', 
                        width: '10%', 
                        height: '5%', 
                        gap: '15px',
                    }}>
                    <AppNavDropdownMenu />
                    <button className='round-button'>
                        <FileTextIcon />
                    </button>
                </div>
                */
                }
                <div className='block'>
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
                                    <li><a><FileTextIcon /></a></li>
                                    <li><a><FileTextIcon /></a></li>
                                    <li><a><FileTextIcon /></a></li>
                                </ul>
                            </nav>
                        </label>
                    </div>
                    <div className='input-group1'>
                        <div className='button-group'>
                            <button><FileTextIcon /></button>
                            <button><PlusIcon /></button>
                        </div>
                        <label htmlFor="inp" className="inp">
                            <input type='text' id="inp" placeholder="&nbsp;" />
                            <span className="label">Label</span>
                            <span className="focus-bg"></span>
                        </label>
                    </div>
                    <div className='wrapper'>
                        <div className='chat-window'>
                        {
                            stateTextBubbleList.map((name, i) => {
                                return name;
                            })
                        }
                        </div>
                        <label htmlFor="user-text-input-id" className="label-user-input">
                            <div className='user-input-box'>
                            <textarea id='user-text-input-id' className='user-text-input' style={{ resize: 'none' }} placeholder="Type something..." />
                            <button className='round-button'>
                                    <PaperPlaneIcon onClick={addTextBubble}/>
                            </button>
                            </div>
                        </label>
                    </div>
                </div>
                {
                    /*
                    <Link to='/' style={{ textDecoration: 'none' }}>Home</Link>
                    <Link to='/test' style={{ textDecoration: 'none' }}>Test</Link>
                    <Link to='/test2' style={{ textDecoration: 'none' }}>Test</Link>
                    */
                }
            </div>
        </>

    )
}

export const App = () => {
    return (<Apps />)
}

export const RouterComponent = () => {
    return (
        <>
            <BrowserRouter>
                <Routes>
                    <Route path="/" Component={App} />
                    <Route path="test" Component={TestComponent} />
                    <Route path="test2" Component={TestComponent2} />
                </Routes>
            </BrowserRouter>
        </>
    )
}