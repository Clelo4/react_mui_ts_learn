import { LinearProgress } from "@mui/material";
import { Suspense } from "react";
import { lazy } from 'react';
import React from 'react';

type GetPropsType<T> = T extends React.ComponentType<infer Props> ? Props extends {} ? Props : {} : {};

const Loadable = function<T extends React.ComponentType<any>>(...lazyParameters: Parameters<typeof lazy<T>>) {
  const WrappedComponent = lazy(...lazyParameters);
  return function LazyLoader(props: GetPropsType<T>) {
    return (
      <Suspense fallback={
        <LinearProgress
          color="primary" 
          sx={{
            position: 'fixed',
            top: 0,
            left: 0,
            width: '100%',
            zIndex: 1301,
          }}
        />
      }>
        <WrappedComponent {...props}></WrappedComponent>
      </Suspense>
    );
  }
}

export default Loadable;
