"use client";

import React from "react";

import {
  Arrow,
  Button,
  Flex,
  Grid,
  Heading,
  Icon,
  InlineCode,
  LetterFx,
  Text,
} from "@/once-ui/components";
import Link from "next/link";
import { social } from "@/once-ui/resources/config";

export default function Home() {
  const links = [
    {
      href: "https://github.com/Visual-Code-Space/Visual-Code-Space",
      title: "Visual Code Space",
      description: "A Modern Code Editor for Android.",
    },
    {
      href: "https://github.com/Visual-Code-Space/AndroidIDE",
      title: "AndrodIDE (Fork)",
      description:
        "AndroidIDE is an IDE for Android to develop full featured Android apps.",
    },
  ];

  return (
    <Flex
      fillWidth
      paddingTop="l"
      paddingX="l"
      direction="column"
      alignItems="center"
      flex={1}
    >
      <Flex
        position="relative"
        as="section"
        overflow="hidden"
        fillWidth
        minHeight="0"
        maxWidth={68}
        direction="column"
        alignItems="center"
        flex={1}
      >
        <Flex
          as="main"
          direction="column"
          justifyContent="center"
          fillWidth
          fillHeight
          padding="l"
          gap="l"
        >
          <Flex mobileDirection="column" fillWidth gap="24">
            <Flex
              position="relative"
              flex={4}
              gap="24"
              marginBottom="104"
              direction="column"
            >
              <InlineCode
                className="shadow-m"
                style={{
                  width: "fit-content",
                  padding: "var(--static-space-8) var(--static-space-16)",
                  backdropFilter: "blur(var(--static-space-1))",
                }}
              >
                The editor for the futue of{" "}
                <span className="brand-on-background-medium">code</span>
              </InlineCode>
              <Heading wrap="balance" variant="display-strong-s">
                <span className="font-code">
                  <LetterFx trigger="instant">
                    Create, Customize, Collaborate - All in One Space
                  </LetterFx>
                </span>
              </Heading>
              <Button
                id="openGitHub"
                prefixIcon="github"
                href="https://github.com/Visual-Code-Space"
                variant="secondary"
              >
                <Flex alignItems="center">
                  GitHub
                  <Arrow trigger="#openGitHub" />
                </Flex>
              </Button>
            </Flex>
          </Flex>
          <Grid
            radius="l"
            border="neutral-medium"
            borderStyle="solid-1"
            columns="repeat(2, 1fr)"
            tabletColumns="1col"
            mobileColumns="1col"
            fillWidth
          >
            {links.map((link) => (
              <Link
                target="_blank"
                style={{ padding: "var(--responsive-space-l)" }}
                key={link.href}
                href={link.href}
              >
                <Flex fillWidth paddingY="8" gap="8" direction="column">
                  <Flex fillWidth gap="12" alignItems="center">
                    <Text variant="body-strong-m" onBackground="neutral-strong">
                      {link.title}
                    </Text>
                    <Icon size="s" name="arrowUpRight" />
                  </Flex>
                  <Text variant="body-default-s" onBackground="neutral-weak">
                    {link.description}
                  </Text>
                </Flex>
              </Link>
            ))}
          </Grid>
        </Flex>
      </Flex>
      <Flex
        as="footer"
        position="relative"
        fillWidth
        paddingX="l"
        paddingY="m"
        justifyContent="space-between"
      >
        <Text variant="body-default-s" onBackground="neutral-weak">
          © 2023~2024 Visual Code Space,{" "}
          <Link href="https://github.com/teixeira0x/visual-code-space.github.io#GPL-3.0-1-ov-file">
            GPL-3.0 License
          </Link>
        </Text>
        <Flex gap="12">
          <Button
            href="https://github.com/Visual-Code-Space"
            prefixIcon="github"
            size="s"
            variant="tertiary"
          >
            GitHub
          </Button>
          <Button
            href={social.telegram}
            prefixIcon="telegram"
            size="s"
            variant="tertiary"
          >
            Telegram
          </Button>
        </Flex>
      </Flex>
    </Flex>
  );
}
