import React from 'react';
import './Card.css';

const Card = ({ title, children, footer, className = '', ...props }) => {
    return (
        <div className={`card ${className}`} {...props}>
            <div className="card-body">
                {title && <h3 className="card-title">{title}</h3>}
                <div className="card-content">{children}</div>
            </div>
            {footer && <div className="card-footer">{footer}</div>}
        </div>
    );
};

export default Card;
