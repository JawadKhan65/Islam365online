'use client';
import React, { useState, useEffect } from "react";
import { Box, Button, Heading, HStack, Text, VStack, Flex, Textarea } from "@chakra-ui/react";
import MarkdownRenderer from "@/components/Markdown";
import TypingAnimation from "@/components/TypingAnimation";
import { useToast } from "@chakra-ui/react";
import { CopyIcon } from "@chakra-ui/icons";
import Loading from "@/components/Loading";
import DocumentsList from "@/components/Document";

const Chat = () => {
    const toast = useToast();
    const [content, setContent] = useState([]);
    const [response, setResponse] = useState('');

    const [query, setQuery] = useState('');
    const [isQues, setIsQues] = useState(false);
    const [prev, setPrev] = useState('');
    const [loading, setLoading] = useState(false);
    const handleCopy = (content) => {
        navigator.clipboard.writeText(response)
        toast({
            title: " Response Copied",
            description: 'Response Text Copied Succesfully',
            duration: 1000,
            status: 'info',
            isClosable: true,
            colorScheme: 'pink',
            position: 'top-right'
        })
    }
    useEffect(() => {
        if (response != '') {

            toast({
                title: "View Book",
                description: 'Click the Source to Open the Book Viewer',
                duration: 1500,
                status: 'info',
                isClosable: true,
                position: 'top-right'
            })
        }


    }, [response])

    useEffect(() => {
        const interval = setInterval(() => {
            toast({
                title: "Feedback Reminder",
                description: 'Give feedback to improve the response. Your feedback will help us a lot. Form is available in the contact section.',
                duration: 3000,
                status: 'info',
                isClosable: true,
                position: 'top',
                colorScheme: 'pink'
            });
        }, 60000);

        // Cleanup interval on component unmount
        return () => clearInterval(interval);
    }, [toast]);

    const fetchContent = async (query) => {
        const url = '/api/proxy/rag';
        console.log('Fetching content from:', url);
        try {
            const response = await fetch(url, {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                    'X-Requested-With': 'XMLHttpRequest'
                },
                body: JSON.stringify({ 'query': query })
            });

            if (!response.ok) {
                throw new Error(`HTTP error! status: ${response.status}`);
            }

            const data = await response.json();
            console.log('Received response:', data.result);
            return data;
        } catch (error) {
            console.error('Error fetching content:', error);
            return '';
        }
    };

    useEffect(() => {
        const fetchAndSetContent = async () => {
            if (prev) {
                setLoading(true);
                const fetchedContent = await fetchContent(prev);
                setContent(fetchedContent['content']);
                setResponse(fetchedContent['result']);
                setLoading(false);
            }
        };

        fetchAndSetContent();
    }, [prev]);

    const handleChange = (event) => {
        setQuery(event.target.value);
    };

    const handleSend = (q) => {
        if (q !== '') {
            setLoading(true)
            setQuery(''); // Clear the input after sending
            console.log("Sending query:", q);
            setPrev(q);
            setIsQues(true);
        }
    };

    const handleKeyDown = (event) => {
        if (!loading) {
            if (event.key === 'Enter') {
                if (event.shiftKey) {
                    // shift + enter: Insert a newline
                    const cursorPos = event.target.selectionStart;
                    setQuery(prev => prev.slice(0, cursorPos) + '\n' + prev.slice(cursorPos));
                    event.preventDefault(); // prevent default behavior
                } else {
                    // enter: Send the message
                    event.preventDefault(); // prevent default behavior 
                    handleSend(query);
                }
            }
        }
    };

    return (
        <Box height="100vh" display="flex" flexDirection="column">
            <HStack justifyContent="center" mt={4}>
                <Box>
                    {
                        isQues ?
                            <Heading className="gradient-clip m-2">
                                Islam-365
                            </Heading> : <Heading className="gradient-clip m-2">
                                Start Chat about Islam with Islam-365RAG
                            </Heading>
                    }
                </Box>
            </HStack>
            <Box flex="1" overflowY="auto" pb="80px">


                <VStack width="full" spacing={4} p={4} align="stretch">
                    {isQues && <><Box bg="" width="full" p={4} borderWidth="1px" borderRadius="md" boxShadow="md">
                        <strong className="flex flex-row space-x-1"> Question:<span></span>
                            <Text> {prev}</Text>
                        </strong>

                    </Box>

                        <Box transition={"height"} width="full" p={4} borderWidth="1px" borderRadius="md" boxShadow="md">
                            <Box display='flex' justifyContent={'space-between'}>
                                <strong>Response : </strong>{isQues &&
                                    <CopyIcon cursor={'pointer'} onClick={() => handleCopy(content)} />}


                            </Box>
                            {isQues && loading ? (
                                <Loading />
                            ) : (
                                <>
                                    <Box p={4}
                                        mt={4}
                                        borderWidth="1px"
                                        borderRadius="lg"

                                        fontFamily={'initial'}

                                    >
                                        <Heading m={2} fontSize={'md'} as={'h2'}>
                                            GENERATED RESPONSE ON THE CONTEXT
                                        </Heading>
                                        <MarkdownRenderer content={response} />

                                    </Box>
                                    <DocumentsList documents={content} />

                                </>


                            )}
                        </Box></>}

                </VStack>
            </Box>

            <Box position="fixed" bottom={0} width="full" p={4} bg="transparent" boxShadow="md">
                <Flex className="rounded-lg" bg={'gray.100'} alignItems="center" width="full" maxW="container.md" mx="auto" px={4}>
                    <Textarea
                        border={'none'}
                        p={2}
                        value={query}
                        onChange={handleChange}
                        onKeyDown={handleKeyDown}
                        placeholder="Type your question..."
                        flex="1"
                        fontWeight="bold"
                        width={'auto'}
                        mr={3}
                        resize="none"
                        color="black"
                        focusBorderColor="transparent"
                        height="48px" // Set the height of the Textarea
                    />
                    <Button
                        isDisabled={loading} // Correctly control the disabled state
                        colorScheme="purple"
                        onClick={() => handleSend(query)}
                        height="48px" // Match the height of the Textarea
                    >
                        Send
                    </Button>
                </Flex>
            </Box>

        </Box>
    );
};

export default Chat;
