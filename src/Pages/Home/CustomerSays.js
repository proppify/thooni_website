import React, { useState } from 'react';
import CustSays from '../../Assets/testimonial-img.jpg';
import Arrow1 from '../../Assets/next_arrow.png';
import Arrow2 from '../../Assets/next_last.png';
import Arrow3 from '../../Assets/prev_arrow.png';
import Arrow4 from '../../Assets/prev_last.png';

const CustomerSays = () => {
    const [position, setPosition] = useState(0);
    const scrolldata = [
        {
            "name": 'Kavya Reddy',
            "image": CustSays,
            "details": " The Thooni app is a game-changer for custom clothing! It offers a seamless experience, exceptional quality, and the ability to create unique, personalized garments. Highly recommended!"
        },
        {
            "name": 'Nithya Nair',
            "image": CustSays,
            "details": "Thooni app has revolutionized my wardrobe. The app's seamless design process, excellent customer service, and top-notch garments make it my top choice for custom clothing. Highly recommended! "
        },
        {
            "name": 'Meera Menon',
            "image": CustSays,
            "details": "The Thooni app is a hidden gem in the world of fashion. Its wide selection of customizable clothing, attention to detail, and prompt delivery have made it my favorite go-to app."
        },
       
        {
            "name": 'Shalini Rajan',
            "image": CustSays,
            "details": "I can't praise the Thooni app enough! It combines creativity, convenience, and quality seamlessly. With every order, I get custom-made clothing that fits perfectly and reflects my personal style."
        },
       
       
      
       
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
            <h3 className='Heartxt1'>HEAR WHAT OUR CUSTOMERS SAY</h3>
            <span className='Heartxt2'>Discover What Our Happy Customers Have to Say About Us!</span>
            <div className='tesimonial-main'>

                {/* {scrolldata.map((x,i)=>  */}
                <div className='testimonial-section'>
                    <div className="Custbanner">
                        <div className='customer-img'><img src={scrolldata[position]?.image} alt="Custbanner" className="Custbanner-image" /></div>
                        <div className="Custtext-container">
                            <div style={{ width: '475px', textAlign: 'left', display: 'flex', flexDirection: 'column', gap: '16px' }}>
                                <span className="Custparagraph">{scrolldata[position]?.details}</span>
                                <span className='Heartxt3'>{scrolldata[position]?.name}</span>
                                {/* <div className='CustRating'>{renderStars()}</div> */}
                            </div>
                        </div>
                    </div>
                </div>
                {/* )} */}
                <div className='testimonal-btn'>
                    {/* <button onClick={handlePrevClick} disabled={position === 0}>
                        Previous
                    </button> */}
                    {/* <button onClick={handleNextClick} disabled={position === scrolldata[0]?.length - 1}>
                        Next
                    </button> */}
                    {/* <img src={Arrow2} alt='Arrow2' style={{ cursor: 'pointer' }} onClick={handlePrevClick} />
                    <img src={Arrow1} alt='Arrow1' style={{ cursor: 'pointer' }} onClick={handleNextClick} /> */}


                    {position === 0 ?
                        <>
                            <img src={Arrow4} alt='Arrow2' style={{ cursor: 'no-drop' }}/>
                            <img src={Arrow1} alt='Arrow1' style={{ cursor: 'pointer' }} onClick={handleNextClick} />
                        </>
                        : position === scrolldata?.length - 1 ?
                            <>
                                <img src={Arrow3} alt='Arrow2' style={{ cursor: 'pointer' }} onClick={handlePrevClick} />
                                <img src={Arrow2} alt='Arrow1' style={{ cursor: 'no-drop' }}  />
                            </> :
                            <>
                                <img src={Arrow3} alt='Arrow2' style={{ cursor: 'pointer' }} onClick={handlePrevClick} />
                                <img src={Arrow1} alt='Arrow1' style={{ cursor: 'pointer' }} onClick={handleNextClick} />
                            </>
                    }
                </div>
            </div>
        </div>
    )
}

export default CustomerSays;