import React from 'react';
import './menu-item.styles.scss';

const MenuItem = ({ title, imageUrl, size }) => (
    <div className={`${size} menu-item`}>
        <div 
            className="background-image" 
            style={{ backgroundImage: `url(${imageUrl})` }}
        />

        <div className="content-container">
            <div className="content">
                <h1 className="title">{title}</h1>
                <p className="subtitle">ซื้อตอนนี้</p>
            </div>
        </div>
    </div>
)

export default MenuItem;