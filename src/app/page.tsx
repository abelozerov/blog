'use client';

import {
  Box,
  Container,
  Flex,
  Heading,
  IconButton,
  Image,
  Link,
  SimpleGrid,
  Stack,
  Text,
  VStack,
  useColorMode,
  useColorModeValue,
  Divider,
  HStack,
} from "@chakra-ui/react";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "gray.900");
  const textColor = useColorModeValue("gray.800", "white");
  const cardBgColor = useColorModeValue("white", "gray.800");
  const cardTextColor = useColorModeValue("gray.800", "white");
  const indieHackersFilter = useColorModeValue("invert(100%)", "invert(0%)");

  return (
    <Box bg={bgColor} color={textColor} minH="100vh" py={10}>
      <Container maxW="container.lg">
        <Flex justify="flex-end" mb={4}>
          <IconButton
            aria-label="Toggle dark mode"
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
            variant="ghost"
          />
        </Flex>
        <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
          <VStack spacing={4} align={{ base: "center", md: "flex-start" }}>
            <Heading as="h1" size="2xl" mb={2}>
              Alexey Belozerov
            </Heading>
            <Text fontSize="xl" fontWeight="bold" mb={2}>
              Senior Product Engineer
            </Text>
            <Text fontSize="md" lineHeight="tall">
              Hello! I&apos;m Alexey Belozerov, a Senior Product Engineer and digital nomad. I specialize in developing web applications using technologies like Next.js, React.js, TypeScript, and Chrome Extensions.
              <br/><br/>
              Currently, I serve as a Senior Product Engineer at Pumas-AI, Inc., leading remote teams to build modern frontends. I co-founded WellDoneCode and created the popular browser extension PerfectPixel, which helps web developers achieve pixel-perfect designs.
            </Text>
            <HStack spacing={4}>
              <Link href="https://www.linkedin.com/in/alexey-belozerov-660a252b/" isExternal>
                <IconButton
                  aria-label="LinkedIn"
                  icon={<FaLinkedin />}
                  size="lg"
                  variant="ghost"
                />
              </Link>
              <Link href="https://x.com/abelozerov" isExternal>
                <IconButton aria-label="Twitter" icon={<FaTwitter />} size="lg" variant="ghost" />
              </Link>
              <Link href="https://github.com/abelozerov" isExternal>
                <IconButton aria-label="GitHub" icon={<FaGithub />} size="lg" variant="ghost" />
              </Link>
              <Link href="https://www.indiehackers.com/abelozerov" isExternal>
                <IconButton
                  aria-label="Indie Hackers"
                  icon={<Image src="/indie-hackers-icon.svg" alt="Indie Hackers Icon" boxSize="20px" filter={indieHackersFilter} />}
                  size="lg"
                  variant="ghost"
                />
              </Link>
            </HStack>
          </VStack>
          <Box>
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
          </Box>
        </SimpleGrid>

        <Divider my={10} />

        <Box textAlign="left">
          <Heading as="h2" size="lg" mb={4}>
            Projects
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
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
                <Link href="https://www.welldonecode.com/perfectpixel/" isExternal>
                  <Heading as="h3" size="md" _hover={{ textDecoration: "underline" }}>
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
                  isExternal
                >
                  Learn More
                </Link>
                <Flex align="center">
                  <Image src="/chrome-web-store-logo.svg" alt="Chrome Web Store Logo" boxSize="24px" mr={2} />
                  <Link
                    href="https://chromewebstore.google.com/detail/perfectpixel-by-welldonec/dkaagdgjmgdmbnecmcefdhjekcoceebi"
                    color="teal.500"
                    isExternal
                  >
                    Chrome Web Store
                  </Link>
                </Flex>
              </Flex>
            </Box>
            {/* Add more projects as needed */}
          </SimpleGrid>
        </Box>

        <Divider my={10} />

        <Box textAlign="left">
          <Heading as="h2" size="lg" mb={4}>
            Articles
          </Heading>
          <SimpleGrid columns={[1, null, 2]} spacing={10}>
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
                <Link href="https://hackernoon.com/large-files-transfers-between-parts-of-chrome-extensions-for-manifest-v3" isExternal>
                  <Heading as="h3" size="md" _hover={{ textDecoration: "underline" }}>
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
                <Link href="https://hackernoon.com/developing-an-easy-to-use-file-structure-for-an-extensive-react-frontend-application" isExternal>
                  <Heading as="h3" size="md" _hover={{ textDecoration: "underline" }}>
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

        <Divider my={10} />

        <Box textAlign="left">
          <Heading as="h2" size="lg" mb={4}>
            Academic Articles
          </Heading>
          <VStack spacing={4}>
            <Box
              p={5}
              shadow="md"
              borderWidth="1px"
              borderRadius="md"
              bg={cardBgColor}
              color={cardTextColor}
              border="none"
              w="full"
            >
              <Heading as="h3" size="md">
                Modern ways for optimizing web page loading: from HTTP/2 to HTTP/3
              </Heading>
              <Text mt={2}>Paper Id: IJ-1906240236</Text>
            </Box>
          </VStack>
        </Box>
      </Container>
    </Box>
  );
}
