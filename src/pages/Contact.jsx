import { Box, Container, Heading, Text } from "@chakra-ui/react";

const Contact = () => {
  return (
    <Container maxW="container.md" mt={5}>
      <Box bg="gray.200" p={4} borderRadius="md" boxShadow="md">
        <Heading size="lg" mb={4}>
          Contact Us
        </Heading>
        <Text>
          For inquiries, please email us at contact@financialtimes.com or call us at (123) 456-7890.
        </Text>
      </Box>
    </Container>
  );
};

export default Contact;