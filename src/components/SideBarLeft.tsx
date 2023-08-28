import Box from '@mui/material/Box';

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
    />
  );
}
export default BoxSx;