'use client';
import React from 'react';
import { Box, Container, Flex, Heading, Text } from '@chakra-ui/react';
import Footer from '@/components/Footer';

const Missions = () => {
    return (
        <>
            <Box width="100vw" position="relative">
                <Box bg="#08b7cf" position="relative" overflow="hidden">

                    <Container maxW="container.xl" py={20}>
                        <Flex direction="column" align="center" justify="center" width="100%" height="auto" textAlign="center" mb={10}>
                            <Heading fontFamily="sans-serif" as="h1" size="2xl" mb={4} color="white">
                                Our Mission
                            </Heading>
                            <Box mb={8} height={'auto'}>
                                <Text fontFamily="sans-serif" fontSize="xl" color="white">
                                    At Islam365.online, our mission is to provide a comprehensive and accessible platform for learning about Islam. We are committed to delivering accurate and authentic information from trusted Islamic sources such as the Quran and Hadith. Our goal is to promote understanding, education, and interfaith dialogue.
                                </Text>
                            </Box>
                        </Flex>
                    </Container>
                </Box>

                <Box bg="#f7a414" position="relative" overflow="hidden">

                    <Container maxW="container.xl" py={20}>
                        <Flex borderRa direction="column" align="center" justify="center" width="100%" height="auto" textAlign="center" mb={10}>
                            <Box mb={8}>
                                <Text fontFamily="sans-serif" fontSize="xl" color="white">
                                    Our platform is designed to cater to individuals of all ages and backgrounds. Whether you are a new Muslim, a seasoned practitioner, or simply someone curious about Islam, we offer resources tailored to your needs. We believe in fostering a supportive community where learners can grow and thrive together.
                                </Text>
                            </Box>
                        </Flex>
                    </Container>
                </Box>

                <Box blur={'10px'} bg="#cc184e" position="relative" overflow="hidden">
                    <Box
                        position="absolute"
                        top="0"
                        left="0"
                        width="100%"
                        height="100%"
                        zIndex={-1}
                        animation="moveWave 10s linear infinite"
                    >
                        <svg
                            viewBox="0 0 1440 320"
                            xmlns="http://www.w3.org/2000/svg"
                            style={{ position: 'absolute', top: 0, left: 0, width: '100%', height: '100%' }}
                        >
                            <path
                                fill="#fff"
                                fillOpacity="1"
                                d="M0,192L48,181.3C96,171,192,149,288,133.3C384,117,480,107,576,117.3C672,128,768,160,864,160C960,160,1056,128,1152,106.7C1248,85,1344,75,1392,69.3L1440,64L1440,0L1392,0C1344,0,1248,0,1152,0C1056,0,960,0,864,0C768,0,672,0,576,0C480,0,384,0,288,0C192,0,96,0,48,0L0,0Z"
                            />
                        </svg>
                    </Box>
                    <Container maxW="container.xl" py={20}>
                        <Flex direction="column" align="center" justify="center" width="100%" height="auto" textAlign="center" mb={10}>
                            <Box mb={8}>
                                <Text fontFamily="sans-serif" fontSize="xl" color="white">
                                    We leverage advanced AI technology to extract knowledge from Islamic books and provide precise answers to your questions. Our innovative approach ensures that you receive valuable insights quickly, enhancing your learning experience. Join us on this journey to explore, learn, and grow together.
                                </Text>
                            </Box>
                        </Flex>
                    </Container>
                </Box>

                <Footer />
            </Box>
            <style jsx global>{`
                @keyframes moveWave {
                    0% {
                        transform: translateX(0) translateY(0);
                    }
                    50% {
                        transform: translateX(-50px) translateY(10px);
                    }
                    100% {
                        transform: translateX(0) translateY(0);
                    }
                }
            `}</style>
        </>
    );
};

export default Missions;
