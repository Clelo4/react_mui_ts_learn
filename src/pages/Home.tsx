import { Button } from "@mui/material";
import React from "react";
import {
  Link,
  Outlet,
} from 'react-router-dom';
import { logout } from "../utils/api";

export default class Home extends React.Component<{}> {
  constructor(props: {}) {
    super(props);
    this.logout = this.logout.bind(this);
  }

  async logout() {
    await logout();
  }

  render(): React.ReactNode {
    return  (
      <>
      <div>Hello World!<Outlet />
        <div>
          <Link to="/signin">login</Link>
        </div>
        <div>
          <Link to="/signup">sign up</Link>
        </div>
        <Button onClick={this.logout}>登出</Button>
      </div>
      </>
    );
  }
}