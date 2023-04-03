import { } from "@mui/material";
import React from "react";
import {
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
      <Outlet></Outlet>
    );
  }
}