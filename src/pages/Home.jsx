import { Box, Container, Flex, Heading, Text, VStack } from "@chakra-ui/react";
import Sidebar from "../components/Sidebar";

const Home = () => {
  return (
    <Container maxW="container.xl" mt={5}>
      <Flex direction={{ base: "column", md: "row" }} gap={6}>
        <Box flex="3">
          <Box bg="gray.200" p={4} borderRadius="md" boxShadow="md" mb={6}>
            <Heading size="lg" mb={2}>
              Featured Article
            </Heading>
            <Text>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
            </Text>
          </Box>
          <VStack spacing={6}>
            <Box bg="gray.200" p={4} borderRadius="md" boxShadow="md">
              <Heading size="md" mb={2}>
                Article Title 1
              </Heading>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </Text>
            </Box>
            <Box bg="gray.200" p={4} borderRadius="md" boxShadow="md">
              <Heading size="md" mb={2}>
                Article Title 2
              </Heading>
              <Text>
                Lorem ipsum dolor sit amet, consectetur adipiscing elit. Integer nec odio. Praesent libero. Sed cursus ante dapibus diam.
              </Text>
            </Box>
          </VStack>
        </Box>
        <Box flex="1">
          <Sidebar />
        </Box>
      </Flex>
    </Container>
  );
};

export default Home;