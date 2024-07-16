import { useEffect, useState } from "react";

export const useDate = () => {
  const [currentDateTime, setCurrentDateTime] = useState(new Date());

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentDateTime(new Date());
    }, 60000); 

    return () => {
      clearInterval(timer);
    };
  }, []);

  const getFormattedDateTime = (dateTime, options) => {
    return new Intl.DateTimeFormat('en-US', options).format(dateTime);
  };

  const defaultOptions = {
    weekday: 'long',
    day: 'numeric',
    month: 'long',
    hour: 'numeric',
    minute: 'numeric',
    hour12: true,
    timeZone: 'UTC', 
  };

  const formattedDate = getFormattedDateTime(currentDateTime, defaultOptions);
  const formattedTime = currentDateTime.toLocaleTimeString('en-US', { hour: 'numeric', minute: 'numeric', hour12: true });

  return {
    date: formattedDate,
    time: formattedTime
  };
};
