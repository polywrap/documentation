import React from "react";
import Link from "@docusaurus/Link";
import { makeStyles } from "@mui/styles";
import { Box, Typography, useTheme } from "@mui/material";
import GitHubIcon from '@mui/icons-material/GitHub';
import { useColorMode } from '@docusaurus/theme-common';

const useStyles = makeStyles(() => ({
  root: {
    "&:hover": {
      textDecoration: "none",
    },
  },
}));

const developerLinks = [
  {
    title: "> polywrap",
    description: "Command Line Interface",
    link: "/reference/cli/polywrap-cli"
  },
  {
    title: "@polywrap/client-js",
    description: "JavaScript Client",
    link: "/reference/clients/js/client-js"
  },
  {
    title: "Rust-client",
    description: "Rust Client",
    link: "https://github.com/polywrap/rust-client"
  },
  {
    title: "Python-client",
    description: "Python Client",
    link: "https://github.com/polywrap/python-client"
  }
];

export default function DeveloperLinks() {
  const theme = useTheme();
  const classes = useStyles(theme);
  const { colorMode } = useColorMode();
  const isDarkTheme = colorMode === "dark";

  return (<>
    {developerLinks.map((card, index) => {
      return (
        <Box key={card.title} marginTop={index === 0 ? 4 : 2}>
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
                "&:hover": {
                  border: "1px solid rgba(255,255,255,0.25)",
                  boxShadow: "0 8px 16px rgba(0,0,0,0.05), 0 16px 64px rgba(0,0,0,0.2)",
                  transform: "translateY(-1%)",
                  "& .card-link": {
                    textDecoration: "underline",
                  },
                },
              }}
            >
              <Box display="flex" alignItems="center">
                <Box mr={2} width={24} height={24}>
                  <Typography color={"var(--ifm-heading-color)"}>
                    <GitHubIcon />
                  </Typography>
                </Box>
                <Typography variant="h5" component="h3" fontWeight="800">
                  {card.title}
                </Typography>
              </Box>
              <Box mt={1}>
                <Typography variant="body1" color={"var(--ifm-heading-color)"}>
                  {card.description}
                </Typography>
              </Box>
            </Box>
          </Link>
        </Box>
      )
    })}
  </>);
} 