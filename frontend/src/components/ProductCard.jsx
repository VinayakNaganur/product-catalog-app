import { DeleteIcon, EditIcon } from "@chakra-ui/icons";
import {
	Box,
	Button,
	Heading,
	HStack,
	IconButton,
	Image,
	Input,
	Modal,
	ModalBody,
	ModalCloseButton,
	ModalContent,
	ModalFooter,
	ModalHeader,
	ModalOverlay,
	Text,
	useColorModeValue,
	useDisclosure,
	useToast,
	VStack,
} from "@chakra-ui/react";
import { useProductStore } from "../store/product";
import { useState } from "react";

const ProductCard = ({ product }) => {
	const [updatedProduct, setUpdatedProduct] = useState(product);

	const cardBg = useColorModeValue("whiteAlpha.900", "blackAlpha.600");
	const textColor = useColorModeValue("gray.700", "gray.300");
	const btnHover = useColorModeValue("blue.500", "blue.400");

	const { deleteProduct, updateProduct } = useProductStore();
	const toast = useToast();
	const { isOpen, onOpen, onClose } = useDisclosure();

	const handleDeleteProduct = async (pid) => {
		const { success, message } = await deleteProduct(pid);
		if (!success) {
			toast({
				title: "Error",
				description: message,
				status: "error",
				duration: 3000,
				isClosable: true,
			});
		} else {
			toast({
				title: "Deleted",
				description: "Product removed successfully",
				status: "success",
				duration: 3000,
				isClosable: true,
			});
		}
	};

	const handleUpdateProduct = async (pid, updatedProduct) => {
		const { success, message } = await updateProduct(pid, updatedProduct);
		onClose();
		if (!success) {
			toast({
				title: "Error",
				description: message,
				status: "error",
				duration: 3000,
				isClosable: true,
			});
		} else {
			toast({
				title: "Updated",
				description: "Product updated successfully",
				status: "success",
				duration: 3000,
				isClosable: true,
			});
		}
	};

	return (
		<Box
			bg={cardBg}
			shadow="lg"
			rounded="lg"
			overflow="hidden"
			transition="all 0.3s"
			backdropFilter="blur(10px)"
			boxShadow="0 5px 15px rgba(0, 0, 0, 0.2)"
			_hover={{ transform: "translateY(-5px)", shadow: "2xl" }}
			w="100%"
			maxW="300px"
		>
			<Image src={product.image} alt={product.name} h={56} w="full" objectFit="cover" />

			<Box p={5}>
				<Heading as="h3" size="md" mb={2} color={textColor} fontWeight="bold">
					{product.name}
				</Heading>

				<Text fontWeight="bold" fontSize="xl" color={textColor} mb={4}>
					${product.price}
				</Text>

				<HStack spacing={3} justify="flex-end">
					<IconButton
						icon={<EditIcon />}
						onClick={onOpen}
						colorScheme="blue"
						transition="0.3s"
						_hover={{ bg: btnHover, transform: "scale(1.1)" }}
					/>
					<IconButton
						icon={<DeleteIcon />}
						onClick={() => handleDeleteProduct(product._id)}
						colorScheme="red"
						transition="0.3s"
						_hover={{ transform: "scale(1.1)" }}
					/>
				</HStack>
			</Box>

			{/* Modal for Updating Product */}
			<Modal isOpen={isOpen} onClose={onClose} isCentered>
				<ModalOverlay />

				<ModalContent>
					<ModalHeader>Update Product</ModalHeader>
					<ModalCloseButton />
					<ModalBody>
						<VStack spacing={4}>
							<Input
								placeholder="Product Name"
								name="name"
								value={updatedProduct.name}
								onChange={(e) => setUpdatedProduct({ ...updatedProduct, name: e.target.value })}
								bg={useColorModeValue("gray.100", "gray.700")}
								_focus={{ borderColor: "blue.400", boxShadow: "0 0 10px rgba(0, 140, 255, 0.3)" }}
								rounded="md"
								size="lg"
							/>
							<Input
								placeholder="Price"
								name="price"
								type="number"
								value={updatedProduct.price}
								onChange={(e) => setUpdatedProduct({ ...updatedProduct, price: e.target.value })}
								bg={useColorModeValue("gray.100", "gray.700")}
								_focus={{ borderColor: "blue.400", boxShadow: "0 0 10px rgba(0, 140, 255, 0.3)" }}
								rounded="md"
								size="lg"
							/>
							<Input
								placeholder="Image URL"
								name="image"
								value={updatedProduct.image}
								onChange={(e) => setUpdatedProduct({ ...updatedProduct, image: e.target.value })}
								bg={useColorModeValue("gray.100", "gray.700")}
								_focus={{ borderColor: "blue.400", boxShadow: "0 0 10px rgba(0, 140, 255, 0.3)" }}
								rounded="md"
								size="lg"
							/>
						</VStack>
					</ModalBody>

					<ModalFooter>
						<Button
							colorScheme="blue"
							mr={3}
							onClick={() => handleUpdateProduct(product._id, updatedProduct)}
							transition="0.3s"
							_hover={{ transform: "scale(1.05)" }}
						>
							Update
						</Button>
						<Button variant="ghost" onClick={onClose}>
							Cancel
						</Button>
					</ModalFooter>
				</ModalContent>
			</Modal>
		</Box>
	);
};

export default ProductCard;
 