'use client';

import React from 'react';
import { Box, Flex, Heading, HStack } from '@chakra-ui/react';
import Footer from '@/components/Footer';

const PrayerTimes = () => {
    return (
        <Box>
            <Flex direction="column" align="center" >
                <Heading as="h1" size="lg" m={3} color="teal.500" textAlign="center">
                    Prayer Times And Special Days
                </Heading>
                <HStack
                    p={'14px'}
                    m={2}
                    bg={'white'}
                    spacing={4}
                    flexWrap="wrap"
                    justifyContent="center"
                >
                    <Box
                        as="iframe"
                        width={['100%', '100%', '240px']} // Full width on smaller screens, fixed width on larger screens
                        height="400px"
                        border="1px solid #ddd"
                        src="https://www.islamicfinder.org/prayer-widget/"
                        borderRadius="md"
                        bg='transparent'
                        padding={5}
                        boxShadow={'md'}
                    />
                    <Box
                        as="iframe"
                        width={['100%', '100%', '240px']} // Full width on smaller screens, fixed width on larger screens
                        height="400px"
                        border="1px solid #ddd"
                        src="https://www.islamicfinder.org/specialislamicdays"
                        borderRadius="md"
                        padding={5}
                        bg='transparent'
                        boxShadow={'md'}

                    />
                </HStack>
            </Flex>
            <Footer />
        </Box>
    );
};

export default PrayerTimes;
