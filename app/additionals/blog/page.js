'use client';

import { useEffect, useState } from 'react';
import { Text, Box, Heading, Button, useToast } from '@chakra-ui/react';
import MarkdownRenderer from '@/components/Markdown';
import { CopyIcon, ChatIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/navigation';
export default function Home() {
    const [blogs, setBlogs] = useState([]);

    const fetchContent = async () => {
        const url = '/api/proxy/blog';
        const res = await fetch(url, {
            method: 'GET',
            headers: {
                'Content-Type': 'application/json',
                'Accept': 'application/json',
            },
        });
        if (!res.ok) {
            throw new Error(`HTTP error! status: ${res.status}`);
        }
        const data = await res.json();

        console.log('Received response:', data);
        return data.blogs; // Extract blogs from the response

    };
    const router = useRouter()
    const handleChatClick = () => {
        router.push('/rag');
    }

    useEffect(() => {
        async function fetchBlogs() {
            try {
                const blogs = await fetchContent();
                console.log('Fetched blogs:', blogs);
                setBlogs(blogs);
            } catch (error) {
                console.error('An error occurred while fetching blogs:', error);
            }
        }
        fetchBlogs();
    }, []);
    const toast = useToast()

    const handleCopy = (content) => {
        navigator.clipboard.writeText(content)
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


    return (
        <>
            <Heading width={'full'} m={4}>Blogs</Heading>

            {blogs.map(blog => (
                <Box padding={6} key={blog._id.$oid}>
                    <Box bg="" width="full" p={4} borderWidth="1px" borderRadius="md" boxShadow="md">
                        <strong className="flex flex-row space-x-1"> Question:<span></span>
                            <Text> {blog.query}</Text>
                        </strong>

                    </Box>
                    <Box transition={"height"} width="full" p={4} borderWidth="1px" borderRadius="md" boxShadow="md">
                        <Box display='flex' justifyContent={'space-between'}>
                            <strong>Response : </strong>
                            <CopyIcon cursor={'pointer'} onClick={() => handleCopy(blog.response)} />


                        </Box>


                        <Box p={4}
                            mt={4}
                            borderWidth="1px"
                            borderRadius="lg"
                            border={'none'}

                            fontFamily={'initial'}

                        >

                            <MarkdownRenderer content={blog.response} />

                        </Box>
                    </Box>

                    {/* chat */}
                    <Box position="fixed" bottom={4} left={4} zIndex="1">
                        <Button
                            className='chat'
                            bg="linear-gradient(90deg,#2d302f,#f50f3d,#ff54ca )"
                            color={'white'}
                            onClick={handleChatClick}
                            _hover={{
                                bg: "linear-gradient(90deg,#ba4cf5,#f50f3d,#ff54ca )",

                                transition: 'transform 0.3s',
                                fontWeight: 600,
                            }}
                            fontFamily="sans-serif"
                        >
                            <ChatIcon mr={1} /> Chat with Islam365 GPT
                        </Button>
                    </Box>
                </Box>
            ))}

        </>
    );
}
