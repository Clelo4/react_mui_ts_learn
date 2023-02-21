import { Box, Container, Typography } from "@mui/material";
import React from "react";

export default class ErrorPage extends React.Component {
  render() {
    return (
    <Box
      component="main"
      sx={{
        alignItems: "center",
        display: "flex",
        flexGrow: 1,
        minHeight: "100%",
        marginTop: 5
      }}
    >
      <Container maxWidth="md">
        <Box
          sx={{
            alignItems: 'center',
            display: 'flex',
            flexDirection: 'column'
          }}
        >
          <Typography variant="h1" align="center" color="textPrimary">
            404: The page you are looking for isn’t here
          </Typography>
          <Typography
            variant="subtitle2"
            color="textPrimary"
            align="center"
          >
          You either tried some shady route or you came here by mistake. Whichever it is, try using the navigation
          </Typography>
          <Box
            component="img"
            alt="Image not found"
            src="/images/errorPage.svg"
            sx={{
              marginTop: 5,
              display: 'inline-block',
              maxWidth: '100%',
              width: 560
            }}
          >
            </Box>
        </Box>
      </Container>
    </Box>
    );
  }
}