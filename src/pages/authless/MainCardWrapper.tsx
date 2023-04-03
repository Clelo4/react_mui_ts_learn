import { Box } from '@mui/material';
import React from 'react';

import MainCard from 'components/cards/MainCard';
import BackgroundWrapper from './BackgroundWrapper';
import Footer from './Footer';

export default function MainCardWrapper(props: React.PropsWithChildren) {
  return (
    <BackgroundWrapper
      sx={{
        display: 'flex',
        flexDirection: 'column',
        justifyContent: 'space-between',
        alignItems: "stretch",
    }}>
      <Box sx={{ flexGrow: 1, display: 'flex', alignItems: 'center', justifyContent: 'center', }}>
        <MainCard
          sx={{
            maxWidth: { xs: 380, lg: 420 },
          }}
        >
          { props.children }
        </MainCard>
      </Box>
      <Footer sx={{ flexGrow: 0, margin: '20px' }}></Footer>
    </BackgroundWrapper>
  )
}
