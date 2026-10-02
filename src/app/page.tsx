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
import { FaEnvelope, FaGithub, FaLinkedin } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";
import { caption } from "../components/caption";
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
  { label: "Email", href: "mailto:alex@welldonecode.com", icon: <FaEnvelope /> },
  {
    label: "LinkedIn",
    href: "https://www.linkedin.com/in/alexey-belozerov-660a252b/",
    icon: <FaLinkedin />,
  },
  { label: "GitHub", href: "https://github.com/abelozerov", icon: <FaGithub /> },
  { label: "X", href: "https://x.com/abelozerov", icon: <FaXTwitter /> },
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

// Section ids and nav labels come from one place so the anchors can't drift.
const sections = {
  projects: { id: "projects", title: "Projects" },
  articles: { id: "articles", title: "Articles" },
};

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

const perfectPixelUrl = "https://www.welldonecode.com/perfectpixel/";

// Running text width: keeps lines under ~80 characters.
const measure = "34rem";

function Section({ id, title, children }: { id: string; title: string; children: ReactNode }) {
  return (
    <Box as="section" id={id} aria-labelledby={`${id}-title`} py={{ base: "8", md: "10" }}>
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
        <HStack gap={{ base: "4", md: "6" }}>
          <HStack as="nav" aria-label="Sections" gap={{ base: "4", md: "6" }}>
            {Object.values(sections).map(({ id, title }) => (
              <Link
                key={id}
                href={`#${id}`}
                fontSize="sm"
                fontWeight="500"
                color="site.muted"
                _hover={{ color: "site.ink" }}
              >
                {title}
              </Link>
            ))}
          </HStack>
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
          pt={{ base: "8", md: "12" }}
          pb={{ base: "6", md: "8" }}
        >
          <Stack gap="0">
            <OverlayName lines={["Alexey", "Belozerov"]} />

            <Text mt="8" fontSize={{ base: "lg", md: "xl" }} fontWeight="650">
              Software Engineer
            </Text>
            <Stack gap="4" mt="3" maxW={measure} color="site.muted" lineHeight="1.65">
              <Text>
                Hello! I&apos;m Alexey Belozerov, a Software Engineer and digital nomad. I specialize
                in developing web applications using technologies like Next.js, React.js,
                TypeScript, and Chrome Extensions. I also work on AI: MCP, agents, agent
                harnesses, and skills.
              </Text>
              <Text>
                I&apos;m a Senior Product Engineer at Pumas-AI, where I lead the remote team behind
                one of the company&apos;s products, owning its roadmap and releases and working with
                client-facing scientists to understand what users need. I co-founded WellDoneCode
                and created the popular browser extension PerfectPixel, which helps web developers
                achieve pixel-perfect designs.
              </Text>
            </Stack>

            <Flex as="ul" listStyle="none" wrap="wrap" columnGap="6" rowGap="3" mt="8">
              {socials.map(({ label, href, icon }) => (
                <li key={label}>
                  <Link
                    href={href}
                    {...(href.startsWith("mailto:") ? {} : external)}
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

        <Section {...sections.projects}>
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
                      <Link
                        href={perfectPixelUrl}
                        {...external}
                        color="inherit"
                        _hover={{ color: "site.accent", textDecoration: "none" }}
                      >
                        PerfectPixel
                      </Link>
                    </Heading>
                    <Text {...caption} mt="1">
                      Creator and lead developer
                    </Text>
                  </Box>
                </Flex>
                <Text mt="5" maxW={measure} color="site.muted" lineHeight="1.65">
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
                  fontSize="4xl"
                  lineHeight="1"
                  letterSpacing="-0.02em"
                >
                  350,000+
                </Text>
                <Text {...caption} mt="2">
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
                href={perfectPixelUrl}
                {...external}
                fontSize="sm"
                fontWeight="600"
                color="site.accent"
                _hover={{ textDecoration: "underline", textUnderlineOffset: "3px" }}
              >
                Visit website
              </Link>
            </Flex>
          </Box>
        </Section>

        <Section {...sections.articles}>
          {/* A stacked list on small screens; side-by-side columns across the full width on desktop */}
          <Grid
            as="ul"
            listStyle="none"
            templateColumns={{ base: "1fr", lg: "repeat(3, minmax(0, 1fr))" }}
            columnGap="10"
            rowGap={{ base: "0", lg: "10" }}
          >
            {articles.map((article) => (
              <LinkBox
                as="li"
                key={article.href}
                py={{ base: "5", lg: "0" }}
                borderColor="site.rule"
                css={{
                  "&:first-of-type": { pt: "0" },
                  "&:not(:first-of-type)": { borderTopWidth: { base: "1px", lg: "0" } },
                  "&:hover [data-title]": { color: "site.accent" },
                }}
              >
                <Flex {...caption} columnGap="3" wrap="wrap">
                  <time dateTime={article.date}>{formatDate(article.date)}</time>
                  <span>{article.publisher}</span>
                </Flex>
                <Heading
                  as="h3"
                  data-title=""
                  mt="2"
                  maxW={measure}
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
                <Text mt="2" maxW={measure} color="site.muted" lineHeight="1.6">
                  {article.summary}
                </Text>
              </LinkBox>
            ))}
          </Grid>
        </Section>
      </main>

      <Box as="footer" py="8" {...caption}>
        © Alexey Belozerov
      </Box>
    </Container>
  );
}
