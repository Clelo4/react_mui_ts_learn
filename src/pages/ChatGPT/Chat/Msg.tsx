import { Avatar, Box, Divider, Hidden, SxProps, Typography } from '@mui/material';
import { useAppSelector } from 'store/hooks';
import { useAppTheme } from 'themes/hooks';

export interface MsgType {
  id: string;
  type: string;
  content: string;
  role: string;
}

const minHeight = 32;

export default function Msg(props: MsgType) {
  const isUser = props.type === 'user';
  const theme = useAppTheme();
  const customization = useAppSelector((state) => state.customization);
  return (
    <Box
      component="div"
      sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: isUser ? 'row-reverse' : 'row',
        alignItems: 'flex-start',
        margin: '24px auto',
        width: '100%'
      }}
    >
      <Avatar sx={{ height: `${minHeight}px`, width: `${minHeight}px`, marginTop: '5px' }}></Avatar>
      <Box sx={{ width: '16px', flexShrink: 0 }}></Box>
      <Box
        component="div"
        sx={{
          maxWidth: '100%',
          backgroundColor: theme.palette.primary.light,
          borderRadius: `${customization.borderRadius}px`,
          minHeight: `${minHeight}px`,
          padding: '16px'
        }}
      >
        <Box></Box>
        <Typography sx={{ wordBreak: 'break-all', lineHeight: '18px' }}>{props.content}</Typography>
      </Box>
      <Box sx={{ width: '48px', flexShrink: 0 }}></Box>
    </Box>
  );
}
