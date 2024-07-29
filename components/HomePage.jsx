'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useToast, useBreakpointValue } from '@chakra-ui/react';
import { TypingProvider } from '@/context/TypingContext';
import { useTypingContext } from '@/context/TypingContext';
import TypingAnimation from './TypingAnimation';
import { Box, Flex, Text, Heading, HStack, Button, Container } from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';
import Footer from './Footer';

const MotionBox = motion(Box);

const Home = () => {
    const { firstComplete, handleFirstComplete } = useTypingContext();
    const [showSecondText, setShowSecondText] = useState(false);
    const router = useRouter();
    const toast = useToast();
    const controls = useAnimation();

    useEffect(() => {
        if (firstComplete) {
            setShowSecondText(true);
        }
    }, [firstComplete]);

    useEffect(() => {
        const handleScroll = () => {
            const cards = document.querySelectorAll('.card');
            cards.forEach(card => {
                const rect = card.getBoundingClientRect();
                if (rect.top < window.innerHeight && rect.bottom >= 0) {
                    controls.start({ opacity: 1, y: 0 });
                } else {
                    controls.start({ opacity: 0, y: 50 });
                }
            });
        };

        window.addEventListener('scroll', handleScroll);
        handleScroll(); // Check on initial load

        return () => window.removeEventListener('scroll', handleScroll);
    }, [controls]);

    const handleChatClick = () => {
        toast({
            title: 'Starting Chat...',
            description: 'You are being redirected to the chat page.',
            status: 'info',
            duration: 1500,
            isClosable: true,
        });
        router.push('/rag');
    };

    const cardWidth = useBreakpointValue({ base: "90%", md: "40%" });

    return (
        <>
            <Box width="100vw" pb={2}>
                <Container maxW="container.xl">
                    <Flex direction="column" align="center" justify="center"
                        width="100%"
                        height="auto"
                        textAlign="center"
                        mb={10}
                    >
                        <Heading pt={'10vh'} fontFamily="sans-serif" as="h1" size="2xl" mb={4} className='gradient-clip'>
                            Welcome to Islam365.online
                        </Heading>
                        <Box pt={'10vh'} mb={8} height={'80vh'}>
                            <Box mb={8}>
                                <TypingAnimation
                                    text="&#8226; Our mission is to provide a chatbot based on Islamic books so people can learn about Islam. This chatbot offers accurate information from authentic Islamic texts like the Quran and Hadith. Users can explore various aspects of Islam, including beliefs, practices, history, and ethics. It serves as an educational tool for both Muslims and non-Muslims, promoting understanding and interfaith dialogue."
                                    onComplete={handleFirstComplete}
                                />
                            </Box>
                            {firstComplete && (
                                <Box>
                                    <TypingAnimation
                                        text="&#8226; We use AI for extracting knowledge from the books according to questions. We provide age-wise content and books, and guidance for new Muslims."
                                    />
                                </Box>
                            )}
                        </Box>
                    </Flex>
                </Container>
                <Container fontFamily="sans-serif" maxW="container.xl" py={8}>
                    <Flex direction="column" align="center" justify="center" height="auto" width="100%" gap={4}>
                        <Heading as="h1" size="xl" fontFamily="sans-serif"
                            textAlign="center" className='text-gray-500 gradient-clip' mb={8}>
                            Let&apos;s Explore Together!
                        </Heading>
                        <HStack spacing={4} align="stretch" flexWrap="wrap" justify="center">
                            <MotionBox
                                width={cardWidth}
                                p={6}
                                borderWidth="1px"
                                borderRadius="md"
                                boxShadow="lg"
                                bg="linear-gradient(90deg, #ff54cc 20%, yellow)"
                                transition="transform 0.3s"
                                _hover={{ transform: 'scale(1.05)' }}
                                _focus={{ outline: 'none' }}
                                className="card"
                                animate={controls}
                                initial={{ opacity: 0, y: 50 }}
                            >
                                <Heading fontFamily="sans-serif" as="h3" size="lg" mb={2}> AI-Powered Learning</Heading>
                                <Text fontFamily="sans-serif" fontSize="md">
                                    Discover personalized learning experiences tailored to your interests and age group. Our platform offers a variety of resources and interactive content to help you understand Islam in a way that suits you best. Whether you are new to Islam or looking to deepen your knowledge, we have something for everyone.
                                </Text>
                            </MotionBox>
                            <MotionBox
                                width={cardWidth}
                                p={6}
                                borderWidth="1px"
                                borderRadius="md"
                                boxShadow="lg"
                                bg="linear-gradient(90deg, #ff54cc 20%, yellow)"
                                transition="transform 0.3s"
                                _hover={{ transform: 'scale(1.05)' }}
                                _focus={{ outline: 'none' }}
                                className="card"
                                animate={controls}
                                initial={{ opacity: 0, y: 50 }}
                            >
                                <Heading fontFamily="sans-serif" as="h3" size="lg" mb={2}>AI-Powered Guidance</Heading>
                                <Text fontFamily="sans-serif" fontSize="md">
                                    Our advanced AI system extracts relevant knowledge from Islamic books and provides you with precise answers to your questions. This innovative approach ensures you receive accurate and valuable insights quickly, enhancing your learning journey.
                                </Text>
                            </MotionBox>
                            <MotionBox
                                width={cardWidth}
                                p={6}
                                borderWidth="1px"
                                borderRadius="md"
                                boxShadow="lg"
                                bg="linear-gradient(90deg, #ff54cc 20%, yellow)"
                                transition="transform 0.3s"
                                _hover={{ transform: 'scale(1.05)' }}
                                _focus={{ outline: 'none' }}
                                className="card"
                                animate={controls}
                                initial={{ opacity: 0, y: 50 }}
                            >
                                <Heading fontFamily="sans-serif" as="h3" size="lg" mb={2}>Community and Support</Heading>
                                <Text fontFamily="sans-serif" fontSize="md">
                                    Join a supportive community of learners and seekers. Engage in discussions, attend virtual events, and access a wealth of resources designed to assist you in your spiritual and educational journey. Our platform fosters a sense of belonging and provides the support you need to grow.
                                </Text>
                            </MotionBox>
                        </HStack>

                    </Flex>
                </Container>
                <Footer />
                <Box position="fixed" bottom={4} left={4} zIndex="1">
                    <Button
                        bg="linear-gradient(90deg, #ff54cc 20%,#ff54ca )"
                        color={'white'}
                        onClick={handleChatClick}
                        _hover={{
                            transform: 'scale(1.06)',
                            transition: 'transform 0.3s',
                            fontWeight: 800,
                        }}
                        fontFamily="sans-serif"
                    >
                        Start the Chat
                    </Button>
                </Box>
            </Box>
        </>
    );
};

export default Home;
