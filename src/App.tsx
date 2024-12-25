import "@mantine/core/styles.css";

import { MantineProvider } from "@mantine/core";
import { RouterProvider } from "react-router";

import router from "./routes/router.tsx";
import { theme } from "./theme";

export default function App() {
  return (
    // TODO: Decide if forced dark mode should be permanent
    <MantineProvider theme={theme} forceColorScheme="dark">
      <RouterProvider router={router} />
    </MantineProvider>
  );
}
