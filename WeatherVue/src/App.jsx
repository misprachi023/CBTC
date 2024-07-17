import { useState } from 'react';
import search from './assets/icons/search.svg';
import { useStateContext } from './Context';
import BackgroundLayout from './Components/BackgroundLayout';
import WeatherCard from './Components/WeatherCard';
import MiniCard from './Components/MiniCard';

function App() {
  const [input, setInput] = useState('');
  const { weather, thisLocation, values, setPlace } = useStateContext();

  const submitCity = () => {
    setPlace(input);
    setInput('');
  };

  return (
    <div className='w-full min-h-screen text-white px-8'>
      <nav className='w-full p-3 flex justify-between items-center flex-col md:flex-row'>
        <h1 className='font-bold tracking-wide text-3xl md:text-4xl lg:text-5xl xl:text5xl mb-4 md:mb-0'>
          Weather App
        </h1>
        <div className='bg-white w-full md:w-[15rem] overflow-hidden shadow-2xl rounded flex items-center p-2 gap-2'>
          <img src={search} alt="search" className='w-[1.5rem] h-[1.5rem]' />
          <input
            onKeyUp={(e) => {
              if (e.key === 'Enter') {
                submitCity();
              }
            }}
            type="text"
            placeholder='Search city'
            className='focus:outline-none w-full text-[#212121] text-lg'
            value={input}
            onChange={e => setInput(e.target.value)}
          />
        </div>
      </nav>
      <BackgroundLayout />
      <main className='w-full flex flex-wrap gap-8 py-4 px-[5%] md:px-[10%] items-center justify-center'>
        {weather && values.length > 0 && (
          <WeatherCard
            place={thisLocation}
            windspeed={weather?.windspeed}
            humidity={weather.humidity}
            pressure={weather.pressure}
            temperature={weather.temp}
            heatIndex={weather.heatindex}
            iconString={values[0]?.main}
            conditions={values[0]?.description}
          />
        )}

        <div className='flex justify-center gap-8 flex-wrap w-full md:w-[60%]'>
          {values.slice(1, 7).map((curr, index) => (
            <MiniCard
              key={index}
              time={new Date().toISOString()}
              temp={weather.temp}
              iconString={curr.main}
            />
          ))}
        </div>
      </main>
      <p className='text-blue-800'>Developed By Prachi ❤️</p>
    </div>
  );
}

export default App;
