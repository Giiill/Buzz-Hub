import ListItem from '@mui/material/ListItem';
import { styled } from '@mui/material';
import Divider from '@mui/material/Divider';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { useUserState } from '../../../hooks/useUserState';
import { imgConfig } from '../../../assets/imgConfig';



function FriendList() {
    const { data, isLoading } = useUserState();
    const validResults = data && data.results  || []; // Checking the existence of data
    if (isLoading) {
        return (
            <BoxLoading>
                <LoadingIcon />
            </BoxLoading>
        );
    };
    return (
        <>{
            validResults.map((item: { name: string }) => {
                return (
                    <>
                        <FriendItem>
                            <FriendAvatar alt={item.name} src={imgConfig[item.name]} />
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
    transition: 'background-color 0.3s',
    backgroundColor: theme.palette.secondary.main,
    '&:hover': {
        backgroundColor: theme.palette.success.main,

    },
}));

const FriendAvatar = styled(Avatar)(() => ({
    height: '50px',
    width: '50px',
    bordeRadius: "50%",
    boxShadow: "0px 0px 8px 3px #0000006c",
}));


const FriendName = styled('div')(() => ({
    fontSize: '16px',
    lineHeight: '22px',
    fontWeight: 'bold',
    marginLeft: '20px',
}));