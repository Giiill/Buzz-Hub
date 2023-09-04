import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AlarmIcon from '@mui/icons-material/Alarm';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import FriendList from "./FriendList";




function Friend() {
    return (
        <Box sx={{
            width: 384,
            height: 400,
            backgroundColor: 'white',
            boxShadow: '0px 0px 8px 4px #0000006c',
            overflow: 'hidden'

        }}>
            <Box sx={{ flexGrow: 1, }}>
                <AppBar position="static">
                    <Toolbar sx={{
                        backgroundColor: 'white',

                    }}>
                        <Typography component="div" sx={{
                            flexGrow: 1,
                            fontSize: '14px',
                            color: '#262626'
                        }}>
                            Friends
                        </Typography>

                        <div className='buttons'>
                            <IconButton color="secondary" aria-label="add an alarm" sx={{
                                color: '#0050B3',
                                fontSize: '14px'
                            }}>
                                <AlarmIcon />Archive
                            </IconButton>
                            <Button color="inherit" sx={{
                                textTransform: 'none',
                                color: '#0050B3',
                            }} >Settings</Button>
                        </div>
                    </Toolbar>
                </AppBar>
            </Box>

            <List sx={{ width: '100%', height: '80%', overflow: 'auto', }}>
                <FriendList />
            </List>
        </Box>
    );
};
export default Friend;
