import Box from '@mui/material/Box';
import { Link } from 'react-router-dom';
import { styled } from '@mui/material';
import { ERoutes } from '../../routes/routeDefinitions';

function SideBarLeft() {
  return (
    <MainBox>
      <Link to={ERoutes.Messages}>messages</Link>
      <br></br>
      <Link to={ERoutes.HomePage}>home</Link>
    </MainBox>
  );
}
export { SideBarLeft };

const MainBox = styled(Box)(({ theme }) => ({
  minWidth: 192,
  height: 498,
  backgroundColor: theme.palette.primary.main,
  boxShadow: '0px 0px 8px 4px #0000006c',
  fontWeight: 'bold',
  fontSize: '30px',
}))