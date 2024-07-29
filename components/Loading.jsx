import Image from 'next/image';
import dots from '../public/Pulse@1x-1.0s-200px-200px.gif';
import { Box } from '@chakra-ui/react';

export default function Loading() {
    return (
        <Box
            display="flex"
            height="100vh"
            width="100vw"
            justifyContent="center"
            alignItems="center"
        >
            <Box
                width="100px"
                height="100px"
                position="relative"
            >
                <Image
                    src={dots}
                    alt="Loading animation"
                    layout="fill"
                    objectFit="contain"
                />
            </Box>
        </Box>
    );
}
