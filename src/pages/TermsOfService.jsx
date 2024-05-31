import { Box, Container, Heading, Text } from "@chakra-ui/react";

const TermsOfService = () => {
  return (
    <Container maxW="container.md" mt={5}>
      <Box bg="gray.200" p={4} borderRadius="md" boxShadow="md">
        <Heading size="lg" mb={4}>
          Terms of Service
        </Heading>
        <Text>
          These terms of service outline the rules and regulations for the use of our website.
        </Text>
      </Box>
    </Container>
  );
};

export default TermsOfService;