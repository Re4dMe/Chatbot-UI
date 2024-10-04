import { Link } from 'react-router-dom'
import React from 'react'

export const TestComponent2 = () => {
    return (
        <div>
            <Link to='/' style={{ textDecoration: 'none' }}>Home2</Link>
            <Link to='/test' style={{ textDecoration: 'none' }}>Test2</Link>
        </div>
    )
}