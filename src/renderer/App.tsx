import { BrowserRouter, Router, Routes, Route, Link } from 'react-router-dom'
import { TestComponent } from './TestPage'
import { TestComponent2 } from './TestPage2'
import { FileExplorer, NavMenu, MessageBoard } from './components/UIComponents'
import './AppStyles.scss'
import './styles.css';
import React from 'react'

const Apps = () => {
    return (
        <>
            <div className='main-container'>
                <div className='block'>
                    <NavMenu />
                    <FileExplorer />
                    <MessageBoard />
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