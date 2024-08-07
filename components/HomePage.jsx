'use client'
import React, { useEffect, useState } from 'react';
import { useRouter } from 'next/navigation';
import { useToast, useBreakpointValue, VStack } from '@chakra-ui/react';
import { TypingProvider } from '@/context/TypingContext';
import { useTypingContext } from '@/context/TypingContext';
import TypingAnimation from './TypingAnimation';
import { Box, Flex, Text, Heading, HStack, Button, Container } from '@chakra-ui/react';
import { motion, useAnimation } from 'framer-motion';
import Footer from './Footer';
import { ChatIcon } from '@chakra-ui/icons';
import { driver } from 'driver.js';
import 'driver.js/dist/driver.css';
import { startDriver } from './utils/driver';

const MotionBox = motion(Box);
const MotionText = motion(Text);


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

    useEffect(() => {
        startDriver();
    }, []);


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
            <Box height={'auto'} width="100vw" position={'absolute'} className='background'>
                <Container maxW="container.xl" position={'relative'}>
                    <Flex direction="column" align="center" justify="center"
                        width="100%"
                        height="auto"
                        textAlign="center"
                        mb={10}
                    >

                        <Heading pt={'10vh'} fontFamily="open sans, sans-serif" as="h1" size="2xl" mb={4} className='gradient-clip'>
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
                <Container height={'auto'} fontFamily="sans-serif" maxW="container.xl" py={8}>

                    <Flex direction="column" align="center" justify="center" height="auto" width="100%" gap={4}>
                        <Heading as="h1" size="xl" fontFamily="sans-serif"
                            textAlign="center" className='text-gray-500 gradient-clip top-nav' mb={8}>
                            Let&apos;s Explore Together!
                        </Heading>

                        <VStack mb={2}>
                            <MotionBox
                                fontSize="xl"
                                textAlign="center"
                                fontWeight="thin"

                                animate={{ opacity: [0, 1], y: [50, 0] }}
                                transition={{ duration: 1.5 }}
                                fontFamily={'Noto Naskh Arabic'}
                                mb={2}
                            >

                                <h1 className='font-extralight text-2xl'>
                                    ﴾يُؤْتِي الْحِكْمَةَ مَنْ يَشَاءُ ۚ وَمَنْ يُؤْتَ الْحِكْمَةَ فَقَدْ أُوتِيَ خَيْرًا كَثِيرًا ۗ وَمَا يَذَّكَّرُ إِلَّا أُولُو الْأَلْبَابِ ﴿٢٦٩                             </h1>
                                <br></br>
                                <h1>( البقرة: ٢٦٩)</h1>

                                <h4 className='text-zinc-500 font-sans text-md italic '>
                                    He grants wisdom to whoever He wills. And whoever is granted wisdom is certainly blessed with a great privilege. But none will be mindful ˹of this˺ except people of reason.

                                </h4>



                            </MotionBox>
                        </VStack>


                        <HStack spacing={4} align="stretch" flexWrap="wrap" justify="center">

                            <MotionBox
                                width={cardWidth}
                                p={6}
                                borderWidth="1px"
                                borderRadius="md"
                                boxShadow="lg"
                                color="white"
                                bg="linear-gradient(180deg,#3f4373, #4d4069 , #343c6b,#6c9e99)"
                                transition="transform 0.3s"
                                _hover={{ transform: 'scale(1.05)', duration: 1.5 }}
                                _focus={{ outline: 'none' }}
                                className="card sidebar1"
                                animate={controls}
                                height='20vh'
                                display='flex'
                                flexDirection='column'
                                justifyContent='center'
                                alignItems='center'
                                initial={{ opacity: 0, y: 50 }}
                            >
                                <Heading fontFamily="sans-serif" as="h3" size="lg" alignItems={'center'} justifyContent={'center'} mb={2}> AI-Powered Learning</Heading>

                            </MotionBox>
                            <MotionBox
                                width={cardWidth}
                                p={6}
                                height='20vh'
                                display='flex'
                                flexDirection='column'
                                justifyContent='center'
                                alignItems='center'
                                borderWidth="1px"
                                borderRadius="md"
                                boxShadow="lg"
                                color="white"
                                bg="linear-gradient(90deg, #4d4069 , #343c6b,#6c9e99)"
                                transition="transform 0.3s"
                                _hover={{ transform: 'scale(1.05)' }}
                                _focus={{ outline: 'none' }}
                                className="card sidebar2"
                                animate={controls}
                                initial={{ opacity: 0, y: 50 }}
                            >
                                <Heading fontFamily="sans-serif" as="h3" size="lg" mb={2}>AI-Powered Guidance</Heading>

                            </MotionBox>
                            <MotionBox
                                height='20vh'
                                display='flex'
                                flexDirection='column'
                                justifyContent='center'
                                alignItems='center'
                                width={cardWidth}
                                p={6}
                                borderWidth="1px"
                                borderRadius="md"
                                boxShadow="lg"
                                color="white"
                                bg="linear-gradient(200deg, #4d4069 , #343c6b,#6c9e99)"
                                transition="transform 0.3s"
                                _hover={{ transform: 'scale(1.05)' }}
                                _focus={{ outline: 'none' }}
                                className="card sidebar3"
                                animate={controls}
                                initial={{ opacity: 0, y: 50 }}
                            >
                                <Heading fontFamily="sans-serif" as="h3" size="lg" mb={2}>Community and Support</Heading>

                            </MotionBox>

                            <MotionBox
                                height='20vh'
                                display='flex'
                                flexDirection='column'
                                justifyContent='center'
                                alignItems='center'
                                width={cardWidth}
                                p={6}
                                borderWidth="1px"
                                borderRadius="md"
                                boxShadow="lg"
                                color="white"
                                bg="linear-gradient(160deg, #4d4069 , #343c6b,#6c9e99)"
                                transition="transform 0.3s"
                                _hover={{ transform: 'scale(1.05)' }}
                                _focus={{ outline: 'none' }}
                                className="card sidebar4"
                                animate={controls}
                                initial={{ opacity: 0, y: 50 }}
                            >
                                <Heading fontFamily="sans-serif" as="h3" size="lg" mb={2}>Blogs and People&apos;s Recent Searchs</Heading>

                            </MotionBox>
                        </HStack>

                    </Flex>
                </Container>
                <Box className='footer'>

                    <Footer />
                </Box>

                <Box position="fixed" bottom={4} left={4} zIndex="1">
                    <Button
                        className='chat'
                        bg="linear-gradient(90deg,#2d302f,#f50f3d,#ff54ca )"
                        color={'white'}
                        onClick={handleChatClick}
                        _hover={{
                            transform: 'scale(1.03)',
                            transition: 'transform 0.3s',
                            fontWeight: 600,
                        }}
                        fontFamily="sans-serif"
                    >
                        <ChatIcon mr={1} /> Chat with Islam365 GPT
                    </Button>
                </Box>



            </Box >
        </>
    );
};

export default Home;
