import React from "react";
import { Flex, Box, Button, Textarea } from "@chakra-ui/react";
import { ArrowRightIcon } from "@chakra-ui/icons";

const ChatBar = ({ query, handleChange, handleKeyDown, loading }) => {

    return <>
        <Flex className="rounded-lg" bg={'gray.100'} alignItems="center" width="80vw" maxW="container.md" mx="auto" px={4}>
            <Textarea
                border={'none'}
                p={2}
                value={query}
                onChange={handleChange}
                onKeyDown={handleKeyDown}
                placeholder="Type your question..."
                flex="1"
                fontWeight="semi-bold"
                width={'auto'}
                mr={3}
                resize="none"
                color="black"
                focusBorderColor="transparent"
                alignContent={'center'}
                fontFamily={'open sans, sans-serif'}
                height="10vh" // Set the height of the Textarea
            />
            <Button
                isDisabled={loading} // Correctly control the disabled state
                colorScheme="gray"
                bg={'gray.50'}
                onClick={() => handleSend(query)}
                height="48px" // Match the height of the Textarea
            >

                <ArrowRightIcon />
            </Button>
        </Flex>


    </>;
};

export default ChatBar;
