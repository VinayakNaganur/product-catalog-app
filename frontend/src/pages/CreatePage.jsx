import { 
	Box, 
	Button, 
	Container, 
	Heading, 
	Input, 
	useColorModeValue, 
	useToast, 
	VStack 
} from "@chakra-ui/react";
import { useState } from "react";
import { useProductStore } from "../store/product";

const CreatePage = () => {
	const [newProduct, setNewProduct] = useState({
		name: "",
		price: "",
		image: "",
	});
	const toast = useToast();
	const { createProduct } = useProductStore();

	const handleAddProduct = async () => {
		const { success, message } = await createProduct(newProduct);
		if (!success) {
			toast({
				title: "Error",
				description: message,
				status: "error",
				isClosable: true,
			});
		} else {
			toast({
				title: "Success",
				description: message,
				status: "success",
				isClosable: true,
			});
		}
		setNewProduct({ name: "", price: "", image: "" });
	};

	return (
		<Container maxW="lg" py={10}>
			<VStack spacing={6}>
				
				<Heading 
					as="h1" 
					size="xl" 
					textAlign="center" 
					bgGradient="linear(to-r, cyan.400, blue.500)" 
					bgClip="text"
				>
					Create New Product
				</Heading>

				<Box 
					w="full" 
					bg={useColorModeValue("whiteAlpha.800", "blackAlpha.600")}
					backdropFilter="blur(15px)"
					borderRadius="lg"
					boxShadow="xl"
					p={6}
				>
					<VStack spacing={4}>
						<Input
							placeholder="Product Name"
							name="name"
							value={newProduct.name}
							onChange={(e) => setNewProduct({ ...newProduct, name: e.target.value })}
							bg={useColorModeValue("gray.100", "gray.700")}
							_focus={{ borderColor: "blue.400", boxShadow: "0 0 10px rgba(0, 140, 255, 0.3)" }}
							rounded="md"
							size="lg"
						/>

						<Input
							placeholder="Price"
							name="price"
							type="number"
							value={newProduct.price}
							onChange={(e) => setNewProduct({ ...newProduct, price: e.target.value })}
							bg={useColorModeValue("gray.100", "gray.700")}
							_focus={{ borderColor: "blue.400", boxShadow: "0 0 10px rgba(0, 140, 255, 0.3)" }}
							rounded="md"
							size="lg"
						/>

						<Input
							placeholder="Image URL"
							name="image"
							value={newProduct.image}
							onChange={(e) => setNewProduct({ ...newProduct, image: e.target.value })}
							bg={useColorModeValue("gray.100", "gray.700")}
							_focus={{ borderColor: "blue.400", boxShadow: "0 0 10px rgba(0, 140, 255, 0.3)" }}
							rounded="md"
							size="lg"
						/>

						<Button 
							colorScheme="blue" 
							onClick={handleAddProduct} 
							w="full"
							size="lg"
							transition="0.3s"
							_hover={{ transform: "scale(1.05)" }}
						>
							Add Product
						</Button>
					</VStack>
				</Box>
			</VStack>
		</Container>
	);
};

export default CreatePage;
