import {Title, Text, Anchor, Button, Center} from '@mantine/core';
import classes from './Welcome.module.css';
import {notifications} from "@mantine/notifications";

export function Welcome() {
  return (
    <>
      <Title className={classes.title} ta="center" mt={100}>
        Welcome to{' '}
        <Text inherit variant="gradient" component="span" gradient={{from: 'red', to: 'pink'}}>
          Mantine notifications issue
        </Text>
      </Title>
      <Text c="dimmed" ta="center" size="lg" maw={580} mx="auto" mt="xl">
        This starter Vite project includes a minimal setup, if you want to learn more on Mantine +
        Vite integration follow{' '}
        <Anchor href="https://mantine.dev/guides/vite/" size="lg">
          this guide
        </Anchor>
        . To get started edit pages/Home.page.tsx file.
      </Text>
      <Center mt={"xl"}>
        <Button
          variant={"outline"}
          onClick={() =>
            notifications.show({
              title: 'Default notification',
              message: 'Hey there, your code is awesome! 🤥',
            })
          }
        >
          Show notification
        </Button>
      </Center>
    </>
  );
}
