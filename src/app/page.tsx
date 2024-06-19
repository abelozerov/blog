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
} from "@chakra-ui/react";
import { FaLinkedin, FaTwitter, FaGithub } from "react-icons/fa";
import { SunIcon, MoonIcon } from "@chakra-ui/icons";

export default function Home() {
  const { colorMode, toggleColorMode } = useColorMode();
  const bgColor = useColorModeValue("gray.50", "gray.900");
  const textColor = useColorModeValue("gray.800", "white");
  const cardBgColor = useColorModeValue("white", "gray.800");

  return (
    <Box bg={bgColor} color={textColor} minH="100vh" py={10}>
      <Container maxW="container.lg">
        <Flex justify="flex-end" mb={4}>
          <IconButton
            aria-label="Toggle dark mode"
            icon={colorMode === "light" ? <MoonIcon /> : <SunIcon />}
            onClick={toggleColorMode}
          />
        </Flex>
        <Flex direction={{ base: "column", md: "row" }} align="center" mb={10}>
          <Image
            src="/profile.jpg"
            alt="Alexey Belozerov"
            borderRadius="md"
            objectFit="cover"
            w={{ base: "100%", md: "300px" }}
            h={{ base: "auto", md: "300px" }}
            mr={{ base: 0, md: 10 }}
            mb={{ base: 4, md: 0 }}
          />
          <VStack spacing={8} textAlign={{ base: "center", md: "left" }}>
            <Heading as="h1" size="2xl">
              Alexey Belozerov
            </Heading>
            <Text fontSize="xl" fontWeight="bold">
              Senior Product Engineer
            </Text>
            <Text fontSize="md" lineHeight="tall">
              Hello! I'm Alexey Belozerov, a Senior Product Engineer and digital nomad. I specialize in developing web applications using technologies like Next.js, React.js, TypeScript, and Chrome Extensions.
              <br/><br/>
              Currently, I serve as a Senior Product Engineer at Pumas-AI, Inc., leading remote teams to build modern frontends. I co-founded WellDoneCode and created the popular browser extension PerfectPixel, which helps web developers achieve pixel-perfect designs.
            </Text>
          </VStack>
        </Flex>

        <Box w="full" textAlign="left" mt={10}>
          <Heading as="h2" size="lg" mb={4}>
            Projects
          </Heading>
          <SimpleGrid columns={[1, null, 2]} spacing={10}>
            <Box
              p={5}
              shadow="md"
              borderWidth="1px"
              borderRadius="md"
              bg={cardBgColor}
            >
              <Flex align="center">
                <Image src="/perfectpixel-logo.png" boxSize="50px" mr={4} />
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
                  <Image src="/chrome-web-store-logo.svg" boxSize="24px" mr={2} />
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

        <Box w="full" textAlign="left" mt={10}>
          <Heading as="h2" size="lg" mb={4}>
            Articles
          </Heading>
          <VStack spacing={4}>
            <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" bg={cardBgColor} w="full">
              <Flex align="center">
                <Image src="/large-files-transfers.jpeg" boxSize="50px" mr={4} />
                <Heading as="h3" size="md">
                  <Link href="https://hackernoon.com/large-files-transfers-between-parts-of-chrome-extensions-for-manifest-v3" isExternal>
                    Large Files Transfers Between Parts of Chrome Extensions for Manifest V3
                  </Link>
                </Heading>
              </Flex>
              <Text mt={2}>
                A detailed guide on managing large file transfers in Chrome extensions, addressing the 'message length exceeded maximum allowed length' issue.
              </Text>
              <Text mt={1} color="gray.500" fontSize="sm">
                Published on June 7, 2024
              </Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" bg={cardBgColor} w="full">
              <Flex align="center">
                <Image src="/react-file-structure.jpeg" boxSize="50px" mr={4} />
                <Heading as="h3" size="md">
                  <Link href="https://hackernoon.com/developing-an-easy-to-use-file-structure-for-an-extensive-react-frontend-application" isExternal>
                    Developing an Easy-to-Use File Structure for an Extensive React Frontend Application
                  </Link>
                </Heading>
              </Flex>
              <Text mt={2}>
                A practical approach to organizing file structures in large React applications for better maintainability and scalability.
              </Text>
              <Text mt={1} color="gray.500" fontSize="sm">
                Published on September 18, 2023
              </Text>
            </Box>
            {/* Add more articles as needed */}
          </VStack>
        </Box>

        <Box w="full" textAlign="left" mt={10}>
          <Heading as="h2" size="lg" mb={4}>
            Academic Articles
          </Heading>
          <VStack spacing={4}>
            <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" bg={cardBgColor} w="full">
              <Heading as="h3" size="md">
                Academic Article 1
              </Heading>
              <Text mt={2}>Description of academic article 1.</Text>
            </Box>
            <Box p={5} shadow="md" borderWidth="1px" borderRadius="md" bg={cardBgColor} w="full">
              <Heading as="h3" size="md">
                Academic Article 2
              </Heading>
              <Text mt={2}>Description of academic article 2.</Text>
            </Box>
            {/* Add more academic articles as needed */}
          </VStack>
        </Box>

        <Box w="full" textAlign="left" mt={10}>
          <Heading as="h2" size="lg" mb={4}>
            Connect with Me
          </Heading>
          <Stack direction="row" spacing={6} justify="center">
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
            {/* Add more social links as needed */}
          </Stack>
        </Box>
      </Container>
    </Box>
  );
}
