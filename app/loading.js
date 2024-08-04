import Image from 'next/image';
import dots from '../public/Pulse@1x-1.0s-200px-200px.gif';
import { Box } from '@chakra-ui/react';

export default function Loading() {
    return (
        <Box
            display="flex"
            height="auto"
            width="auto"
            justifyContent="center"
            alignItems="center"
        >
            <Box
                width="auto"
                height="auto"
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
