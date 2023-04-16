import React from 'react';

export default function Account() {
  if (+new Date() > 0) throw new Error('123');
  return <React.Fragment>AAA</React.Fragment>;
}
