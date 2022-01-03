import React from "react";
import { makeStyles } from "@mui/styles";
import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import CardLink from "./CardLink";
import BackgroundPolywrap from "../../static/img/polywrapper-hero-blurred.png";
import useThemeContext from "@theme/hooks/useThemeContext";

const useStyles = makeStyles(() => ({
  root: {
    "&:hover": {
      textDecoration: "none",
    },
  },
}));

const showcaseCards = [
  {
    title: "Get Started",
    description:
      "Create a wrapper and learn in detail what makes integrating with Polywrap so special!",
    cta: "Get started",
    link: "/getting-started/what-is-polywrap",
  },
  {
    title: "Guides",
    description:
      "Start building! Our guides will walk you through how to build your own wrappers or integrate other ones into your dApp",
    cta: "Start building",
    link: "/guides/create-as-wrapper/project-setup",
  },
  {
    title: "Advanced",
    description:
      "Learn about the advanced concepts of Polywrap, including build pipeline configuration and URI redirects.",
    cta: "Learn more",
    link: "/advanced/build-pipeline",
  },
];

export default function Showcase() {
  const theme = useTheme();
  const classes = useStyles(theme);
  const { isDarkTheme } = useThemeContext();

  return (
    <Box mt={12} marginBottom={6} position="relative" zIndex={0}>
      <Box
        sx={{
          position: "absolute",
          left: "-15vw",
          maxWidth: theme.breakpoints.values.xl,
          opacity: 0.15,
          overflow: "hidden",
          top: "-30vh",
          zIndex: -1,
          "& img": {
            width: "120vw",
          },
        }}
      >
        <img src={BackgroundPolywrap} />
      </Box>
      <Container maxWidth="lg">
        <Typography variant="h2" component="h1" align="center">
          Welcome to Polywrap!
        </Typography>
        <Typography mt={4} variant="h5" align="center">
          Polywrap is a development platform that makes it easy to integrate
          web3 protocols into any application, written in any language.
        </Typography>
        <Grid container spacing={4} mt={4}>
          {showcaseCards.map((card) => {
            return (
              <Grid item xs={12} md={4} key={card.title}>
                <CardLink link={card.link} shine>
                  <Typography variant="h5" component="h3" fontWeight="800">
                    {card.title}
                  </Typography>
                  <Box mt={1} color={"var(--ifm-heading-color)"}>
                    <Typography variant="body1">{card.description}</Typography>
                  </Box>
                  <Box mt={1}>
                    <Typography
                      variant="body1"
                      fontWeight="800"
                      className="card-link"
                    >
                      {card.cta} &#8250;
                    </Typography>
                  </Box>
                </CardLink>
              </Grid>
            );
          })}
        </Grid>
      </Container>
    </Box>
  );
}
