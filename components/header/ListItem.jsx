import React from 'react'

const ListItem = ({text, icon, isActive}) => {

    return (
        <div className={`listItem ${isActive ? 'active' : ''}`}>
            {icon} <span className='text'>{text}</span>
        </div>
    )
}

export default ListItem