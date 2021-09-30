import React from "react";
import Layout from "@theme/Layout";
import Showcase from "../components/Showcase";
import Minihacks from "../components/Minihacks";
import AdditionalLinks from "../components/AdditionalLinks";
import { theme } from "../theme";
import { ThemeProvider } from "@mui/material";

export default function Home() {
  return (
    <ThemeProvider theme={theme}>
      <Layout>
        <Showcase/>
        <Minihacks/>
        <AdditionalLinks/>
      </Layout>
    </ThemeProvider>
  );
}