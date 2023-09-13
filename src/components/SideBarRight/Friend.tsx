import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Typography from '@mui/material/Typography';
import Button from '@mui/material/Button';
import AlarmIcon from '@mui/icons-material/Alarm';
import IconButton from '@mui/material/IconButton';
import List from '@mui/material/List';
import FriendList from "./FriendList";
import { GlobalStylesContext } from '../../context/globalStyles';
import { useContext } from 'react';



function Friend() {
    const { primary } = useContext(GlobalStylesContext)!;
    const { secondary } = useContext(GlobalStylesContext)!;
    return (
        <Box style={{backgroundColor: secondary}} sx={{
            width: 384,
            maxHeight: 400,
            boxShadow: '0px 0px 8px 4px #0000006c',
            overflow: 'hidden'

        }}>
            <Box sx={{ flexGrow: 1}}>
                <AppBar position="static">
                    <Toolbar style={{backgroundColor: secondary}} sx={{
                        backgroundColor: 'white',

                    }}>
                        <Typography style={{ color: primary }} component="div" sx={{
                            flexGrow: 1,
                            fontSize: '14px',
                        }}>
                            Friends
                        </Typography>

                        <div className='buttons'>
                            <IconButton style={{ color: primary }} sx={{
                                fontSize: '14px'
                            }}>
                                <AlarmIcon />Archive
                            </IconButton>
                            <Button style={{ color: primary }} sx={{
                                textTransform: 'none',
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
