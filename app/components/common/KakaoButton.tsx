'use client';

import { IconButton, Box, useColorModeValue } from '@chakra-ui/react';
import { RiKakaoTalkFill } from 'react-icons/ri';

export const KakaoButton = () => {
  return (
    <Box
      position="fixed"
      bottom="4"
      right="4"
      zIndex={999}
    >
      <IconButton
        aria-label="카카오톡 상담"
        icon={<RiKakaoTalkFill size="24px" />}
        size="lg"
        isRound
        bg="#FEE500"
        color="black"
        _hover={{ bg: '#FEE500', transform: 'scale(1.1)' }}
        onClick={() => window.open('https://pf.kakao.com/_xjAxbMG', '_blank')}
        boxShadow="lg"
      />
    </Box>
  );
}; 