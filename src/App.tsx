import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";

import { Hero } from "./Hero/Hero.tsx";
import { Header } from "./Layout/Header/Header.tsx";
import { theme } from "./theme";

export default function App() {
  return (
    // TODO: Decide if forced dark mode should be permanent
    <MantineProvider theme={theme} forceColorScheme="dark">
      <Header />
      <Hero />
    </MantineProvider>
  );
}
