import { styled } from '@mui/material';
import Box from '@mui/material/Box';

function Content() {
  return (
    <MainBox />
  );
}
export { Content };

const MainBox = styled(Box)(({ theme }) => ({
  width: 588,
  height: 300,
  backgroundColor: theme.palette.primary.main,
}))
