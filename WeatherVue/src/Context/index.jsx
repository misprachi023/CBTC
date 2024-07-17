import { useContext, createContext, useState, useEffect } from "react";

const StateContext = createContext();

export const StateContextProvider = ({ children }) => {
    const [weather, setWeather] = useState({});
    const [values, setValues] = useState([]);
    const [place, setPlace] = useState('Bhopal');
    const [thisLocation, setLocation] = useState('');
    const fetchWeather = async () => {
        const apiKey = '67de62be1f3e3652e4fa37a8ad2a5fd6';
        const url = `https://api.openweathermap.org/data/2.5/weather?q=${place}&units=metric&appid=${apiKey}`;

        try {
            const response = await fetch(url);
            if (!response.ok) {
                throw new Error('Network response was not ok');
            }
            const data = await response.json();
            console.log(data);
            setLocation(data.name);
            setWeather({
                temp: data.main.temp,
                humidity: data.main.humidity,
                pressure: data.main.pressure,
                heatindex: data.main.feels_like,
                conditions: data.weather[0].description,
                windspeed: data.wind.speed,
            });
            setValues(data.weather); 
        } catch (e) {
            console.error(e);
            alert('This place does not exist');
        }
    };

    useEffect(() => {
        fetchWeather();
    }, [place]);

    useEffect(() => {
        console.log(values);
    }, [values]);

    return (
        <StateContext.Provider value={{
            weather,
            setPlace,
            values,
            thisLocation,
            place
        }}>
            {children}
        </StateContext.Provider>
    );
};

export const useStateContext = () => useContext(StateContext);
