import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material';

function SideBarLeft() {
  return (
    <MainBox>
      <Link to="/messages">messages</Link>
      <br></br>
      <Link to="/">home</Link>
    </MainBox>
  );
}
export { SideBarLeft };

const MainBox = styled(Box)(({ theme }) => ({
  minWidth: 192,
  height: 498,
  backgroundColor: theme.palette.primary.main,
  boxShadow: '0px 0px 8px 4px #0000006c',
}))