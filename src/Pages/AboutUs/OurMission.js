import React from 'react'
import '../../Styles/AboutUs.css';
import Missiongirl from '../../Assets/MissionGirl1.svg'

const OurMission = () => {
    return (
        <div className='missionContainer'>
            <div className='ourmission1'>
                <div className='ourmissionmenus'>
                    <span className='missionblue'>Our Mission</span>
                    <span className='missionsmall'>Curated Selection</span>
                    <span className='missionsmall'>Customer Satisfaction</span>
                    <span className='missionsmall'>Community and Inspiration</span>
                    <span className='missionsmall'>Connect with Us</span>

                </div>
            </div>
            <div className='vertiline' />
            <div className='ourmission3'>
                <div className='missionrightContainer'>
                    <span className='ourmissionright'>At Thooni, our mission is to provide you with a seamless online shopping
                        experience that combines convenience, affordability, and style. We believe that
                        fashion and lifestyle choices should be accessible to everyone, regardless of
                        their location or budget. That's why we strive to offer a wide range of
                        products that cater to diverse tastes, ensuring there's something for everyone.
                    </span>
                </div>
                <div className='imageposi'>
                    <img alt='' src={Missiongirl} className='imagegirl' />
                </div>
                <div className='imageposi2'>
                    <img alt='' src={Missiongirl} className='imagegirl2' />
                </div>
            </div>

        </div>
    )
}

export default OurMission;