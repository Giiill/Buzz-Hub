import Box from '@mui/material/Box';
import InputBase from '@mui/material/InputBase';
import SearchIcon from '@mui/icons-material/Search';
import { Avatar, Toolbar, Typography, styled } from '@mui/material';
import IconButton from '@mui/material/IconButton/IconButton';
import Badge from '@mui/material/Badge/Badge';
import MailIcon from '@mui/icons-material/Mail';
import NotificationsIcon from '@mui/icons-material/Notifications';
import MoreIcon from '@mui/icons-material/MoreVert';
import { useUserState } from '../hooks/useUserState';
import { imgConfig } from '../assets/imgConfig';
function Bar() {
  const {userName} = useUserState();
  return (
    <MainBox >
      <Search>
        <SearchIconWrapper>
          <SearchIcon />
        </SearchIconWrapper>
        <StyledInputBase
          placeholder="Search…"
          inputProps={{ 'aria-label': 'search' }}
        />
      </Search>
      <SeparatorBox />
      <UserNavigationBox sx={{ display: { xs: 'none', md: 'flex' } }}>
        <UserIconButton >
          <UserIconAccount alt="" src={imgConfig['Babi Yoda']} />
          <UserNameAccount>
            {userName}
          </UserNameAccount>
        </UserIconButton>
        <MessageIconButton>
          <Badge badgeContent={3} color="error">
            <MailIcon />
          </Badge>
        </MessageIconButton>
        <NotificationIconButton>
          <Badge badgeContent={2} color="error">
            <NotificationsIcon />
          </Badge>
        </NotificationIconButton>
      </UserNavigationBox>
      <Burger sx={{ display: { xs: 'flex', md: 'none' } }}>
        <BurgerIconButton>
          <MoreIcon />
        </BurgerIconButton>
      </Burger>
    </MainBox>


  )
};

export { Bar };

const Search = styled('div')(({ theme }) => ({
  position: 'relative',
  borderRadius: theme.shape.borderRadius,
  backgroundColor: theme.palette.secondary.main,
  marginLeft: 0,
  width: '100%',
  [theme.breakpoints.up('sm')]: {
    width: 'auto',
  },
}));

const SearchIconWrapper = styled('div')(({ theme }) => ({
  padding: theme.spacing(0, 2),
  height: '100%',
  position: 'absolute',
  pointerEvents: 'none',
  display: 'flex',
  alignItems: 'center',
  justifyContent: 'center',
  color: theme.palette.success.main,
}));

const StyledInputBase = styled(InputBase)(({ theme }) => ({
  '& .MuiInputBase-input': {
    padding: theme.spacing(1, 1, 1, 0),
    // vertical padding + font size from searchIcon
    paddingLeft: `calc(1em + ${theme.spacing(4)})`,
    transition: theme.transitions.create('width'),
    width: '100%',
    [theme.breakpoints.up('sm')]: {
      width: '12ch',
      '&:focus': {
        width: '336px',
      },
    },
  },
}));

const MainBox = styled(Toolbar)(({ theme }) => ({
  justifyContent: 'flex-end',
  backgroundColor: theme.palette.primary.main,
  color: theme.palette.secondary.main,
  boxShadow: '0px 0px 8px 4px #0000006c'
}));

const UserIconButton = styled(Box)(() => ({
  height: '50px',
  display: 'flex',
  justifyContent: 'center',
  alignItems: 'center',
  borderRadius: '10px',
  paddingLeft: '10px',
  paddingRight: '10px',
  marginRight: '10px',
  '&:hover': {
    cursor: 'pointer',
    boxShadow: "0px 0px 8px 3px #0000006c",
  },
  '&:active': {
    transform: 'scale(0.95)',
  }
}));

const UserIconAccount = styled(Avatar)(() => ({
  height: '50px',
  width: '50px',
  boxShadow: "0px 0px 8px 3px #0000006c",
  marginRight: '10px'
}));

const UserNameAccount = styled(Typography)(({ theme }) => ({
  color: theme.palette.secondary.main,
}));

const MessageIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.secondary.main,
  marginRight: '10px'
}));

const NotificationIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.secondary.main,
  marginRight: '10px'

}));

const Burger = styled(Box)(() => ({

}));

const BurgerIconButton = styled(IconButton)(({ theme }) => ({
  color: theme.palette.secondary.main
}))

const UserNavigationBox = styled(Box)(() => ({

}));

const SeparatorBox = styled(Box)(() => ({
  flexGrow: 1
}));