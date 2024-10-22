import { Link } from 'react-router-dom'
import { Button } from '@headlessui/react'
import React from 'react'

export const TestComponent = () => {
    return (
        <div>
            <Link to='/' style={{ textDecoration: 'none' }}>Home2</Link>
            <Link to='/test2' style={{ textDecoration: 'none' }}>Test2</Link>
        </div>
    )
}