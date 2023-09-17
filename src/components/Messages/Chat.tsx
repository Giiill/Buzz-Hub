import Box from '@mui/material/Box';
import { useTheme } from '@mui/material';
import Input from '@mui/material/Input';
import HistoryEduIcon from '@mui/icons-material/HistoryEdu';
import Button from '@mui/material/Button';
import AttachEmailIcon from '@mui/icons-material/AttachEmail';
import IconButton from '@mui/material/IconButton';

function BoxSx() {
  const theme = useTheme();
  return (
    <>
      <Box
        sx={{
          width: '100%',
          height: 500,
          backgroundColor: theme.palette.secondary.main,
          boxShadow: '0px 0px 8px 4px #0000006c',
          display: 'flex',
          flexDirection: 'column',
          justifyContent: 'flex-end',
        }}>  
          <Box sx={{
          display: 'flex',
          gap: '10px',
          alignItems: 'center',
          marginBottom: '5px',
        }}>
          <IconButton color='primary' aria-label="delete" size="small" sx={{
            marginLeft: '10px'
          }}>
              <AttachEmailIcon fontSize="inherit" />
          </IconButton>
            <Input fullWidth  placeholder="Write a message" />
            <Button variant="contained" endIcon={<HistoryEduIcon />} sx={{
              height: '25px',
              marginRight: '10px',
              }}>
              Send
            </Button>
          </Box>
      </Box>
      
      
    </>
  );
}
export default BoxSx;


// const StyledInput = styled('input')(() => ({
//   /* Ваши стили здесь */
//   width: '20%',
//   height: '40px',
//   marginLeft: '3px',
  
//   /* Убираем подчеркивание при наведении на Input */
//   '.MuiInput-underline:hover:before': {
//     borderBottom: 'none !important',
//   },
// }));