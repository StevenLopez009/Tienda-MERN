import { Box } from '@mui/material';
import  { useState, useEffect, useRef } from 'react';

function CountDown() {
  const calculateTargetTime = () => {
    const now = new Date();
    const target = new Date(); 
    target.setHours(22, 0, 0, 0); 
    if (now > target) {
      target.setDate(target.getDate() + 1);
    }
    return target.getTime(); 
  };

  const targetTime = useRef(calculateTargetTime()); 
  const [timeRemaining, setTimeRemaining] = useState(targetTime.current - new Date().getTime());

  useEffect(() => {
    const intervalId = setInterval(() => {
      const currentTime = new Date().getTime();
      const remaining = targetTime.current - currentTime;

      if (remaining <= 0) {
        clearInterval(intervalId);
        setTimeRemaining(0);
      } else {
        setTimeRemaining(remaining);
      }
    }, 1000);

    return () => clearInterval(intervalId); 
  }, []);

  const hours = Math.floor(timeRemaining / (1000 * 60 * 60));
  const minutes = Math.floor((timeRemaining % (1000 * 60 * 60)) / (1000 * 60));
  const seconds = Math.floor((timeRemaining % (1000 * 60)) / 1000);

  return (
    <Box sx={{
      display: "flex"
    }}>
      <Box sx={{
        backgroundColor: "#e3d5ca",
        color: "#6e4a33",
        padding: "5px",
        margin: "0 5px",
        borderRadius: "5px"
      }}>
        {hours.toString().padStart(2, '0')}
      </Box>
      <Box sx={{
        backgroundColor: "#e3d5ca",
        color: "#6e4a33",
        padding: "5px",
        margin: "0 5px",
        borderRadius: "5px"
      }}>
        {minutes.toString().padStart(2, '0')}:
      </Box>
      <Box sx={{
        backgroundColor: "#e3d5ca",
        color: "#6e4a33",
        padding: "5px",
        borderRadius: "5px"
      }}>
        {seconds.toString().padStart(2, '0')}
      </Box>
    </Box>
  );
}

export default CountDown;


