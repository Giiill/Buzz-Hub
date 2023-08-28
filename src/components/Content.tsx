import Box from '@mui/material/Box';

function BoxSx() {
  return (
    <Box
      sx={{
        width: 588,
        height: 300,
        backgroundColor: 'primary.dark',
        '&:hover': {
          backgroundColor: 'primary.main',
          opacity: [0.9, 0.8, 0.7],
        },
      }}
    />
  );
}
export default BoxSx;