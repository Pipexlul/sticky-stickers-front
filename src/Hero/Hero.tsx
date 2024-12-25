import { Button, Container, Text, Title } from "@mantine/core";

import * as classes from "./Hero.css.ts";

// TODO: Just like in the .css.ts file, think or consult with someone who has better color taste than me
export function Hero() {
  return (
    <div className={classes.root}>
      <Container size="lg">
        <div className={classes.inner}>
          <div className={classes.content}>
            <Title className={classes.title}>
              The{" "}
              <Text
                component="span"
                inherit
                variant="gradient"
                gradient={{ from: "green", to: "blue" }}
              >
                stickiest stickers
              </Text>{" "}
              you can find in this part of Tamriel
            </Title>

            <Text className={classes.description} mt={30}>
              Bottom text bottom text bottom text
            </Text>

            <Button
              variant="gradient"
              gradient={{ from: "green", to: "blue" }}
              size="xl"
              className={classes.control}
              mt={40}
            >
              Get stickers
            </Button>
          </div>
        </div>
      </Container>
    </div>
  );
}
