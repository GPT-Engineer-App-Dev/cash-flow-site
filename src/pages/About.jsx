import { Box, Container, Heading, Text } from "@chakra-ui/react";

const About = () => {
  return (
    <Container maxW="container.md" mt={5}>
      <Box bg="gray.200" p={4} borderRadius="md" boxShadow="md">
        <Heading size="lg" mb={4}>
          About Us
        </Heading>
        <Text>
          Financial Times is a leading news organization that provides in-depth analysis and coverage of global events, business, markets, and technology.
        </Text>
      </Box>
    </Container>
  );
};

export default About;