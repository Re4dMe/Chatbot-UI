import { BrowserRouter, Router, Routes, Route, Link } from 'react-router-dom'
import { TestComponent } from './TestPage'
import { TestComponent2 } from './TestPage2'
import { FileExplorer } from './components/FileExplorer'
import { NavMenu } from './components/NavMenu'
import { MessageBoard } from './components/MessageBoard'
import './styles/app-style.scss'
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