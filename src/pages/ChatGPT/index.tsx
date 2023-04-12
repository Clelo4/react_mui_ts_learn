import { Box, Button, Divider, Link } from '@mui/material';
import { useNavigate } from 'react-router';
import ReactMarkdown from 'react-markdown';
import OpenAILogo from 'assets/images/OpenAILogo';
import Sidebar from './Sidebar';
import Header from './Header';
import Chat from './Chat';
import TopBar from './TopBar';
import { useState } from 'react';

const borderRadius = '12px';
const marginSize = '20px';
const paddingSize = '20px';
const contentBgColor = 'white';

export default function ChatGPT() {
  const navigate = useNavigate();
  const [sidebarOpen, setSidebarOpen] = useState(false);
  return (
    <Box component="div" sx={{ height: '100%', width: '100%' }}>
      <TopBar
        sx={{
          marginBottom: marginSize,
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
          display: 'flex',
          width: '100%',
          minHeight: '500px',
          height: 'calc(100% - 76px)'
        }}
      >
        <Sidebar
          sx={{
            borderRadius,
            padding: paddingSize
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
          <Header
            sx={{ height: '58px' }}
            onClickMenu={() => {
              setSidebarOpen(!sidebarOpen);
            }}
          ></Header>
          <Divider></Divider>
          <Chat></Chat>
        </Box>
      </Box>
    </Box>
  );
}
