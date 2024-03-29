import {AppShell, Burger, Group, Skeleton} from '@mantine/core';
import {useDisclosure} from '@mantine/hooks';
import {IconBrandMantine} from '@tabler/icons-react';
import {ColorSchemeToggle} from "@/components/ColorSchemeToggle/ColorSchemeToggle";

export function PageShell({children}: any) {
  const [opened, {toggle}] = useDisclosure();

  return (
    <AppShell
      header={{height: 60}}
      navbar={{width: 300, breakpoint: 'sm', collapsed: {mobile: !opened}}}
      padding="md"
    >
      <AppShell.Header>
        <Group h="100%" px="md" justify={"space-between"}>
          <Group>
            <Burger opened={opened} onClick={toggle} hiddenFrom="sm" size="sm"/>
            <IconBrandMantine size={30}/>
          </Group>
          <ColorSchemeToggle/>
        </Group>
      </AppShell.Header>
      <AppShell.Navbar p="md">
        Navbar
        {Array(15)
          .fill(0)
          .map((_, index) => (
            <Skeleton key={index} h={28} mt="sm" animate={false}/>
          ))}
      </AppShell.Navbar>
      <AppShell.Main>
        {children}
      </AppShell.Main>
    </AppShell>
  );
}
