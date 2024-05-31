import { Box, Heading, VStack, Link, Text } from "@chakra-ui/react";

const Sidebar = () => {
  return (
    <Box bg="gray.100" p={4} borderRadius="md" boxShadow="md">
      <Heading size="md" mb={4}>
        Trending Articles
      </Heading>
      <VStack align="start" spacing={3}>
        <Link href="#" _hover={{ textDecoration: "none", color: "blue.500" }}>
          <Text>Article 1</Text>
        </Link>
        <Link href="#" _hover={{ textDecoration: "none", color: "blue.500" }}>
          <Text>Article 2</Text>
        </Link>
        <Link href="#" _hover={{ textDecoration: "none", color: "blue.500" }}>
          <Text>Article 3</Text>
        </Link>
        <Link href="#" _hover={{ textDecoration: "none", color: "blue.500" }}>
          <Text>Article 4</Text>
        </Link>
      </VStack>
    </Box>
  );
};

export default Sidebar;