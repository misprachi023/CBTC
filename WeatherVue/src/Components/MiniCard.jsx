import React, { useEffect, useState } from "react";
import sun from "../assets/icons/sun.png";
import cloud from "../assets/icons/cloud.png";
import fog from "../assets/icons/fog.png";
import rain from "../assets/icons/rain.png";
import snow from "../assets/icons/snow.png";
import storm from "../assets/icons/storm.png";
import winds from "../assets/icons/windy.png";

const MiniCard = ({ time, temp, iconString }) => {
    const [icon, setIcon] = useState();

  useEffect(() => {
    if (iconString) {
      const condition = iconString.toLowerCase();
      let newIcon;

      switch (true) {
        case condition.includes("cloud"):
          newIcon = cloud;
          break;
        case condition.includes("rain"):
          newIcon = rain;
          break;
        case condition.includes("clear"):
          newIcon = sun;
          break;
        case condition.includes("thunder"):
          newIcon = storm;
          break;
        case condition.includes("fog"):
          newIcon = fog;
          break;
        case condition.includes("snow"):
          newIcon = snow;
          break;
        case condition.includes("wind"):
          newIcon = winds;
          break;
        default:
          newIcon = sun;
      }

      setIcon(newIcon);
    }
  }, [iconString]);

  return (
    <div className="glassCard w-full sm:w-1/2 md:w-1/3 lg:w-1/4 xl:w-1/5 p-4 flex flex-col">
      <p className="text-center text-sm sm:text-base md:text-lg lg:text-xl">
        {
          new Date(time)
            .toLocaleTimeString("en", { weekday: "long" })
            .split(" ")[0]
        }
      </p>
      <hr />
      <div className="w-full flex justify-center items-center flex-1">
        <img
          src={icon}
          alt="forecast not available"
          className="w-12 h-12 sm:w-16 sm:h-16 md:w-20 md:h-20 lg:w-24 lg:h-24"
        />
      </div>
      <p className="text-center font-bold text-sm sm:text-base md:text-lg lg:text-xl">
        {temp}&deg;C
      </p>
    </div>
  );
};

export default MiniCard;
