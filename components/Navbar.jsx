'use client'
import {
    Box,
    Flex,
    Text,
    Button,
    IconButton,
    Collapse,
    Menu,
    MenuButton,
    MenuList,
    MenuItem,
    useDisclosure,
    useBreakpointValue,
} from "@chakra-ui/react";
import { HamburgerIcon, CloseIcon } from "@chakra-ui/icons";
import { FaChevronDown } from "react-icons/fa";
import { useRouter } from "next/navigation";
// import { startDriver } from "./utils/driver";
import { useEffect } from "react";

const Navbar = () => {
    // useEffect(() => {
    //     startDriver()
    // })

    const router = useRouter();
    const { isOpen, onToggle } = useDisclosure();
    const display = useBreakpointValue({ base: "none", md: "flex" });

    return (
        <Box className="page-header" fontFamily="sans-serif" width="100vw">
            <Flex
                as="nav"
                align="center"
                justify="space-between"
                padding={2}
                bg="transparent"
                boxShadow="sm"
                position="sticky"
                top="0"
                zIndex="1000"

            >
                <Text cursor="pointer" className="gradient-clip" fontSize="xl" fontWeight="bold" onClick={() => { router.push('/') }}>
                    Islam365.online
                </Text>
                <Flex display={display}>
                    <Button color="gray.900" colorScheme="transparent" onClick={() => { router.push('/') }}>Home</Button>
                    <Menu >
                        <MenuButton className="about" colorScheme="transparent" as={Button} color="gray.900" rightIcon={<FaChevronDown />}>
                            About
                        </MenuButton>
                        <MenuList>
                            <MenuItem onClick={() => { router.push('/about/mission') }}>Mission and Vision</MenuItem>
                            <MenuItem onClick={() => { router.push('/about/about-us') }}>About Us</MenuItem>
                        </MenuList>
                    </Menu>
                    <Menu >
                        <MenuButton className="contact" colorScheme="transparent" as={Button} color="gray.900" rightIcon={<FaChevronDown />}>
                            Contact
                        </MenuButton>
                        <MenuList>
                            <MenuItem onClick={() => { router.push('/contact/contact-form') }}>Contact Form</MenuItem>
                            <Menu>
                                <MenuButton as={Button} colorScheme={'transparent'} color="black" rightIcon={<FaChevronDown />}>
                                    Social Media Links
                                </MenuButton>
                                <MenuList>
                                    <MenuItem onClick={() => { window.open('https://www.tiktok.com/@islam365online?lang=en', '_blank'); }}>TikTok</MenuItem>
                                    <MenuItem onClick={() => { window.open('https://www.facebook.com/profile.php?id=61561923396371', '_blank'); }}>Facebook</MenuItem>
                                    <MenuItem onClick={() => { window.location = 'mailto:islam365online@gmail.com'; }}>Gmail</MenuItem>
                                </MenuList>
                            </Menu>

                        </MenuList>
                    </Menu>
                    <Menu >
                        <MenuButton className="content" colorScheme="transparent" as={Button} color="gray.900" rightIcon={<FaChevronDown />}>
                            Age Wise Content
                        </MenuButton>
                        <MenuList>
                            <MenuItem onClick={() => { router.push('/children') }}>Children</MenuItem>
                            <MenuItem onClick={() => { router.push('/adults') }}>Adults</MenuItem>
                            <MenuItem onClick={() => { router.push('/elders') }}>Elders</MenuItem>
                        </MenuList>
                    </Menu>
                    <Menu >
                        <MenuButton
                            className="additional"
                            color="gray.900" colorScheme="transparent" as={Button} rightIcon={<FaChevronDown />}>
                            Additionals
                        </MenuButton>
                        <MenuList>
                            <MenuItem onClick={() => { router.push('/resources') }}>Resources</MenuItem>
                            <MenuItem onClick={() => { router.push('/prayer-times') }}>Prayer Times</MenuItem>
                            <MenuItem onClick={() => { router.push('/additionals/blog') }}>Blog</MenuItem>
                        </MenuList>
                    </Menu>
                </Flex>
                <IconButton
                    aria-label="Toggle navigation"
                    icon={isOpen ? <CloseIcon /> : <HamburgerIcon />}
                    display={{ base: "flex", md: "none" }}
                    onClick={onToggle}
                />
            </Flex>
            <Collapse in={isOpen} animateOpacity>
                <Box pb="4" display={{ md: "none" }}>
                    <Flex direction="column" gap="2" align="start">
                        <Button color="gray.900" colorScheme="transparent" onClick={() => { router.push('/') }}>Home</Button>
                        <Menu>
                            <MenuButton className="about" colorScheme="transparent" as={Button} color="gray.900" rightIcon={<FaChevronDown />}>
                                About
                            </MenuButton>
                            <MenuList>
                                <MenuItem onClick={() => { router.push('/about/mission') }}>Mission and Vision</MenuItem>
                                <MenuItem onClick={() => { router.push('/about/about-us') }}>About Us</MenuItem>
                            </MenuList>
                        </Menu>
                        <Menu>
                            <MenuButton className="contact" colorScheme="transparent" as={Button} color="gray.900" rightIcon={<FaChevronDown />}>
                                Contact
                            </MenuButton>
                            <MenuList>
                                <MenuItem onClick={() => { router.push('/contact/contact-form') }}>Contact Form</MenuItem>

                                <Menu>
                                    <MenuButton m={2} as={Button} color="black" colorScheme={'transparent'} rightIcon={<FaChevronDown />}>
                                        Social Media Links
                                    </MenuButton>
                                    <MenuList>
                                        <MenuItem onClick={() => { window.open('https://www.tiktok.com/@islam365online?lang=en', '_blank'); }}>TikTok</MenuItem>
                                        <MenuItem onClick={() => { window.open('https://www.facebook.com/profile.php?id=61561923396371', '_blank'); }}>Facebook</MenuItem>
                                        <MenuItem onClick={() => { window.location = 'mailto:islam365online@gmail.com'; }}>Gmail</MenuItem>
                                    </MenuList>
                                </Menu>


                            </MenuList>
                        </Menu>

                        <Menu >
                            <MenuButton className="content" colorScheme="transparent" as={Button} color="gray.900" rightIcon={<FaChevronDown />}>
                                Age Wise Content
                            </MenuButton>
                            <MenuList>
                                <MenuItem onClick={() => { router.push('/children') }}>Children</MenuItem>
                                <MenuItem onClick={() => { router.push('/adults') }}>Adults</MenuItem>
                                <MenuItem onClick={() => { router.push('/elders') }}>Elders</MenuItem>
                            </MenuList>
                        </Menu>
                        <Menu >
                            <MenuButton className="additional" colorScheme="transparent" as={Button} color="gray.900" rightIcon={<FaChevronDown />}>
                                Additionals
                            </MenuButton>
                            <MenuList>
                                <MenuItem onClick={() => { router.push('/resources') }}>Resources</MenuItem>
                                <MenuItem onClick={() => { router.push('/prayer-times') }}>Prayer Times</MenuItem>
                                <MenuItem onClick={() => { router.push('/additionals/blog') }}>Blog</MenuItem>
                            </MenuList>
                        </Menu>
                    </Flex>
                </Box>
            </Collapse>
        </Box>
    );
};

export default Navbar;
