import { useState }                        from 'react';
import { Burger, Container, Group, Title } from '@mantine/core';
import { useDisclosure }                   from '@mantine/hooks';
import * as classes from './Header.css.ts';

const links = [
  { link: '/home', label: 'Home' },
  { link: '/order', label: 'Order' },
];

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <a
      key={link.label}
      href={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={(event) => {
        event.preventDefault();
        setActive(link.link);
      }}
    >
      {link.label}
    </a>
  ));

  return (
    <header className={classes.header}>
      <Container size="md" className={classes.inner}>
        <Title>Sticky Stickers lol</Title>
        <Group gap={5} visibleFrom="xs">
          {items}
        </Group>

        {/*TODO: Add proper responsive menu*/}
        <Burger opened={opened} onClick={toggle} hiddenFrom="xs" size="sm" />
      </Container>
    </header>
  );
}