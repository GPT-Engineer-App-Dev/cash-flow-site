import { Box, Container, Heading, Text } from "@chakra-ui/react";

const PrivacyPolicy = () => {
  return (
    <Container maxW="container.md" mt={5}>
      <Box bg="gray.200" p={4} borderRadius="md" boxShadow="md">
        <Heading size="lg" mb={4}>
          Privacy Policy
        </Heading>
        <Text>
          Your privacy is important to us. This privacy policy explains how we collect, use, and protect your personal information.
        </Text>
      </Box>
    </Container>
  );
};

export default PrivacyPolicy;