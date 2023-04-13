import { Box, Button, Divider, Link, useMediaQuery } from '@mui/material';
import { useNavigate } from 'react-router';
import ReactMarkdown from 'react-markdown';
import OpenAILogo from 'assets/images/OpenAILogo';
import Sidebar from './Sidebar';
import Header from './Header';
import Chat from './Chat';
import TopBar from './TopBar';
import { useState } from 'react';
import { useAppTheme } from 'themes/hooks';
import { FullScreen, useFullScreenHandle } from 'react-full-screen';

const borderRadius = '12px';
const marginSize = 20;
const paddingSize = '20px';
const contentBgColor = 'white';
const sidebarSize = 220;

export default function ChatGPT() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);

  const theme = useAppTheme();
  const isUpMd = useMediaQuery(theme.breakpoints.up('md'));

  const sidebarOverflowSize = isUpMd && sidebarOpen ? sidebarSize + marginSize : 0;
  const chatFullScreenHandle = useFullScreenHandle();

  return (
    <Box component="div" sx={{ height: '100%', width: '100%', position: 'relative' }}>
      <TopBar
        sx={{
          marginBottom: `${marginSize}px`,
          borderRadius,
          height: '50px',
          width: '100%',
          display: 'block',
          padding: '7px 20px',
          backgroundColor: contentBgColor
        }}
      ></TopBar>
      <Box
        component="div"
        sx={{
          position: 'relative',
          left: `-${sidebarOverflowSize}px`,
          display: 'flex',
          minHeight: '500px',
          height: 'calc(100% - 76px)',
          width: `calc(100% + ${sidebarOverflowSize}px)`,
          transition: theme.transitions.create(['left', 'width'], {
            duration: theme.transitions.duration.standard
          })
        }}
      >
        <Sidebar
          sx={{
            width: `${sidebarSize}px`,
            borderRadius,
            padding: paddingSize,
            marginRight: `${marginSize}px`
          }}
          open={sidebarOpen}
          onClose={() => {
            setSidebarOpen(false);
          }}
        ></Sidebar>
        <Box
          component="div"
          sx={{
            flexGrow: 1,
            display: 'flex',
            height: '100%',
            backgroundColor: contentBgColor,
            borderRadius,
            overflow: 'hidden',
            flexDirection: 'column'
          }}
        >
          <FullScreen handle={chatFullScreenHandle}>
            <Header
              sx={{ height: '58px', backgroundColor: contentBgColor }}
              onClickMenu={() => {
                setSidebarOpen(!sidebarOpen);
              }}
              fullScreenEnter={chatFullScreenHandle.enter}
              fullScreenExit={chatFullScreenHandle.exit}
              isFullScreen={chatFullScreenHandle.active}
            ></Header>
            <Divider></Divider>
            <Chat
              sx={{
                backgroundColor: contentBgColor
              }}
            ></Chat>
          </FullScreen>
        </Box>
      </Box>
    </Box>
  );
}
