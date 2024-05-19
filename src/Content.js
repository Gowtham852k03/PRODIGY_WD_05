import React from 'react';
import humidity_icon from './images/humidity.png';
import wind_icon from './images/wind.png';
const Content = ({ humidity, windSpeed, weathericon, error }) => {
    const defaultCity = 'Chennai';
    const cityName = error ? error : defaultCity;

    return (
        <main >
            <div className='bcolor'>
                <div className='weather '>
                    <img src={weathericon} alt="weather-icon" className='weather-icon' />
                    <h1 className='temp display-9'>22°C</h1>
                    <h2 className='city display-9 text-center'>{cityName}</h2>
                </div>
                <div className='bottom mb-5 '>
                    <div className='left'>
                        <img src={humidity_icon} alt="humidity" className='himages' />
                        <div>
                            <p className='Humidity-percent'>{humidity ? humidity + '%' : '50%'}</p>
                            <p className='Hp '>Humidity  </p>
                        </div></div>
                    <div className='right'>
                        <img src={wind_icon} alt="wind" className='wimages' />
                        <div className='right'>
                            <p className='windspeed '>{windSpeed ? windSpeed + ' Km/h' : '15 Km/h'}</p>
                            <p className='wp '>windspeed  </p>
                        </div>
                    </div>
                </div>
            </div>
        </main >
    );
}

export default Content;