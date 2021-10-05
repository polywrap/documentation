import React from "react";
import { Box, Container, Grid, Link, Typography, useTheme } from "@mui/material";
import MinihackIcon from "../../static/img/minihacks.png"

export default function Minihacks() {
  const theme = useTheme();

  return (
    <Container maxWidth="lg">
      <Box
        sx={{
          background: "rgba(0,0,0,0.08)",
          border: `1px solid ${theme.palette.primary.main}30`,
          // border: "1px solid rgba(255,255,255,0.1)",
          borderRadius: theme.spacing(4),
          display: "block",
          mixBlendMode: "color-burn",
          overflow: "hidden",
          padding: theme.spacing(4),
          transform: "translateY(0)",
          transition: "all 0.25s ease-in-out",
          backdropFilter: "blur(16px)",
        }}
      >
        <Grid container spacing={6}>
          <Grid item xs={12} sm={3} md={2}>
            <Box 
              sx={{
                [theme.breakpoints.down("sm")]: {
                  p: theme.spacing(5),
                  pb: 0,
                },
              }}
            >
              <img src={MinihackIcon}/>
            </Box>
          </Grid>
          <Grid item xs={12} sm={9} md={10}>
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