import { Box, Typography } from '@mui/material';
import { useState, useEffect, useRef } from 'react';

function CountDown() {

  const calculateCloseTime = () => {
    const now = new Date();
    const closeTime = new Date();
    closeTime.setHours(22, 0, 0, 0); 
    if (now > closeTime) {
      return 0; 
    }
    return closeTime.getTime();
  };

  const calculateOpenTime = () => {
    const now = new Date();
    const openTime = new Date();
    openTime.setHours(8, 0, 0, 0); 
    if (now.getHours() >= 22) {
      openTime.setDate(openTime.getDate() + 1);
    }
    return openTime.getTime();
  };

  const closeTime = useRef(calculateCloseTime());
  const openTime = useRef(calculateOpenTime());
  const [timeUntilClose, setTimeUntilClose] = useState(closeTime.current - new Date().getTime());
  const [timeUntilOpen, setTimeUntilOpen] = useState(openTime.current - new Date().getTime());
  const [isStoreOpen, setIsStoreOpen] = useState(false);

  useEffect(() => {
    const updateTimes = () => {
      const now = new Date().getTime();
      const remainingClose = closeTime.current - now;
      const remainingOpen = openTime.current - now;

      setTimeUntilClose(Math.max(remainingClose, 0)); 
      setTimeUntilOpen(Math.max(remainingOpen, 0)); 
      
      const currentHour = new Date().getHours();
      setIsStoreOpen(currentHour >= 8 && currentHour < 22);
    };
    updateTimes(); 
    const intervalId = setInterval(() => {
      updateTimes();
    }, 1000);
    return () => clearInterval(intervalId);
  }, []);

  const formatTime = (time) => {
    const hours = Math.floor(time / (1000 * 60 * 60));
    const minutes = Math.floor((time % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((time % (1000 * 60)) / 1000);
    return `${hours.toString().padStart(2, '0')}:${minutes
      .toString()
      .padStart(2, '0')}:${seconds.toString().padStart(2, '0')}`;
  };

  return (
    <Box sx={{ display: 'flex', flexDirection: 'column', gap: '10px' }}>
      {isStoreOpen ? (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Typography sx={{ fontSize: '16px', color: '#555' }}>Close In:</Typography>
          <Box
            sx={{
              backgroundColor: '#e3d5ca',
              color: '#6e4a33',
              padding: '5px',
              borderRadius: '5px',
            }}
          >
            {timeUntilClose > 0 ? formatTime(timeUntilClose) : 'Cerrada'}
          </Box>
        </Box>
      ) : (
        <Box sx={{ display: 'flex', alignItems: 'center', gap: '8px' }}>
          <Typography sx={{ fontSize: '16px', color: '#555' }}>Open In:</Typography>
          <Box
            sx={{
              backgroundColor: '#e3d5ca',
              color: '#6e4a33',
              padding: '5px',
              borderRadius: '5px',
            }}
          >
            {timeUntilOpen > 0 ? formatTime(timeUntilOpen) : 'Abierta'}
          </Box>
        </Box>
      )}
    </Box>
  );
}

export default CountDown;




