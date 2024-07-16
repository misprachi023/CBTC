import React, { useEffect, useState } from 'react';
import { useStateContext } from '../Context';
import Clear from '../assets/images/Clear.jpg';
import Fog from '../assets/images/fog.png';
import Cloudy from '../assets/images/Cloudy.jpg';
import Rainy from '../assets/images/Rainy.jpg';
import Snow from '../assets/images/snow.jpg';
import Stormy from '../assets/images/Stormy.jpg';

const BackgroundLayout = () => {
  const { values } = useStateContext();
  const [image, setImage] = useState(Clear);

  useEffect(() => {
    if (values[0]?.main) {
      const condition = values[0].main.toLowerCase();
      let newImage = Clear;

      switch (true) {
        case condition.includes('clear'):
          newImage = Clear;
          break;
        case condition.includes('cloud'):
          newImage = Cloudy;
          break;
        case condition.includes('rain'):
        case condition.includes('shower'):
          newImage = Rainy;
          break;
        case condition.includes('snow'):
          newImage = Snow;
          break;
        case condition.includes('fog'):
          newImage = Fog;
          break;
        case condition.includes('thunder'):
        case condition.includes('storm'):
          newImage = Stormy;
          break;
        default:
          newImage = Clear;
      }

      setImage(newImage);
    }
  }, [values]);

  return (
    <img src={image} alt="weather_image" className="h-screen w-full fixed left-0 top-0 -z-[10]" />
  );
};

export default BackgroundLayout;
