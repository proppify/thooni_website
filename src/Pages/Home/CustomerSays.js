import React, { useState } from 'react';
import CustSays from '../../Assets/CustomerSays.svg';
import Arrow1 from '../../Assets/li.png';
import Arrow2 from '../../Assets/li (1).png';

const CustomerSays = () => {
    const [position, setPosition] = useState(0);
    const scrolldata = [
        {   "name": 'Anjali Sharma',
            "image": CustSays,
            "details": "I'm thrilled with the Thooni app's personalized clothing options. The app is easy to navigate, the materials are high-quality, and the end results are always stylish and unique."
        },
        {
            "name": 'Devika Iyer',
            "image": CustSays,
            "details": "Thooni app has revolutionized my wardrobe. The app's seamless design process, excellent customer service, and top-notch garments make it my top choice for custom clothing. Highly recommended!"
        },
        {
            "name": 'Ananya Rao',
            "image": CustSays,
            "details": "I can't praise the Thooni app enough! It combines creativity, convenience, and quality seamlessly. With every order, I get custom-made clothing that fits perfectly and reflects my personal style."
        }
    ]
    const handlePrevClick = () => {
        setPosition(Math.max(position - 1, 0)); // Ensure position doesn't go below 0
    };

    const handleNextClick = () => {
        setPosition(Math.min(position + 1, scrolldata?.length - 1)); // Adjust based on data length
    };
    const [rating, setRating] = useState(5);

    const handleStarClick = (value) => {
        setRating(value);
    };
    const renderStars = () => {
        const stars = [];
        for (let i = 1; i <= 5; i++) {
            stars.push(
                <span
                    key={i}
                    onClick={() => handleStarClick(i)}
                    style={{ color: i <= rating ? '#23A6F0' : 'gray', cursor: 'pointer', fontSize: '20px' }}
                >
                    &#9733;
                </span>
            );
        }
        return stars;
    };

    return (
        <div>
            <div style={{ width: '100%', padding: '20px' }}>
                <h3 className='Heartxt1'>HEAR WHAT OUR CUSTOMERS SAY</h3>
                <span className='Heartxt2'>Discover What Our Happy Customers Have to Say About Us!</span>
                {/* {scrolldata.map((x,i)=>  */}
                <div style={{ width: '100%', padding: '60px 0px 0px 80px', background: '#EDF8FF', height: '350px',marginTop:'25px' }}>
                    <div className="Custbanner">
                        <img src={scrolldata[position]?.image} alt="Custbanner" className="Custbanner-image" />
                        <div className="Custtext-container">
                            <div style={{width: '375px',textAlign:'left',display:'flex',flexDirection:'column',gap:'16px' }}>
                                <span className="Custparagraph">{scrolldata[position]?.details}</span>
                                <span className='Heartxt3'>{scrolldata[position]?.name}</span>
                                {/* <div className='CustRating'>{renderStars()}</div> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* )} */}
                <div style={{ marginTop: '10px',float:'right' }}>
                    {/* <button onClick={handlePrevClick} disabled={position === 0}>
                        Previous
                    </button> */}
                    {/* <button onClick={handleNextClick} disabled={position === scrolldata[0]?.length - 1}>
                        Next
                    </button> */}
                    <img src={Arrow2} alt='Arrow2' style={{ cursor:'pointer' }} onClick={handlePrevClick}/>
                    <img src={Arrow1} alt='Arrow1' style={{ cursor:'pointer' }}  onClick={handleNextClick}/>
                </div>
            </div>
        </div>
    )
}

export default CustomerSays;