import '@mantine/core/styles.css';
import {Loader, MantineProvider} from '@mantine/core';
import {Router} from './Router';
import {theme} from './theme';
import {Notifications} from "@mantine/notifications";
import {Suspense} from "react";

export default function App() {
  return (
    <MantineProvider theme={theme}>
      <Notifications/>
      <Suspense fallback={<Loader/>}>
        <Router/>
      </Suspense>
    </MantineProvider>
  );
}
