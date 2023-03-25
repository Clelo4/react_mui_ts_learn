import { LinearProgress } from "@mui/material";
import { Box } from "@mui/material";
import { Suspense } from "react";
import { lazy } from 'react';

type GetReturnType<Type> = Type extends (...args: never[]) => infer Return
  ? Return
  : never;

function Loader() {
  return (
    <Box
      component="div"  
      sx={{ 
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        zIndex: 1301,
      }}
    >
      <LinearProgress color="primary"/>
    </Box>
  )
}

const Loadable = function(Component: GetReturnType<typeof lazy>) {
  return function LoaderWrapper() {
    return (
      <Suspense fallback={<Loader />}>
        <Component></Component>
      </Suspense>
    );
  }
};


export default Loadable;