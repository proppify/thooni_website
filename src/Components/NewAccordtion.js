import React, { useState } from 'react';
import Plus from '../Assets/Vector.png';
import '../Styles/NewAccord.css'

const NewAccordion = ({ title, content }) => {
    const [isExpanded, setIsExpanded] = useState(false);

    const toggleAccordion = () => {
        setIsExpanded(!isExpanded);
    };
    

    return (
        <div style={{ border: 'none', borderBottom: '1px solid #C4C4C4', margin: '10px' }}>
            <div
                style={{
                    backgroundColor: 'transparent',
                    padding: '10px',
                    cursor: 'pointer',
                    display: 'flex',
                    justifyContent: 'space-between',
                    borderBottom: '1px solid #C4C4C4',
                }}
                onClick={toggleAccordion}
            >
                <div className='accordTitle'>{title}</div>
                <div>{isExpanded ? '-' : <img alt='' src={Plus} />}</div>
            </div>
            {isExpanded && (
                <div style={{ padding: '10px' }}>
                    <p className='accordContent'>{content}</p>
                </div>
            )}
        </div>
    );
};

export default NewAccordion;
