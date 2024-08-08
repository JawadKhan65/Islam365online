'use client';

import React, { useEffect, useState } from "react";
import { Box, Button, useToast } from "@chakra-ui/react";
import { ChatIcon } from "@chakra-ui/icons";
import { useRouter } from "next/navigation";
import { usePathname } from 'next/navigation'

const ChatButton = () => {
    const [display, setDisplay] = useState('');
    const router = useRouter();
    const pathname = usePathname()
    const toast = useToast();

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

    useEffect(() => {
        console.log(pathname);
        if (pathname === '/rag') {
            setDisplay('none');
        } else {
            setDisplay('block');



        }
    }, [pathname]);

    return (
        <Box display={display} position="fixed" bottom={4} left={4} zIndex="1">
            <Button
                bg="linear-gradient(90deg,#2d302f,#f50f3d,#ff54ca )"
                color="white"
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
    );
};

export default ChatButton;
