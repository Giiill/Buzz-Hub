import ListItem from '@mui/material/ListItem';
import { styled } from '@mui/material';
import Divider from '@mui/material/Divider';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { useUserState } from '../../../hooks/useUserState';




function FriendList() {
    const { data, isLoading } = useUserState();
    const validResults = data && data.results  || []; // проверку на существование данных
    if (isLoading) {
        return (
            <BoxLoading>
                <LoadingIcon />
            </BoxLoading>
        );
    };
    return (
        <>{
            // указываем что ожидаем от item тип данных string
            validResults.map((item: { name: string }) => {
                return (
                    <>
                        <FriendItem>
                            <FriendAvatar alt={item.name} src="/static/images/avatar/1.jpg" />
                            <FriendName>{item.name}</FriendName>
                        </FriendItem>
                        <Divider variant="inset" component="li" />
                    </>
                )
            })
        }</>
    );
};

export { FriendList };

const BoxLoading = styled(Box)(() => ({
    display: 'flex',
    height: '100%',
    alignItems: 'center',
    justifyContent: 'center'
}));

const LoadingIcon = styled(CircularProgress)(({ theme }) => ({
    color: theme.palette.primary.main,
}));

const FriendItem = styled(ListItem)(({ theme }) => ({
    alignItems: "flex-start",
    cursor: 'pointer',
    backgroundColor: theme.palette.secondary.main,
    '&:hover': {
        backgroundColor: theme.palette.success.main,

    },
}));

const FriendAvatar = styled(Avatar)(() => ({
    bordeRadius: "50%",
    boxShadow: "0px 0px 8px 3px #0000006c",
}));


const FriendName = styled('div')(() => ({
    fontSize: '16px',
    lineHeight: '22px',
    fontWeight: 'bold',
    marginLeft: '20px',
}));