'use client'
import { Box, Text, Flex, Link, IconButton } from "@chakra-ui/react";
import { FaFacebook, FaTwitter, FaInstagram, FaTiktok } from "react-icons/fa";
import React from "react";

const Footer = () => {
    return (
        <Box

            bg="linear-gradient(90deg, #45caff 20%, #ff1b6b 20%)"
            color="white"


            py={10}
            width="100vw"
            position="relative"
            bottom={0}
        >
            <Flex
                direction={{ base: 'column', md: 'row' }}
                justify="space-between"
                align="center"
                maxW="1200px"

                px={6}
            >
                <Box>

                    <Text fontSize="lg" fontWeight="bold">
                        Islam365
                    </Text>
                    <Text fontSize="sm">
                        Your reliable source for Islamic knowledge.
                    </Text>
                </Box>
                <Flex mr={2} ml={2} wrap={'wrap'} mt={{ base: 4, md: 0 }}>
                    <Link href="/about/about-us" mx={2} _hover={{ textDecoration: 'underline' }}>
                        About Us
                    </Link>
                    <Link href="/contact/contact-form" mx={2} _hover={{ textDecoration: 'underline' }}>
                        Contact
                    </Link>
                    <Link href="/privacy" mx={2} _hover={{ textDecoration: 'underline' }}>
                        Mission And Vision
                    </Link>
                    <Link href="/terms" mx={2} _hover={{ textDecoration: 'underline' }}>
                        Content for Childs
                    </Link>
                    <Link href="/about/about-us" mx={2} _hover={{ textDecoration: 'underline' }}>
                        Content For Adults
                    </Link>
                    <Link href="/contact/contact-form" mx={2} _hover={{ textDecoration: 'underline' }}>
                        Content for Elders
                    </Link>

                </Flex>
                <Flex mt={{ base: 4, md: 0 }}>
                    <IconButton
                        as="a"
                        href="https://www.facebook.com/profile.php?id=61561923396371"
                        target="_blank"
                        aria-label="Facebook"
                        icon={<FaFacebook />}
                        mx={1}
                        colorScheme="facebook"
                        variant="ghost"
                    />
                    <IconButton
                        as="a"
                        href="https://www.tiktok.com/@islam365online?lang=en"
                        target="_blank"
                        aria-label="twitter"
                        icon={<FaTiktok />}
                        mx={1}
                        variant="ghost"
                    />
                    <IconButton
                        as="a"
                        href="https://x.com"
                        aria-label="X"
                        icon={<FaTwitter />}
                        mx={1}
                        colorScheme="twitter"
                        variant="ghost"
                    />
                    <IconButton
                        as="a"
                        href="https://instagram.com"
                        aria-label="Instagram"
                        icon={<FaInstagram />}
                        mx={1}
                        colorScheme="pink"
                        variant="ghost"
                    />
                </Flex>
            </Flex>
            <Box textAlign="center" mt={6}>
                <Text fontSize="sm">
                    &copy; {new Date().getFullYear()} Islam365 . All rights reserved.
                </Text>
            </Box>
        </Box>
    );
};

export default Footer;
