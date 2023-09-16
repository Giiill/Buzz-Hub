import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AlarmIcon from '@mui/icons-material/Alarm';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import FriendList from "./FriendList";
import { useTheme } from '@mui/material';

function Friend() {
    const theme = useTheme();
    return (
        <Box sx={{
            width: 384,
            maxHeight: 400,
            boxShadow: '0px 0px 8px 4px #0000006c',
            overflow: 'hidden'
        }}>
            <Box sx={{ flexGrow: 1 }}>
                <AppBar position="static">
                    <Toolbar style={{ backgroundColor: theme.palette.secondary.main }} >
                        <Typography component="div"
                            style={{ color: theme.palette.primary.main }} sx={{
                                flexGrow: 1,
                            }}>
                            Friends
                        </Typography>

                        <div className='buttons'>
                            <IconButton sx={{
                                fontSize: '14px'
                            }}>
                                <AlarmIcon style={{ color: theme.palette.primary.main }} />
                                <Typography style={{ color: theme.palette.primary.main }}>Archive</Typography>
                            </IconButton>
                            <Button style={{ color: theme.palette.primary.main }} sx={{
                                textTransform: 'none',
                            }} ><Typography style={{ color: theme.palette.primary.main }}>Setting</Typography></Button>
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
