'use client';

import {
  Box,
  ClientOnly,
  Container,
  Flex,
  Heading,
  HStack,
  IconButton,
  Image,
  Link,
  Separator,
  SimpleGrid,
  Skeleton,
  Text,
  VStack,
} from "@chakra-ui/react";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { LuMoon, LuSun } from "react-icons/lu";
import { useColorMode } from "../components/ui/color-mode";

const bgColor = { base: "gray.50", _dark: "gray.900" };
const textColor = { base: "gray.800", _dark: "white" };
const cardBgColor = { base: "white", _dark: "gray.800" };
const cardTextColor = { base: "gray.800", _dark: "white" };
const indieHackersFilter = { base: "invert(100%)", _dark: "invert(0%)" };

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();

  return (
    <Box bg={bgColor} color={textColor} minH="100vh" py={10}>
      <Container maxW="5xl" py={10}>
        <Box position="relative">
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={10}>
            <VStack gap={4} align={{ base: "center", md: "flex-start" }}>
              <Heading as="h1" size={{ base: "4xl", md: "5xl" }} mb={2}>
                Alexey Belozerov
              </Heading>
              <Text fontSize="xl" fontWeight="bold" mb={2}>
                Software Engineer
              </Text>
              <Text fontSize="md" lineHeight="tall">
                Hello! I&apos;m Alexey Belozerov, a Software Engineer and digital nomad. I specialize in developing web applications using technologies like Next.js, React.js, TypeScript, and Chrome Extensions.
                <br/><br/>
                Currently, I serve as a Senior Product Engineer at Pumas-AI, Inc., leading remote teams to build modern frontends. I co-founded WellDoneCode and created the popular browser extension PerfectPixel, which helps web developers achieve pixel-perfect designs.
              </Text>
              <HStack gap={4}>
                <IconButton asChild aria-label="LinkedIn" size="lg" variant="ghost">
                  <a
                    href="https://www.linkedin.com/in/alexey-belozerov-660a252b/"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <FaLinkedin />
                  </a>
                </IconButton>
                <IconButton asChild aria-label="Twitter" size="lg" variant="ghost">
                  <a href="https://x.com/abelozerov" target="_blank" rel="noopener noreferrer">
                    <FaTwitter />
                  </a>
                </IconButton>
                <IconButton asChild aria-label="GitHub" size="lg" variant="ghost">
                  <a href="https://github.com/abelozerov" target="_blank" rel="noopener noreferrer">
                    <FaGithub />
                  </a>
                </IconButton>
                <IconButton asChild aria-label="Indie Hackers" size="lg" variant="ghost">
                  <a
                    href="https://www.indiehackers.com/abelozerov"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    <Image
                      src="/indie-hackers-icon.svg"
                      alt="Indie Hackers Icon"
                      boxSize="20px"
                      filter={indieHackersFilter}
                    />
                  </a>
                </IconButton>
              </HStack>
            </VStack>
            <Box position="relative">
              <Image
                src="/profile.jpg"
                alt="Alexey Belozerov"
                borderRadius="md"
                objectFit="cover"
                w="100%"
                maxW="400px"
                mx="auto"
                boxShadow="lg"
                border="none"
              />
              <ClientOnly
                fallback={
                  <Skeleton boxSize="10" rounded="md" position="absolute" top="10px" left="110%" />
                }
              >
                <IconButton
                  aria-label="Toggle dark mode"
                  onClick={toggleColorMode}
                  variant="ghost"
                  position="absolute"
                  top="10px"
                  left="110%"
                >
                  {colorMode === "light" ? <LuMoon /> : <LuSun />}
                </IconButton>
              </ClientOnly>
            </Box>
          </SimpleGrid>
        </Box>

        <Separator my={10} />

        <Box textAlign="left">
          <Heading as="h2" size={{ base: "2xl", md: "3xl" }} mb={4}>
            Projects
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={10}>
            <Box
              p={5}
              shadow="md"
              borderWidth="1px"
              borderRadius="md"
              bg={cardBgColor}
              color={cardTextColor}
              border="none"
            >
              <Flex align="center">
                <Image src="/perfectpixel-logo.png" alt="PerfectPixel Logo" boxSize="50px" mr={4} />
                <Link
                  href="https://www.welldonecode.com/perfectpixel/"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Heading as="h3" size="xl" _hover={{ textDecoration: "underline" }}>
                    PerfectPixel
                  </Heading>
                </Link>
              </Flex>
              <Text mt={2}>
                PerfectPixel allows developers and markup designers to put a semi-transparent
                image overlay over the top of the developed HTML and perform pixel-perfect
                comparison between them.
              </Text>
              <Text mt={2} fontStyle="italic">
                Role: Creator and Co-owner
              </Text>
              <Text mt={2} color="gray.500">
                350,000+ monthly users
              </Text>
              <Flex mt={2} justify="space-between" align="center">
                <Link
                  href="https://www.welldonecode.com/perfectpixel/"
                  color="teal.500"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  Learn More
                </Link>
                <Flex align="center">
                  <Image src="/chrome-web-store-logo.svg" alt="Chrome Web Store Logo" boxSize="24px" mr={2} />
                  <Link
                    href="https://chromewebstore.google.com/detail/perfectpixel-by-welldonec/dkaagdgjmgdmbnecmcefdhjekcoceebi"
                    color="teal.500"
                    target="_blank"
                    rel="noopener noreferrer"
                  >
                    Chrome Web Store
                  </Link>
                </Flex>
              </Flex>
            </Box>
            {/* Add more projects as needed */}
          </SimpleGrid>
        </Box>

        <Separator my={10} />

        <Box textAlign="left">
          <Heading as="h2" size={{ base: "2xl", md: "3xl" }} mb={4}>
            Articles
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} gap={10}>
            <Box
              p={5}
              shadow="md"
              borderWidth="1px"
              borderRadius="md"
              bg={cardBgColor}
              color={cardTextColor}
              border="none"
            >
              <Flex align="center">
                <Image src="/ab-tests-chrome-extension.jpeg" alt="A/B Tests in a Chrome Extension" boxSize="50px" mr={4} />
                <Link
                  href="https://hackernoon.com/how-i-run-ab-tests-in-a-chrome-extension-without-re-releasing-to-the-store"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Heading as="h3" size="xl" _hover={{ textDecoration: "underline" }}>
                    How I Run A/B Tests in a Chrome Extension (Without Re-Releasing to the Store)
                  </Heading>
                </Link>
              </Flex>
              <Text mt={2}>
                A/B testing for Chrome extensions without store re-releases: remote config, kill switches, variant pinning, GA4 tracking, and an open-source MV3 library.
              </Text>
              <Text mt={1} color="gray.500" fontSize="sm">
                Published on HackerNoon, August 16, 2026
              </Text>
            </Box>
            <Box
              p={5}
              shadow="md"
              borderWidth="1px"
              borderRadius="md"
              bg={cardBgColor}
              color={cardTextColor}
              border="none"
            >
              <Flex align="center">
                <Image src="/large-files-transfers.jpeg" alt="Large Files Transfers" boxSize="50px" mr={4} />
                <Link
                  href="https://hackernoon.com/large-files-transfers-between-parts-of-chrome-extensions-for-manifest-v3"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Heading as="h3" size="xl" _hover={{ textDecoration: "underline" }}>
                    Large Files Transfers Between Parts of Chrome Extensions for Manifest V3
                  </Heading>
                </Link>
              </Flex>
              <Text mt={2}>
                A detailed guide on managing large file transfers in Chrome extensions, addressing the &apos;message length exceeded maximum allowed length&apos; issue.
              </Text>
              <Text mt={1} color="gray.500" fontSize="sm">
                Published on HackerNoon, June 7, 2024
              </Text>
            </Box>
            <Box
              p={5}
              shadow="md"
              borderWidth="1px"
              borderRadius="md"
              bg={cardBgColor}
              color={cardTextColor}
              border="none"
            >
              <Flex align="center">
                <Image src="/react-file-structure.jpeg" alt="React File Structure" boxSize="50px" mr={4} />
                <Link
                  href="https://hackernoon.com/developing-an-easy-to-use-file-structure-for-an-extensive-react-frontend-application"
                  target="_blank"
                  rel="noopener noreferrer"
                >
                  <Heading as="h3" size="xl" _hover={{ textDecoration: "underline" }}>
                    Developing an Easy-to-Use File Structure for an Extensive React Frontend Application
                  </Heading>
                </Link>
              </Flex>
              <Text mt={2}>
                A practical approach to organizing file structures in large React applications for better maintainability and scalability.
              </Text>
              <Text mt={1} color="gray.500" fontSize="sm">
                Published on HackerNoon, September 18, 2023
              </Text>
            </Box>
            {/* Add more articles as needed */}
          </SimpleGrid>
        </Box>
      </Container>
    </Box>
  );
}
