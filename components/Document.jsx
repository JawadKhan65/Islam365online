import { useState, useEffect } from 'react';
import {
    Box,
    Text,
    VStack,
    HStack,
    Badge,
    useColorModeValue,
    Heading,
    Modal,
    ModalOverlay,
    ModalContent,
    ModalHeader,
    ModalFooter,
    ModalBody,
    ModalCloseButton,
    Button,
    useDisclosure,
    useToast
} from "@chakra-ui/react";

const BookModal = ({ isOpen, onClose, bookUrl, pageNumber }) => {
    const [iframeUrl, setIframeUrl] = useState('');


    useEffect(() => {
        if (bookUrl && pageNumber) {
            setIframeUrl(`${bookUrl}#page=${pageNumber}`);
        }
    }, [bookUrl, pageNumber]);

    return (
        <Modal boxShadow='lg' isOpen={isOpen} onClose={onClose} size="xl">
            <ModalOverlay />
            <ModalContent>
                <ModalHeader>Book View</ModalHeader>
                <ModalCloseButton />
                <ModalBody>
                    <iframe
                        src={iframeUrl}
                        width="100%"
                        height="600px"
                        title="Book View"
                    />
                </ModalBody>
                <ModalFooter>
                    <Button colorScheme="pink" mr={3} onClick={onClose}>
                        Close
                    </Button>
                </ModalFooter>
            </ModalContent>
        </Modal>
    );
};

// Define a functional component to display each document
const DocumentCard = ({ content, page, source }) => {
    const { isOpen, onOpen, onClose } = useDisclosure();
    const base_url = 'https://islamrag-365.s3.ap-south-1.amazonaws.com/islamic/';
    const toast = useToast()

    const onSourceClick = () => {
        toast({
            title: "Book View",
            description: "Loading the Book. Please Wait it may take a while to Load...",
            status: "info",
            duration: 3000,
            colorScheme: "pink",
            position: "top-right",
            isClosable: true
        })
        onOpen();
    };

    return (
        <Box
            p={4}
            fontFamily={'initial'}
            borderWidth="1px"
            borderRadius="lg"
            overflow="hidden"
            boxShadow={'lg'}
            bg={useColorModeValue("white", "gray.800")}
        >
            <HStack justifyContent="space-between">
                <Badge borderRadius="full" px="2" colorScheme="teal">
                    Page {page}
                </Badge>
                <Text
                    fontSize="sm"
                    color={useColorModeValue("gray.500", "gray.400")}
                    cursor={'pointer'}
                    _hover={{ color: 'blue' }}
                    onClick={onSourceClick}
                >
                    Source: {source}
                </Text>
            </HStack>
            <Text mt={2} fontSize="md" noOfLines={5}>
                {content}
            </Text>
            <BookModal isOpen={isOpen} onClose={onClose} bookUrl={`${base_url}${source}`} pageNumber={page} />
        </Box>
    );
};

// Define the main component to display the list of documents
const DocumentsList = ({ documents }) => {
    const [docs, setDocs] = useState(documents || []);

    useEffect(() => {
        // If documents prop changes, update state
        if (documents) {
            setDocs(documents);
        }
    }, [documents]);

    return (
        <>
            <VStack spacing={4} align="stretch">
                <Heading m={2} as={'h2'} fontSize={'lg'}>
                    <span className="text-fuchsia-600">Fetched :</span> Resources | References | Others
                    <br></br>
                    <br></br>
                    <span className='italic text-blue-600 font-medium shadow-md shadow-slate-500 bg-transparent border-none'>Click the &apos;Source&apos; to view Book</span>
                </Heading>
                {docs.map((doc, index) => (
                    <DocumentCard
                        key={index}
                        content={doc.content}
                        page={doc.page}
                        source={doc.source}
                    />
                ))}
            </VStack>
        </>
    );
};

export default DocumentsList;
