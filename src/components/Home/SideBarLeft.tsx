import Box from '@mui/material/Box';
import { Link  } from 'react-router-dom';

function BoxSx() {
  return (
    <Box
      sx={{
        width: 192,
        height: 498,
        backgroundColor: 'purple',
        '&:hover': {
          backgroundColor: 'primary.dark',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
      
    >
      <Link to="/chat">chat</Link>
      
    </Box>
  );
}
export default BoxSx;