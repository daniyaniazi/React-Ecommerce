import React from "react";
import './menu-items.styles.scss'
import { withRouter } from "react-router-dom"; //HOC

const MenuItem = ({ title, imageUrl, size, history, linkUrl, match }) => (
    <div className={`${size} menu-item`} onClick={() =>
        history.push(`${match.url}${linkUrl}`)}>
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
export default withRouter(MenuItem);