'use client';
import React, { useState } from 'react';
import { Box, Container, Flex, Heading, Text, Input, Textarea, Button, FormControl, FormLabel, useToast } from '@chakra-ui/react';
import Footer from '@/components/Footer';

const ContactUs = () => {
    const toast = useToast();
    const [formData, setFormData] = useState({
        name: '',
        email: '',
        message: ''
    });

    const handleChange = (e) => {
        setFormData({
            ...formData,
            [e.target.name]: e.target.value
        });
    };

    const handleSubmit = async (event) => {
        event.preventDefault();
        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(formData)
            });

            if (response.ok) {
                toast({
                    title: "Message Sent",
                    description: "Thank you for contacting us! We will get back to you soon.",
                    status: "success",
                    duration: 3000,
                    isClosable: true,
                });
                setFormData({ name: '', email: '', message: '' });
            } else {
                throw new Error('Failed to send message');
            }
        } catch (error) {
            toast({
                title: "Error",
                description: "Failed to send message. Please try again later.",
                status: "error",
                duration: 5000,
                isClosable: true,
            });
        }
    };


    return (
        <>
            <Box width="100vw" pb={2} position="relative">
                <Box position="relative" overflow="hidden">
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
                            <Heading fontFamily="sans-serif" as="h1" size="2xl" mb={4} >
                                Contact | Feed Back Form
                            </Heading>
                            <Box width="full" maxW="md" mt={8}>
                                <form onSubmit={handleSubmit}>
                                    <FormControl isRequired mb={4}>
                                        <FormLabel >Name</FormLabel>
                                        <Input
                                            type="text"
                                            placeholder="Your Name"
                                            name="name"
                                            value={formData.name}
                                            onChange={handleChange}
                                            variant="outline"


                                        />
                                    </FormControl>
                                    <FormControl isRequired mb={4}>
                                        <FormLabel >Email</FormLabel>
                                        <Input
                                            type="email"
                                            placeholder="Your Email"
                                            name="email"
                                            value={formData.email}
                                            onChange={handleChange}
                                            variant="outline"


                                        />
                                    </FormControl>
                                    <FormControl isRequired mb={4}>
                                        <FormLabel >Message</FormLabel>
                                        <Textarea
                                            placeholder="Your Message"
                                            name="message"
                                            value={formData.message}
                                            onChange={handleChange}
                                            variant="outline"


                                        />
                                    </FormControl>
                                    <Button type="submit" colorScheme="purple" size="lg" width="full">
                                        Send Message
                                    </Button>
                                </form>
                            </Box>
                        </Flex>
                    </Container>
                </Box>

                <Footer />
            </Box>

        </>
    );
};

export default ContactUs;
