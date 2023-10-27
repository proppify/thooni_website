import React from 'react';
import '../Styles/Card.css';

const Card = ({ image, subtext, maintext }) => {
    return (
        <div className="owncard">
            <div className="image-container">
                <img src={image} alt="card" className="image" />
                {/* <div className="category-text">
                    <span className='category-subtext'>
                        {subtext}
                    </span>
                    <span className='category-maintext'>
                        {maintext}
                    </span>
                </div> */}
            </div>
        </div>
    );
};

export default Card;
