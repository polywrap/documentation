import React from "react";
import Link from "@docusaurus/Link";
import SearchBar from "../theme/SearchBar";
import { makeStyles } from "@mui/styles";
import { Box, Container, Grid, Typography, useTheme } from "@mui/material";
import BackgroundPolywrap from "../../static/img/polywrapper-hero-blurred.png"
import useThemeContext from '@theme/hooks/useThemeContext';

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
    description: "Create a wrapper and learn in detail what makes integrating with Polywrap so special!",
    cta: "Get started",
    link: "/getting-started/what-is-polywrap"
  },
  {
    title: "Advanced",
    description: "Learn about the advanced concepts of Polywrap, including build pipeline and URI redirects.",
    cta: "Learn more",
    link: "/advanced/build-pipeline"
  },
  {
    title: "Guides",
    description: "Start building! If you want to build your own wrapper, our guides will walk you through.",
    cta: "Start building",
    link: "/guides/create-as-wrapper/project-setup"
  },
];

export default function Showcase() {
  const theme = useTheme();
  const classes = useStyles(theme);
  const {isDarkTheme} = useThemeContext();

  return (
    <Box mt={12} marginBottom={6} position="relative" zIndex={0}>
      <Box
        sx={{
          position: "absolute",
          left: "-15vw",
          maxWidth: theme.breakpoints.values.xl,
          mixBlendMode: "overlay",
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
        <Box 
          sx={{
            display: "flex",
            justifyContent: "center",
            mt: theme.spacing(4),
            width: "100%",
            "& .navbar__search": {
              pl: 0,
            },
          }}
        >
          <SearchBar />
        </Box>
        <Grid container spacing={4} mt={4}>
          {showcaseCards.map((card) => {
            return (
              <Grid item xs={12} sm={4} key={card.title}>
                <Link href={card.link} className={classes.root}>
                  <Box
                    sx={{
                      background: "rgba(255,255,255,0.05)",
                      border: `1px solid rgba(${isDarkTheme ? "255,255,255" : "0,0,0"},0.1)`,
                      borderRadius: theme.spacing(4),
                      boxShadow: "0 8px 16px rgba(0,0,0,0.02), 0 16px 32px rgba(0,0,0,0.1)",
                      display: "block",
                      overflow: "hidden",
                      padding: theme.spacing(4),
                      transform: "translateY(0)",
                      transition: "all 0.25s ease-in-out",
                      backdropFilter: "blur(16px)",
                      "[data-theme=light] &": {
                        border: "1px solid rgba(0,0,0,0.1)",
                      },
                      "&:hover": {
                        background: "rgba(255,255,255,0.08)",
                        border: "1px solid rgba(255,255,255,0.25)",
                        boxShadow: "0 8px 16px rgba(0,0,0,0.05), 0 16px 64px rgba(0,0,0,0.2)",
                        transform: "translateY(-1%)",
                        "& .card-shine": {
                          transition: "transform 0.5s ease-in-out",
                          transform: "rotate(-49deg) translate(0,-40%)",
                        },
                        "& .card-link": {
                          textDecoration: "underline",
                        },
                      },
                    }}
                  >
                    <Box
                      className="card-shine"
                      sx={{
                        position: "absolute",
                        background: "white",
                        opacity: 0.03,
                        width: "200%",
                        height: "200%",
                        transform: "rotate(-49deg) translate(0,75%)",
                        transformOrigin: "30% center",
                        transition: "transform 0"
                      }}
                    />
                    <Typography variant="h5" component="h3" fontWeight="800">
                      {card.title}
                    </Typography>
                    <Box mt={1} color={"var(--ifm-heading-color)"}>
                      <Typography variant="body1">
                        {card.description}
                      </Typography>
                    </Box>
                    <Box mt={1}>
                      <Typography variant="body1" fontWeight="800" className="card-link">
                        {card.cta} &#8250;
                      </Typography>
                    </Box>
                  </Box>
                </Link>
              </Grid>
            )
          })}
        </Grid>
      </Container>
    </Box>
  );
} 