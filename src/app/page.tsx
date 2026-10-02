// Must stay a client component: rendered from a Server Component, Chakra's inline
// Emotion <style> tags fail hydration in the static export (React error #418).
'use client';

import {
  Box,
  Container,
  Flex,
  Grid,
  Heading,
  HStack,
  Image,
  Link,
  LinkBox,
  LinkOverlay,
  Stack,
  Text,
} from "@chakra-ui/react";
import { ReactNode } from "react";
import { FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { LuArrowUpRight } from "react-icons/lu";
import { monoLabel } from "../components/mono-label";
import { OverlayName } from "../components/overlay-name";
import { ThemeToggle } from "../components/ui/theme-toggle";

function IndieHackersIcon() {
  return (
    <svg viewBox="0 0 120 120" width="1em" height="1em" fill="currentColor" aria-hidden>
      <path
        fillRule="evenodd"
        d="M0 0h120v120H0zM27 34h12v52H27zM51 34h12v52H51zM63 54h18v12H63zM81 34h12v52H81z"
      />
    </svg>
  );
}

const socials = [
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/alexey-belozerov-660a252b/",
    icon: <FaLinkedin />,
  },
  { label: "X", href: "https://x.com/abelozerov", icon: <FaXTwitter /> },
  { label: "GitHub", href: "https://github.com/abelozerov", icon: <FaGithub /> },
  {
    label: "Indie Hackers",
    href: "https://www.indiehackers.com/abelozerov",
    icon: <IndieHackersIcon />,
  },
];

const perfectPixelStores = [
  {
    label: "Chrome Web Store",
    href: "https://chromewebstore.google.com/detail/perfectpixel-by-welldonec/dkaagdgjmgdmbnecmcefdhjekcoceebi",
    logo: "/chrome-web-store-logo.svg",
  },
  {
    label: "Edge Add-ons",
    href: "https://microsoftedge.microsoft.com/addons/detail/oolfkllppnieaaddmlfgljpboeagcobk",
    logo: "/edge-addons-logo.svg",
  },
  {
    label: "Firefox Add-ons",
    href: "https://addons.mozilla.org/en-US/firefox/addon/perfectpixel/",
    logo: "/firefox-addons-logo.svg",
  },
];

// Newest first
const articles = [
  {
    title: "How I Run A/B Tests in a Chrome Extension (Without Re-Releasing to the Store)",
    href: "https://hackernoon.com/how-i-run-ab-tests-in-a-chrome-extension-without-re-releasing-to-the-store",
    summary:
      "A/B testing for Chrome extensions without store re-releases: remote config, kill switches, variant pinning, GA4 tracking, and an open-source MV3 library.",
    publisher: "HackerNoon",
    date: "2026-08-16",
  },
  {
    title: "Large Files Transfers Between Parts of Chrome Extensions for Manifest V3",
    href: "https://hackernoon.com/large-files-transfers-between-parts-of-chrome-extensions-for-manifest-v3",
    summary:
      "A detailed guide on managing large file transfers in Chrome extensions, addressing the 'message length exceeded maximum allowed length' issue.",
    publisher: "HackerNoon",
    date: "2024-06-07",
  },
  {
    title: "Developing an Easy-to-Use File Structure for an Extensive React Frontend Application",
    href: "https://hackernoon.com/developing-an-easy-to-use-file-structure-for-an-extensive-react-frontend-application",
    summary:
      "A practical approach to organizing file structures in large React applications for better maintainability and scalability.",
    publisher: "HackerNoon",
    date: "2023-09-18",
  },
];

const formatDate = (iso: string) =>
  new Date(iso).toLocaleDateString("en-US", {
    year: "numeric",
    month: "short",
    day: "numeric",
    timeZone: "UTC",
  });

const external = { target: "_blank", rel: "noopener noreferrer" };

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <Box as="section" id={id} aria-labelledby={`${id}-title`} py={{ base: "10", md: "12" }}>
      <Flex align="center" gap="5" mb={{ base: "6", md: "8" }}>
        <Heading
          as="h2"
          id={`${id}-title`}
          fontWeight="750"
          fontStretch="125%"
          fontSize={{ base: "xl", md: "2xl" }}
          letterSpacing="-0.01em"
        >
          {title}
        </Heading>
        <Box flex="1" h="1px" bg="site.rule" />
      </Flex>
      {children}
    </Box>
  );
}

export default function Home() {
  return (
    <Container maxW="68rem" px={{ base: "4", md: "8" }}>
      <Flex as="header" justify="space-between" align="center" py="5">
        <Link
          href="/"
          aria-label="AB, home"
          fontWeight="800"
          fontStretch="125%"
          fontSize="md"
          color="site.ink"
          textDecoration="none"
        >
          AB
        </Link>
        <HStack as="nav" aria-label="Sections" gap={{ base: "4", md: "6" }}>
          {["Projects", "Articles"].map((label) => (
            <Link
              key={label}
              href={`#${label.toLowerCase()}`}
              fontSize="sm"
              fontWeight="500"
              color="site.muted"
              _hover={{ color: "site.ink" }}
            >
              {label}
            </Link>
          ))}
          <ThemeToggle />
        </HStack>
      </Flex>

      <main>
        <Grid
          as="section"
          aria-label="About"
          templateColumns={{ base: "1fr", md: "minmax(0, 7fr) minmax(0, 4fr)" }}
          gap={{ base: "8", md: "16" }}
          alignItems="end"
          pt={{ base: "8", md: "20" }}
          pb={{ base: "6", md: "8" }}
        >
          <Stack gap="0">
            <OverlayName lines={["Alexey", "Belozerov"]} />

            <Text mt={{ base: "8", md: "10" }} fontSize={{ base: "lg", md: "xl" }} fontWeight="650">
              Software Engineer
            </Text>
            <Stack gap="4" mt="3" maxW="36rem" color="site.muted" lineHeight="1.65">
              <Text>
                Hello! I&apos;m Alexey Belozerov, a Software Engineer and digital nomad. I specialize
                in developing web applications using technologies like Next.js, React.js,
                TypeScript, and Chrome Extensions.
              </Text>
              <Text>
                Currently, I serve as a Senior Product Engineer at Pumas-AI, Inc., leading remote
                teams to build modern frontends. I co-founded WellDoneCode and created the popular
                browser extension PerfectPixel, which helps web developers achieve pixel-perfect
                designs.
              </Text>
            </Stack>

            <Flex as="ul" listStyle="none" wrap="wrap" columnGap="6" rowGap="3" mt="8">
              {socials.map(({ label, href, icon }) => (
                <li key={label}>
                  <Link
                    href={href}
                    {...external}
                    gap="2"
                    fontSize="sm"
                    fontWeight="500"
                    color="site.ink"
                    _hover={{ color: "site.accent", textDecoration: "none" }}
                  >
                    <Box as="span" fontSize="md" color="site.muted" css={{ "a:hover &": { color: "inherit" } }}>
                      {icon}
                    </Box>
                    {label}
                  </Link>
                </li>
              ))}
            </Flex>
          </Stack>

          <Image
            src="/profile.jpg"
            alt="Alexey Belozerov"
            w="100%"
            maxW={{ base: "7.5rem", md: "22rem" }}
            justifySelf={{ md: "end" }}
            order={{ base: -1, md: 0 }}
            aspectRatio="3 / 4"
            objectFit="cover"
            objectPosition="50% 30%"
            rounded="md"
          />
        </Grid>

        <Section id="projects" title="Projects">
          <Box
            bg="site.surface"
            borderWidth="1px"
            borderColor="site.rule"
            rounded="lg"
            p={{ base: "5", md: "8" }}
          >
            <Grid
              templateColumns={{ base: "1fr", md: "minmax(0, 1fr) auto" }}
              gap={{ base: "6", md: "12" }}
            >
              <Box>
                <Flex align="center" gap="4">
                  <Image src="/perfectpixel-logo.png" alt="" boxSize="12" rounded="md" />
                  <Box>
                    <Heading as="h3" fontWeight="750" fontStretch="112.5%" fontSize="xl">
                      PerfectPixel
                    </Heading>
                    <Text {...monoLabel} mt="1">
                      Creator and co-owner
                    </Text>
                  </Box>
                </Flex>
                <Text mt="5" maxW="38rem" color="site.muted" lineHeight="1.65">
                  PerfectPixel allows developers and markup designers to put a semi-transparent
                  image overlay over the top of the developed HTML and perform pixel-perfect
                  comparison between them.
                </Text>
              </Box>

              <Box
                borderTopWidth={{ base: "1px", md: "0" }}
                borderLeftWidth={{ base: "0", md: "1px" }}
                borderColor="site.rule"
                pt={{ base: "5", md: "0" }}
                pl={{ base: "0", md: "12" }}
                alignSelf="start"
              >
                <Text
                  fontWeight="800"
                  fontStretch="125%"
                  fontSize={{ base: "3xl", md: "4xl" }}
                  lineHeight="1"
                  letterSpacing="-0.02em"
                >
                  350,000+
                </Text>
                <Text {...monoLabel} mt="2">
                  monthly users
                </Text>
              </Box>
            </Grid>

            <Flex
              mt={{ base: "6", md: "8" }}
              pt="6"
              borderTopWidth="1px"
              borderColor="site.rule"
              wrap="wrap"
              align="center"
              justify="space-between"
              gap="4"
            >
              <Flex as="ul" listStyle="none" wrap="wrap" gap="2" aria-label="Install PerfectPixel">
                {perfectPixelStores.map(({ label, href, logo }) => (
                  <li key={label}>
                    <Link
                      href={href}
                      {...external}
                      gap="2"
                      px="3"
                      py="2"
                      fontSize="sm"
                      fontWeight="500"
                      color="site.ink"
                      borderWidth="1px"
                      borderColor="site.rule"
                      rounded="md"
                      transition="border-color 0.15s"
                      _hover={{ borderColor: "site.accent", textDecoration: "none" }}
                    >
                      <Image src={logo} alt="" boxSize="4" />
                      {label}
                    </Link>
                  </li>
                ))}
              </Flex>
              <Link
                href="https://www.welldonecode.com/perfectpixel/"
                {...external}
                gap="1"
                fontSize="sm"
                fontWeight="600"
                color="site.accent"
                _hover={{ textDecoration: "underline", textUnderlineOffset: "3px" }}
              >
                Visit website <LuArrowUpRight aria-hidden />
              </Link>
            </Flex>
          </Box>
        </Section>

        <Section id="articles" title="Articles">
          <Box as="ul" listStyle="none">
            {articles.map((article) => (
              <LinkBox
                as="li"
                key={article.href}
                display="grid"
                gridTemplateColumns={{ base: "1fr", md: "9rem minmax(0, 1fr) auto" }}
                columnGap="8"
                rowGap="2"
                py={{ base: "5", md: "7" }}
                borderTopWidth="1px"
                borderColor="site.rule"
                css={{
                  "&:last-of-type": { borderBottomWidth: "1px" },
                  "&:hover :is([data-title], [data-arrow])": { color: "site.accent" },
                  _motionSafe: {
                    "&:hover [data-arrow]": { transform: "translate(2px, -2px)" },
                  },
                }}
              >
                <Text {...monoLabel} pt={{ md: "1" }}>
                  <time dateTime={article.date}>{formatDate(article.date)}</time>
                </Text>
                <Box>
                  <Heading
                    as="h3"
                    data-title=""
                    fontWeight="650"
                    fontSize={{ base: "lg", md: "xl" }}
                    lineHeight="1.3"
                    letterSpacing="-0.005em"
                    transition="color 0.15s"
                    textWrap="balance"
                  >
                    <LinkOverlay href={article.href} {...external}>
                      {article.title}
                    </LinkOverlay>
                  </Heading>
                  <Text mt="2" maxW="40rem" color="site.muted" lineHeight="1.6">
                    {article.summary}
                  </Text>
                </Box>
                <Flex {...monoLabel} align="center" gap="1" alignSelf="start" pt={{ md: "1" }}>
                  {article.publisher}
                  <Box as="span" data-arrow="" display="inline-flex" transition="transform 0.15s, color 0.15s">
                    <LuArrowUpRight aria-hidden />
                  </Box>
                </Flex>
              </LinkBox>
            ))}
          </Box>
        </Section>
      </main>

      <Box as="footer" py="10" {...monoLabel}>
        © Alexey Belozerov
      </Box>
    </Container>
  );
}
