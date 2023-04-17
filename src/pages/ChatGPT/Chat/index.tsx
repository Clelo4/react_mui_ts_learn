import { Avatar, Box, Divider, Input, SxProps, TextField, Typography } from '@mui/material';
import type { MsgType } from './Msg';
import Msg from './Msg';

interface PropsType {
  sx?: SxProps;
  chatId?: number;
}

const exampleMsgList: MsgType[] = [
  {
    id: '1',
    type: 'user',
    content:
      'a12222222rt { Avatar, Box, class="MuiPaper-root MuiPaper-elevation MuiPaper-elevation0 MuiAppBar-root MuiAppBar-colorInherit MuiAppBar-positionFixed mui-fixed css-1eggqok-MuiPaper-root-MuiAppBar-root"class="MuiPaper-root MuiPaper-elevation MuiPaper-elevation0 MuiAppBar-root MuiAppBar-colorInherit MuiAppBar-positionFixed mui-fixed css-1eggqok-MuiPaper-root-MuiAppBar-root"class="MuiPaper-root MuiPaper-elevation MuiPaper-elevation0 MuiAppBar-root MuiAppBar-colorInherit MuiAppBar-positionFixed mui-fixed css-1eggqok-MuiPaper-root-MuiAppBar-root"class="MuiPaper-root MuiPaper-elevation MuiPaper-elevation0 MuiAppBar-root MuiAppBar-colorInherit MuiAppBar-positionFixed mui-fixed css-1eggqok-MuiPaper-root-MuiAppBar-root"class="MuiPaper-root MuiPaper-elevation MuiPaper-elevation0 MuiAppBar-root MuiAppBar-colorInherit MuiAppBar-positionFixed mui-fixed css-1eggqok-MuiPaper-root-MuiAppBar-root"Divider, SxProps, Typography } f22222222222222222222222222222222222222222222222222222222',
    role: 'system'
  },
  {
    id: '2',
    type: 'text',
    content: 'a22222222222222222222222222222222222222222222222222222',
    role: 'system'
  },
  {
    id: '3',
    type: 'user',
    content: 'a12312222222222222222222222222222222222222222222',
    role: 'system'
  },
  {
    id: '4',
    type: 'user',
    content: 'a12312222222222222222222222222222222222222222222',
    role: 'system'
  },
  {
    id: '5',
    type: 'user',
    content: 'a12312222222222222222222222222222222222222222222',
    role: 'system'
  },
  {
    id: '6',
    type: 'user',
    content: 'a12312222222222222222222222222222222222222222222',
    role: 'system'
  },
  {
    id: '7',
    type: 'user',
    content: 'a12312222222222222222222222222222222222222222222',
    role: 'system'
  },
  {
    id: '8',
    type: 'text',
    content:
      'a1231222222222222222222222123333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333333312222222222222222222222',
    role: 'system'
  },
  {
    id: '9',
    type: 'user',
    content:
      'a12312123333333333333333333333333333333333333333333333333333333331231233333333333333333333333333333333333333333333333333333333333333333333333333333333222222222222222222222222222222222222222222',
    role: 'system'
  },
  {
    id: '10',
    type: 'user',
    content:
      'a12312123333333333333333333333333333333333333333333333333333333331231233333333333333333333333333333333333333333333333333333333333333333333333333333333222222222222222222222222222222222222222222',
    role: 'system'
  },
  {
    id: '11',
    type: 'user',
    content:
      'a12312123333333333333333333333333333333333333333333333333333333331231233333333333333333333333333333333333333333333333333333333333333333333333333333333222222222222222222222222222222222222222222',
    role: 'system'
  },
  {
    id: '12',
    type: 'user',
    content:
      'a12312123333333333333333333333333333333333333333333333333333333331231233333333333333333333333333333333333333333333333333333333333333333333333333333333222222222222222222222222222222222222222222',
    role: 'system'
  }
];

export default function Chat(props: PropsType) {
  return (
    <Box
      component="div"
      sx={{
        ...(props.sx ?? {}),
        width: '100%'
      }}
    >
      <Box
        component="div"
        sx={{
          textAlign: 'left',
          width: '100%',
          height: 'calc(100% - 58px)',
          overflowY: 'scroll',
          padding: '0 24px'
        }}
      >
        {exampleMsgList.map((msg, index) => {
          return <Msg key={msg.id} {...msg}></Msg>;
        })}
      </Box>
      <Box
        sx={{
          position: 'absolute',
          bottom: 0,
          padding: '10px 74px',
          width: '100%'
        }}
      >
        <TextField
          multiline
          maxRows={4}
          sx={{
            width: '100%'
          }}
        ></TextField>
      </Box>
    </Box>
  );
}
