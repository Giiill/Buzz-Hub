import Box from '@mui/material/Box';
import { Link  } from 'react-router-dom';
import { useTheme } from '@mui/material';

function BoxSx() {
  const theme = useTheme();
  return (
    <Box
      sx={{
        minWidth: 192,
        height: 498,
        backgroundColor: theme.palette.primary.main,
        boxShadow: '0px 0px 8px 4px #0000006c',
      }}
      
    >
      <Link to="/chat">chat</Link>
      <br></br>
      <Link to="/">home</Link>
      
    </Box>
  );
}
export default BoxSx;