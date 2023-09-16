import ListItem from '@mui/material/ListItem';
import ListItemAvatar from '@mui/material/ListItemAvatar';
import styled from "@emotion/styled";
import Divider from '@mui/material/Divider';
import CircularProgress from '@mui/material/CircularProgress';
import Box from '@mui/material/Box';
import Avatar from '@mui/material/Avatar';
import { UserContext } from '../../../context/userContext';
import { useContext } from 'react';
import { useTheme } from '@mui/material';



function FriendList() {
    const { data, isLoading } = useContext(UserContext);
    const theme = useTheme();
    if (isLoading) {
        return (
            <Box sx={{ display: 'flex', height: '100%', alignItems: 'center', justifyContent: 'center' }}>
                <CircularProgress />
            </Box>
        );
    };
    return (
        <div>{
            // добавляем проверку на существование data и на data.results и указываем что ожидаем от item тип данных string
            data && data.results && data.results.map((item: { name: string }) => {
                return <div>
                    <ListItem  alignItems="flex-start" sx={{
                        backgroundColor: theme.palette.secondary.main,
                        cursor: 'pointer',
                        '&:hover': {
                            backgroundColor: 'rgba(208, 212, 218, 0.541) ',

                        },
                    }}>
                        <ListItemAvatar>
                            <Avatar alt={item.name} src="/static/images/avatar/1.jpg" />
                        </ListItemAvatar>
                        <ItemName style={{ color: theme.palette.primary.main }} >{item.name}</ItemName>
                    </ListItem>
                    <Divider variant="inset" component="li" />
                </div>
            })
        }</div>
    );

}

export default FriendList;
const ItemName = styled('div')(() => ({
    fontSize: '16px',
    lineHeight: '22px',
    fontWeight: 600,
}))