import React from 'react'
import { Link } from 'react-router-dom';
const Header = () => {
    return (
        <div style={headerStyle}>
            <h1>React Todo List</h1>
            <Link style={linkStyle} to="/">Home</Link> | <Link style={linkStyle} to="/about">About</Link>
        </div>
    )
}

// Header Style
const headerStyle = {
    padding: '10px',
    backgroundColor: '#111',
    color: '#fff',
    textAlign: 'center'
}

const linkStyle = {
    color: '#fff',
    textDecoration: 'none'
}
export default Header
