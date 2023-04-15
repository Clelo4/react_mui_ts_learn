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

const borderRadius = '12px';
const marginSize = 20;
const paddingSize = '20px';
const contentBgColor = 'white';
const sidebarSize = 220;

export default function ChatGPT() {
  const [sidebarOpen, setSidebarOpen] = useState(false);
  const theme = useAppTheme();
  const isUpMd = useMediaQuery(theme.breakpoints.up('md'));
  const [isFullScreen, setFullScreen] = useState(false);

  const sidebarOverflowSize = isUpMd && sidebarOpen ? sidebarSize + marginSize : 0;

  return (
    <Box
      component="div"
      sx={{
        height: '100%',
        width: '100%',
        ...theme.typography.mainContent
      }}
    >
      <TopBar
        sx={{
          height: '50px',
          width: '100%',
          marginBottom: `${marginSize}px`,
          padding: '7px 20px',
          borderRadius,
          backgroundColor: contentBgColor
        }}
      ></TopBar>
      <Box
        component="div"
        sx={{
          minHeight: '500px',
          height: 'calc(100% - 70px)',
          width: '100%',
          ...(isFullScreen
            ? {
                position: 'fixed',
                left: 0,
                right: 0,
                top: 0,
                bottom: 0,
                zIndex: 10000 - 1,
                padding: isUpMd ? paddingSize : 0,
                borderRadius: 0,
                backgroundColor: theme.palette.primary.light,
                height: '100%'
              }
            : {})
        }}
      >
        <Box
          component="div"
          sx={{
            position: 'relative',
            left: `-${sidebarOverflowSize}px`,
            display: 'flex',
            height: '100%',
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
              marginRight: `${marginSize}px`,
              flexShrink: 0
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
              overflow: 'hidden',
              flexDirection: 'column',
              ...(isFullScreen && !isUpMd ? {} : { borderRadius })
            }}
          >
            <Header
              sx={{
                backgroundColor: contentBgColor,
                boxSizing: 'border-box',
                padding: '0 24px',
        height: '68px',
        flexShrink: 0,
              }}
              onClickMenu={() => {
                setSidebarOpen(!sidebarOpen);
              }}
              fullScreenEnter={() => {
                setFullScreen(true);
              }}
              fullScreenExit={() => {
                setFullScreen(false);
              }}
              isFullScreen={isFullScreen}
            ></Header>
            <Divider></Divider>
            <Chat
              sx={{
                backgroundColor: contentBgColor,
                flexGrow: 1,
                boxSizing: 'border-box',
                padding: '0 24px'
              }}
              chatId={1}
            ></Chat>
          </Box>
        </Box>
      </Box>
    </Box>
  );
}
