import React from "react";
import { theme } from "../theme";
import { Box, Container, Grid, Link, Typography } from "@mui/material";
import MinihackIcon from "../../static/img/minihacks.png"

export default function Minihacks() {

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          background: "rgba(0,0,0,0.25)",
          border: "1px solid rgba(0,0,0,0.1)",
          borderRadius: theme.spacing(4),
          display: "block",
          overflow: "hidden",
          padding: theme.spacing(4),
          transform: "translateY(0)",
          transition: "all 0.25s ease-in-out",
          backdropFilter: "blur(16px)",
        }}
      >
        <Grid container spacing={6}>
          <Grid item xs={12} sm={2}>
            <img src={MinihackIcon}/>
          </Grid>
          <Grid item xs={12} sm={10}>
            <Typography variant="h4" component="h3" fontWeight="800">
              Polywrap Minihack Submissions are Open!
            </Typography>
            <Box mt={2}>
              <Typography variant="body1" color="textPrimary">
                Minihacks are quarterly events through which the Polywrap DAO distributes tokens for retroactive contributions. Any person who publishes a contribution through a github issue will be eligible to earn a fraction of the WRAP tokens that have been allocated for each period.
              </Typography>
            </Box>
            <Box mt={1}>
              <Link href="https://github.com/polywrap/mini-hacks" target="_blank" rel="noredirect" underline="hover">
                Join now &#8250;
              </Link>
            </Box>
          </Grid>
        </Grid>
      </Box>
    </Container>
  );
} 