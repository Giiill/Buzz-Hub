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
import FormControlLabel from '@mui/material/FormControlLabel';
import Switch from '@mui/material/Switch';

function Bar() {
  const { userName } = useUserState();

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
        <FormControlLabel
          control={<MaterialUISwitch />}
          label=""
        />
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
const MaterialUISwitch = styled(Switch)(({ theme }) => ({
  width: 62,
  height: 34,
  padding: 7,
  '& .MuiSwitch-switchBase': {
    margin: 1,
    padding: 0,
    transform: 'translateX(6px)',
    '&.Mui-checked': {
      color: '#fff',
      transform: 'translateX(22px)',
      '& .MuiSwitch-thumb:before': {
        backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
          '#fff',
        )}" d="M4.2 2.5l-.7 1.8-1.8.7 1.8.7.7 1.8.6-1.8L6.7 5l-1.9-.7-.6-1.8zm15 8.3a6.7 6.7 0 11-6.6-6.6 5.8 5.8 0 006.6 6.6z"/></svg>')`,
      },
      '& + .MuiSwitch-track': {
        opacity: 1,
        backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
      },
    },
  },
  '& .MuiSwitch-thumb': {
    backgroundColor: theme.palette.mode === 'dark' ? '#003892' : '#001e3c',
    width: 32,
    height: 32,
    '&:before': {
      content: "''",
      position: 'absolute',
      width: '100%',
      height: '100%',
      left: 0,
      top: 0,
      backgroundRepeat: 'no-repeat',
      backgroundPosition: 'center',
      backgroundImage: `url('data:image/svg+xml;utf8,<svg xmlns="http://www.w3.org/2000/svg" height="20" width="20" viewBox="0 0 20 20"><path fill="${encodeURIComponent(
        '#fff',
      )}" d="M9.305 1.667V3.75h1.389V1.667h-1.39zm-4.707 1.95l-.982.982L5.09 6.072l.982-.982-1.473-1.473zm10.802 0L13.927 5.09l.982.982 1.473-1.473-.982-.982zM10 5.139a4.872 4.872 0 00-4.862 4.86A4.872 4.872 0 0010 14.862 4.872 4.872 0 0014.86 10 4.872 4.872 0 0010 5.139zm0 1.389A3.462 3.462 0 0113.471 10a3.462 3.462 0 01-3.473 3.472A3.462 3.462 0 016.527 10 3.462 3.462 0 0110 6.528zM1.665 9.305v1.39h2.083v-1.39H1.666zm14.583 0v1.39h2.084v-1.39h-2.084zM5.09 13.928L3.616 15.4l.982.982 1.473-1.473-.982-.982zm9.82 0l-.982.982 1.473 1.473.982-.982-1.473-1.473zM9.305 16.25v2.083h1.389V16.25h-1.39z"/></svg>')`,
    },
  },
  '& .MuiSwitch-track': {
    opacity: 1,
    backgroundColor: theme.palette.mode === 'dark' ? '#8796A5' : '#aab4be',
    borderRadius: 20 / 2,
  },
}));