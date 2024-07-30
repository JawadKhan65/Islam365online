'use client';
import React from 'react';
import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react';
import Footer from '@/components/Footer';
import { motion, useAnimation } from 'framer-motion';


const AboutUs = () => {
    const controls = useAnimation()
    const MotionBox = motion(Box);
    return (
        <>
            <Box width="100vw" pb={2} position="relative">
                {/* Section 1 */}
                <Box bg="#ff0f3f" position="relative" py={20} color="white">

                    <Container maxW="container.xl">
                        <Flex direction="column" align="center" justify="center" width="100%" height="auto" textAlign="center" mb={10}>
                            <Heading fontFamily="sans-serif" as="h1" size="2xl" mb={4}>
                                About Us
                            </Heading>

                            <Text fontFamily="sans-serif" fontSize="lg">
                                Welcome to Islam365.online! We are dedicated to providing a comprehensive and accessible platform for learning about Islam. Our mission is to deliver accurate and authentic information from trusted Islamic sources such as the Quran and Hadith.
                            </Text>
                        </Flex>
                    </Container>
                </Box>

                {/* Section 2 */}
                <Box bg="#1e98ba" position="relative" py={20} color="white">

                    <Container maxW="container.xl">
                        <Flex direction="column" align="center" justify="center" width="100%" height="auto" textAlign="center" mb={10}>
                            <Text fontFamily="sans-serif" fontSize="lg">
                                Our platform is designed to cater to individuals of all ages and backgrounds. Whether you are a new Muslim, a seasoned practitioner, or simply someone curious about Islam, we offer resources tailored to your needs.
                            </Text>
                        </Flex>
                    </Container>
                </Box>

                {/* Section 3 */}
                <Box bg="#ed8218" position="relative" py={20} color="white">
                    <Box position="absolute" top="0" left="0" width="100%" height="100%" zIndex={-1}>
                        <svg viewBox="0 0 1440 320" xmlns="http://www.w3.org/2000/svg" style={{ position: 'absolute', bottom: 0, left: 0, width: '100%', height: '100%' }}>
                            <path fill="#fff" fillOpacity="1" d="M0,192L48,181.3C96,171,192,149,288,133.3C384,117,480,107,576,117.3C672,128,768,160,864,160C960,160,1056,128,1152,106.7C1248,85,1344,75,1392,69.3L1440,64L1440,320L1392,320C1344,320,1248,320,1152,320C1056,320,960,320,864,320C768,320,672,320,576,320C480,320,384,320,288,320C192,320,96,320,48,320L0,320Z" />
                        </svg>
                    </Box>
                    <Container maxW="container.xl">
                        <Flex direction="column" align="center" justify="center" width="100%" height="auto" textAlign="center" mb={10}>
                            <Text fontFamily="sans-serif" fontSize="lg">
                                We believe in fostering a supportive community where learners can grow and thrive together. Join us on this journey to explore, learn, and grow in your understanding of Islam.
                            </Text>
                        </Flex>
                    </Container>
                </Box>

                <Footer />
            </Box>
        </>
    );
};

export default AboutUs;
