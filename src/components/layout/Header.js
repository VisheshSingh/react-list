import React from 'react'

const Header = () => {
    return (
        <div style={headerStyle}>
            <h1>React Todo List</h1>
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
export default Header
