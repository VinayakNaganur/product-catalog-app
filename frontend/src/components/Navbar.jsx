import { Button, Container, Flex, HStack, Text, useColorMode, Box, Spacer } from "@chakra-ui/react";
import { Link } from "react-router-dom";
import { PlusSquareIcon } from "@chakra-ui/icons";
import { IoMoon } from "react-icons/io5";
import { LuSun } from "react-icons/lu";

const Navbar = () => {
	const { colorMode, toggleColorMode } = useColorMode();

	return (
		<Box 
			bg={colorMode === "light" ? "rgba(255, 255, 255, 0.1)" : "rgba(0, 0, 0, 0.1)"} 
			backdropFilter="blur(10px)"
			boxShadow="lg"
			py={3} 
			position="sticky" 
			top={0} 
			zIndex={10}
		>
			<Container maxW="1140px" px={4}>
				<Flex h={16} alignItems="center">
					
					{/* Product Store Title (Left Aligned) */}
					<Text
						fontSize={{ base: "22px", sm: "26px" }}
						fontWeight="bold"
						textTransform="uppercase"
						bgGradient="linear(to-r, teal.400, blue.500, purple.600)"
						bgClip="text"
						transition="0.3s"
						_hover={{ transform: "scale(1.05)" }}
					>
						<Link to="/">Product Store 🛒</Link>
					</Text>

					<Spacer /> {/* Pushes everything to the right */}

					<HStack spacing={3}>
						<Link to="/create">
							<Button
								colorScheme="teal"
								variant="solid"
								leftIcon={<PlusSquareIcon />}
								size="sm" /* Reduced size */
								transition="0.3s"
								_hover={{ transform: "scale(1.05)" }}
							>
								Add
							</Button>
						</Link>

						<Button 
							onClick={toggleColorMode} 
							bg="gray.200"
							_dark={{ bg: "gray.700" }}
							size="sm" /* Reduced size */
							transition="0.3s"
							_hover={{ transform: "rotate(30deg)" }}
						>
							{colorMode === "light" ? <IoMoon size={16} /> : <LuSun size={18} />}
						</Button>
					</HStack>

				</Flex>
			</Container>
		</Box>
	);
};

export default Navbar;
