'use client'
import React, { useEffect, useState } from "react";
import { Box, Grid, Heading, Link } from "@chakra-ui/react";

const Resources = () => {
    const [data, setData] = useState([]);

    useEffect(() => {
        const fetchResource = async () => {
            const res = await fetch('/api/proxy/resources', {
                method: 'GET',
                headers: {
                    'Content-Type': 'application/json',
                    'Accept': 'application/json',
                },
            });

            if (res.ok) {
                const resource = await res.json();
                setData(resource.response); // Assuming `resource.response` contains the list of files
            }
        }

        fetchResource();
    }, []);

    const baseURL = 'https://islamrag-365.s3.ap-south-1.amazonaws.com';

    return (
        <Box p={4}>
            <Box p={4} display={'flex'} justifyContent={'center'}>
                <Heading mb={6}>Available Resources</Heading>

            </Box>
            <Grid pb={'50px'} templateColumns="repeat(auto-fill, minmax(200px, 1fr))" gap={6}>
                {data.map((item, index) => (
                    <Link onClick={(() => window.open(`${baseURL}/${item}`))} isExternal key={index}>
                        <Box
                            bg="linear-gradient(200deg,#b0f5ef,#b0eef5,#82e9f5)"
                            title={item.split('/').pop()}
                            p={5}
                            shadow="md"
                            borderWidth="1px"
                            borderRadius="md"
                            _hover={{ bg: "gray.100" }}>
                            <Heading fontSize="xl" isTruncated>
                                {item.split('/').pop()} {/* Display the PDF file name */}
                            </Heading>
                        </Box>
                    </Link>
                ))}
            </Grid>
        </Box>
    );
};

export default Resources;
