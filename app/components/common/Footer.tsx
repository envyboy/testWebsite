'use client';

import { Box, Container, Text, VStack } from '@chakra-ui/react';

export const Footer = () => {
  return (
    <Box as="footer" py={8} bg="gray.100">
      <Container maxW="container.xl">
        <VStack spacing={2} align="center">
          <Text>우리동네 CCTV</Text>
          <Text fontSize="sm" color="gray.600">© 2024 All rights reserved.</Text>
        </VStack>
      </Container>
    </Box>
  );
}; 