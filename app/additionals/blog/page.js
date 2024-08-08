'use client';

import { useEffect, useState } from 'react';
import { Text, Box, Heading, Button, useToast, Flex } from '@chakra-ui/react';
import MarkdownRenderer from '@/components/Markdown';
import { CopyIcon, ChatIcon, ChevronLeftIcon, ChevronRightIcon } from '@chakra-ui/icons';
import { useRouter } from 'next/navigation';
import Loading from '@/app/loading';

export default function Home() {
    const [blogs, setBlogs] = useState([]);
    const [page, setPage] = useState(1);
    const [loading, setLoading] = useState(false);
    const [hasMore, setHasMore] = useState(true);

    const fetchContent = async (page) => {
        const url = `/api/proxy/blog?page=${page}&limit=10`; // Adjust the limit as needed
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

    const router = useRouter();
    const handleChatClick = () => {
        router.push('/rag');
    };

    useEffect(() => {
        async function fetchBlogs() {
            setLoading(true);
            try {
                const newBlogs = await fetchContent(page);
                setBlogs(newBlogs);
                setHasMore(newBlogs.length > 0);
            } catch (error) {
                console.error('An error occurred while fetching blogs:', error);
            }
            setLoading(false);
        }
        fetchBlogs();
    }, [page]);

    const toast = useToast();

    const handleCopy = (content) => {
        navigator.clipboard.writeText(content);
        toast({
            title: "Response Copied",
            description: 'Response Text Copied Successfully',
            duration: 1000,
            status: 'info',
            isClosable: true,
            colorScheme: 'pink',
            position: 'top-right',
        });
    };

    const handleNextPage = () => {
        if (hasMore) {
            setPage((prevPage) => prevPage + 1);
        }
        window.scrollTo(0, 0)
    };

    const handlePrevPage = () => {
        if (page > 1) {
            setPage((prevPage) => prevPage - 1);
        }
        window.scrollTo(0, 0)

    };

    return (
        <>
            <Heading width={'full'} m={4}>Blogs</Heading>
            {blogs.map((blog) => (
                <Box padding={6} key={blog._id.$oid}>
                    <Box bg="" width="full" p={4} borderWidth="1px" borderRadius="md" boxShadow="md">
                        <strong className="flex flex-row space-x-1">Question:<span></span>
                            <Text>{blog.query}</Text>
                        </strong>
                    </Box>
                    <Box transition={"height"} width="full" p={4} borderWidth="1px" borderRadius="md" boxShadow="md">
                        <Box display='flex' justifyContent={'space-between'}>
                            <strong>Response :</strong>
                            <CopyIcon cursor={'pointer'} onClick={() => handleCopy(blog.response)} />
                        </Box>
                        <Box p={4} mt={4} borderWidth="1px" borderRadius="lg" border={'none'} fontFamily={'initial'}>
                            <MarkdownRenderer content={blog.response} />
                        </Box>
                    </Box>
                </Box>
            ))}
            {loading && <Loading />}
            {!hasMore && <Text>No more blogs to load.</Text>}
            <Flex justifyContent="center" pb={2} mt={2}>
                <Button onClick={handlePrevPage} isDisabled={page === 1 || loading} mr={2}><ChevronLeftIcon /> {page - 1}</Button>
                <Button onClick={handleNextPage} isDisabled={!hasMore || loading}> {page + 1}<ChevronRightIcon /> </Button>
            </Flex>

        </>
    );
}
