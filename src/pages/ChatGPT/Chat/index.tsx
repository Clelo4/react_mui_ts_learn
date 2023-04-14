import { Avatar, Box, Divider, SxProps, Typography } from '@mui/material';

interface PropsType {
  sx?: SxProps;
  chatId?: number;
}

interface MsgType {
  id: string;
  type: string;
  content: string;
  role: string;
}

const exampleMsgList: MsgType[] = [
  {
    id: '1',
    type: 'text',
    content: 'a',
    role: 'system'
  },
  {
    id: '1',
    type: 'text',
    content: 'a',
    role: 'system'
  }
];

function Msg(props: MsgType) {
  return (
    <Box
      component="div"
      sx={{
        display: 'flex',
        justifyContent: 'flex-start',
        flexDirection: 'row',
        alignItems: 'center',
        padding: '24px 0',
        margin: '0 auto',
        width: '768px',
      }}
    >
      <Avatar sx={{ height: '32px', width: '32px', marginRight: '15px' }}></Avatar>
      <Typography sx={{
      }}>{props.content}</Typography>
    </Box>
  );
}

export default function Chat(props: PropsType) {
  return (
    <Box
      component="div"
      sx={{
        ...(props.sx ?? {}),
        width: '100%'
      }}
    >
      <Box component="div" sx={{ textAlign: 'left', width: '100%' }}>
        {exampleMsgList.map((msg, index) => {
          return (
            <>
              <Msg key={msg.id} {...msg}></Msg>
              <Divider></Divider>
            </>
          );
        })}
      </Box>
    </Box>
  );
}
