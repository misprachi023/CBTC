import React, { useEffect, useState } from "react";
import { useDate } from "../Utils/useDate";
import sun from "../assets/icons/sun.png";
import cloud from "../assets/icons/cloud.png";
import fog from "../assets/icons/fog.png";
import rain from "../assets/icons/rain.png";
import snow from "../assets/icons/snow.png";
import storm from "../assets/icons/storm.png";
import winds from "../assets/icons/windy.png";
import "../index.css";

const WeatherCard = ({
  temperature,
  windspeed,
  humidity,
  pressure,
  place,
  heatIndex,
  iconString,
  conditions,
}) => {
  const [icon, setIcon] = useState(sun);
  const { time } = useDate();

  useEffect(() => {
    if (iconString) {
      const condition = iconString.toLowerCase();
      switch (true) {
        case condition.includes("cloud"):
          setIcon(cloud);
          break;
        case condition.includes("rain"):
          setIcon(rain);
          break;
        case condition.includes("clear"):
          setIcon(sun);
          break;
        case condition.includes("thunder"):
          setIcon(storm);
          break;
        case condition.includes("fog"):
          setIcon(fog);
          break;
        case condition.includes("snow"):
          setIcon(snow);
          break;
        case condition.includes("wind"):
          setIcon(winds);
          break;
        default:
          setIcon(sun);
      }
    }
  }, [iconString]);

  return (
    <div className="w-full max-w-sm md:max-w-md lg:max-w-lg xl:max-w-xl min-h-[30rem] glassCard p-4">
      <div className="flex w-full justify-center items-center gap-4 mt-12 mb-4">
        <img
          src={icon}
          alt="weather_icon"
          className="w-16 h-16 md:w-24 md:h-24"
        />
        <p className="font-bold text-3xl md:text-4xl lg:text-5xl flex justify-center items-center">
          {temperature} &deg;C
        </p>
      </div>
      <div className="font-bold text-center text-lg md:text-xl lg:text-2xl">
        {place}
      </div>
      <div className="w-full flex justify-between items-center mt-4">
        <p className="flex-1 text-center p-2">{new Date().toDateString()}</p>
        <p className="flex-1 text-center p-2">{time}</p>
      </div>
      <div className="w-full weather-details mt-4 gap-4">
        <p className="flex-1 text-center p-2 font-bold bg-blue-600 shadow rounded-lg text-sm md:text-base weather-detail">
          Wind Speed{" "}
          <span className="font-normal">
            {windspeed} <br />
            km/h
          </span>
        </p>
        <p className="flex-1 text-center p-2 font-bold rounded-lg bg-green-600 text-sm md:text-base weather-detail">
          Humidity{" "}
          <span className="font-normal">
            {humidity} <br /> gm/m&#179;
          </span>
        </p>
        <p className="flex-1 text-center p-2 font-bold bg-red-600 shadow rounded-lg text-sm md:text-base weather-detail">
          Pressure{" "}
          <span className="font-normal">
            {pressure} <br />
            hPa
          </span>
        </p>
      </div>
      <div className="w-full p-3 mt-4 flex justify-between items-center">
        <p className="font-semibold text-base md:text-lg">Heat Index</p>
        <p className="text-base md:text-lg">{heatIndex ? heatIndex : "N/A"}</p>
      </div>
      <hr className="bg-slate-600" />
      <div className="w-full p-4 flex justify-center items-center text-xl md:text-2xl lg:text-3xl font-semibold">
        {conditions}
      </div>
    </div>
  );
};

export default WeatherCard;
