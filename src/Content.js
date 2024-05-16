import React from 'react';

const Content = ({ weathericon, error }) => {
    const defaultCity = 'New York';
    const cityName = error ? error : defaultCity;

    return (
        <main >
            <div className='bcolor'>
                <div className='weather '>
                    <img src={weathericon} alt="weather-icon" className='weather-icon' />
                    <h1 className='temp display-9'>22°C</h1>
                    <h2 className='city display-9 text-center'>{cityName}</h2>
                </div>
            </div>
        </main>
    );
}

export default Content;