import Box from '@mui/material/Box';
import AppBar from '@mui/material/AppBar';
import Toolbar from '@mui/material/Toolbar';
import Button from '@mui/material/Button';
import List from '@mui/material/List';
import { styled } from '@mui/material';
import { FriendList } from "./FriendList";
import AccessAlarmsIcon from '@mui/icons-material/AccessAlarms';
import PeopleIcon from '@mui/icons-material/People';
import SettingsApplicationsIcon from '@mui/icons-material/SettingsApplications';
import Badge from '@mui/material/Badge/Badge';
function Friend() {
    return (
        <MainBox>
            <AppBar position="static">
                <FriendsListToolbar>
                    <BoxButtonFriends>
                        <ButtonFriends startIcon={<PeopleIcon sx={{ zIndex: '-1' }} />} >
                            Friends
                        </ButtonFriends>
                        <BadgeNewFriend badgeContent={1} color="error" />
                    </BoxButtonFriends>
                    <ButtonArchive startIcon={<AccessAlarmsIcon />} >
                        Archive
                    </ButtonArchive>
                    <ButtonSetting startIcon={<SettingsApplicationsIcon />} >
                        Setting
                    </ButtonSetting>
                </FriendsListToolbar>
            </AppBar>
            <BoxFriendList>
                <FriendList />
            </BoxFriendList>
        </MainBox>
    );
};
export { Friend };


const MainBox = styled(Box)(({ theme }) => ({
    width: 384,
    maxHeight: 400,
    boxShadow: '0px 0px 8px 4px #0000006c',
    overflow: 'hidden',
    backgroundColor: theme.palette.secondary.main,
}));

const FriendsListToolbar = styled(Toolbar)(({ theme }) => ({
    backgroundColor: theme.palette.secondary.main,
    boxShadow: '0px 0px 8px 4px #0000006c',
    zIndex: '1'
}));

const ButtonFriends = styled(Button)(({ theme }) => ({
    display: 'flex',
    position: 'relative',
    fontSize: '14px',
    color: theme.palette.primary.main,
    textTransform: 'none',
    fontWeight: 'bold',
    width: '90px',

}));

const BoxButtonFriends = styled(Box)(() => ({
    flexGrow: 1,
    display: 'flex',
    position: 'relative',
}));

const BadgeNewFriend = styled(Badge)(() => ({
    display: 'flex',
    position: 'absolute',
    marginTop: '10px',
    marginLeft: '20px',
    zIndex: '-1'
}));

const ButtonArchive = styled(Button)(({ theme }) => ({
    fontSize: '14px',
    color: theme.palette.primary.main,
    textTransform: 'none',
    width: '90px'
}));

const ButtonSetting = styled(Button)(({ theme }) => ({
    fontSize: '14px',
    color: theme.palette.primary.main,
    textTransform: 'none',
    width: '90px'
}));

const BoxFriendList = styled(List)(({ theme }) => ({
    width: '100%',
    height: '80%',
    overflow: 'auto',
    backgroundColor: theme.palette.secondary.main,
}));

