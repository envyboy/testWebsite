'use client';

import { Box, VStack, IconButton, useColorModeValue } from '@chakra-ui/react';
import { PhoneIcon } from '@chakra-ui/icons';
import { RiKakaoTalkFill } from 'react-icons/ri';

export const FloatingButtons = () => {
  return (
    <Box
      position="fixed"
      bottom="4"
      right="4"
      zIndex={999}
      display="flex"
      flexDirection="column"
      gap={3}
    >
      <IconButton
        aria-label="전화 상담"
        icon={<PhoneIcon />}
        size="lg"
        isRound
        colorScheme="teal"
        onClick={() => window.location.href = 'tel:01065062763'}
        boxShadow="lg"
        width="56px"
        height="56px"
      />
      <IconButton
        aria-label="카카오톡 상담"
        icon={<RiKakaoTalkFill size="28px" />}
        size="lg"
        isRound
        bg="#FEE500"
        color="black"
        _hover={{ bg: '#FEE500', transform: 'scale(1.1)' }}
        onClick={() => window.open('https://pf.kakao.com/_XQVnn', '_blank')}
        boxShadow="lg"
        width="56px"
        height="56px"
      />
    </Box>
  );
}; 