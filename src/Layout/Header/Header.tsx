import { Box, Burger, Container, Group, Title } from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import { useState } from "react";
import { Link } from "react-router";
import * as classes from "./Header.css.ts";

const links = [
  { link: "/", label: "Home" },
  { link: "/order", label: "Order" },
];

export function Header() {
  const [opened, { toggle }] = useDisclosure(false);
  const [active, setActive] = useState(links[0].link);

  const items = links.map((link) => (
    <Box
      key={link.label}
      component={Link}
      to={link.link}
      className={classes.link}
      data-active={active === link.link || undefined}
      onClick={() => {
        setActive(link.link);
      }}
    >
      {link.label}
    </Box>
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
