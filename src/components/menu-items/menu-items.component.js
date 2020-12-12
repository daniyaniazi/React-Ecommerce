import React from "react";
import './menu-items.styles.scss'

const MenuItem = ({ title, imageUrl, size }) => (
    <div className={`${size} menu-item`}>
        <div
            className=' backgroundImage ' style={{
                backgroundImage: `url(${imageUrl})`,
            }} />
        <div className="content">
            <h1 className="title">{title.toUpperCase()}</h1>
            <span className='subtitle'>Shop now</span>
        </div>
    </div>

)
export default MenuItem;