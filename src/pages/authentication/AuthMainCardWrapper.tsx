import { Box } from '@mui/material';
import React from 'react';
import { styled,  } from '@mui/material/styles';

const MainCard = styled('div')();

export default function AuthMainCardWrapper(props: React.PropsWithChildren) {
  return (
    <MainCard
      // sx={{
      //   maxWidth: { xs: 400, lg: 475 },
      //   margin: { xs: 2.5, md: 3 },
      //   '& > *': {
      //       flexGrow: 1,
      //       flexBasis: '50%'
      //   }
      // }}
      // content={false}
    >
      <Box sx={{ p: { xs: 2, sm: 3, xl: 5 } }}>{props.children}</Box>
    </MainCard>
  )
}
