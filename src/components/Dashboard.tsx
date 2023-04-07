import React from 'react';

interface DashboardState {
  sideOpen: boolean;
}

export default class Dashboard extends React.Component<{}, DashboardState> {
  constructor(props: {}) {
    super(props);
    this.state = {
      sideOpen: false
    };
  }
  render(): React.ReactNode {
    return <></>;
  }
}
