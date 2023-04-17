import { Avatar, Box, Divider, Hidden, SxProps, Typography } from '@mui/material';
import { useAppSelector } from 'store/hooks';
import { useAppTheme } from 'themes/hooks';
import ArrowLeftIcon from '@mui/icons-material/ArrowLeft';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';

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

  const ArrowIcon = isUser ? ArrowRightIcon : ArrowLeftIcon;

  return (
    <Box
      component="div"
      sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: isUser ? 'row-reverse' : 'row',
        alignItems: 'stretch',
        margin: '24px auto',
        width: '100%'
      }}
    >
      <Box
        sx={{
          display: 'flex',
          alignItems: 'center',
          width: '10px'
        }}
      >
        <ArrowIcon
          sx={{
            height: '40px',
            width: '40px',
            position: 'relative',
            color: theme.palette.primary.light,
            ...(isUser
              ? {
                  left: '-18px'
                }
              : {
                  right: '12px'
                })
          }}
          // transform={scale}
        ></ArrowIcon>
      </Box>
      <Box
        component="div"
        sx={{
          maxWidth: '80%',
          backgroundColor: theme.palette.primary.light,
          borderRadius: `${customization.borderRadius}px`,
          minHeight: `${minHeight}px`,
          padding: '16px'
        }}
      >
        <Typography sx={{ wordBreak: 'break-all', lineHeight: '18px' }}>{props.content}</Typography>
      </Box>
      <Box sx={{ width: '12px', height: '100%', flexShrink: 0 }}></Box>
    </Box>
  );
}
