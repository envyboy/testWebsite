'use client';

import {
  Box,
  Flex,
  Button,
  Stack,
  useDisclosure,
  IconButton,
  Container,
  Menu,
  MenuButton,
  MenuList,
  MenuItem,
  useColorModeValue,
  Collapse,
  VStack,
  HStack,
  Text,
  Badge,
  Icon,
} from '@chakra-ui/react';
import { HamburgerIcon, CloseIcon, ChevronDownIcon, PhoneIcon } from '@chakra-ui/icons';
import Link from 'next/link';
import { FaShieldAlt, FaBuilding } from 'react-icons/fa';

const SERVICE_MENU = [
  { title: 'CCTV AS', href: '/services/as', badge: '24시간' },
//   { title: 'CCTV 가격', href: '/services/pricing', badge: '특가' },
  { title: 'CCTV 설치사례', href: '/services/cases' },
  { title: 'CCTV 정보', href: '/services/info' },
];

export const Logo = () => {
  const logoColor = useColorModeValue('teal.600', 'teal.300');
  const textColor = useColorModeValue('gray.800', 'white');
  
  return (
    <Link href="/" passHref>
      <HStack 
        spacing={3} 
        _hover={{ transform: 'scale(1.02)' }}
        transition="all 0.2s"
      >
        <Flex
          align="center"
          justify="center"
          bg={logoColor}
          w="40px"
          h="40px"
          borderRadius="lg"
          color="white"
        >
          <Icon as={FaBuilding} boxSize={5} />
        </Flex>
        <Box>
          <HStack spacing={2}>
            <Text
              fontSize="xl"
              fontWeight="bold"
              color={textColor}
              letterSpacing="tight"
            >
              제이제이 시스템
            </Text>
            <Badge 
              colorScheme="yellow" 
              fontSize="xs" 
              px={2} 
              py={1} 
              borderRadius="full"
            >
              아파트 전문
            </Badge>
          </HStack>
          <Text 
            fontSize="xs" 
            color="gray.500" 
            fontWeight="medium"
          >
            15년 전통 아파트 CCTV 전문기업
          </Text>
        </Box>
      </HStack>
    </Link>
  );
};

export const Header = () => {
  const { isOpen, onToggle } = useDisclosure();
  const bg = useColorModeValue('white', 'gray.800');
  const borderColor = useColorModeValue('gray.200', 'gray.700');

  return (
    <Box as="header" position="fixed" w="full" zIndex={50} bg={bg} borderBottom="1px" borderColor={borderColor}>
      <Container maxW="container.xl">
        <Flex py={4} align="center" justify="space-between">
          <Logo />

          {/* 모바일 메뉴 토글 버튼 */}
          <IconButton
            display={{ base: 'flex', md: 'none' }}
            onClick={onToggle}
            icon={isOpen ? <CloseIcon w={3} h={3} /> : <HamburgerIcon w={5} h={5} />}
            variant="ghost"
            aria-label="Toggle Navigation"
          />

          {/* 데스크톱 메뉴 */}
          <Stack
            display={{ base: 'none', md: 'flex' }}
            direction="row"
            spacing={8}
            align="center"
          >
            <Link href="/about" passHref>
              <Button variant="ghost" _hover={{ bg: 'teal.50' }}>회사소개</Button>
            </Link>
            
            <Menu>
              <MenuButton
                as={Button}
                rightIcon={<ChevronDownIcon />}
                variant="ghost"
                _hover={{ bg: 'teal.50' }}
              >
                서비스
              </MenuButton>
              <MenuList>
                {SERVICE_MENU.map((item) => (
                  <MenuItem key={item.href} as={Link} href={item.href}>
                    <HStack justify="space-between" width="full">
                      <Text>{item.title}</Text>
                      {item.badge && (
                        <Badge colorScheme="teal" variant="solid">
                          {item.badge}
                        </Badge>
                      )}
                    </HStack>
                  </MenuItem>
                ))}
              </MenuList>
            </Menu>

            <Button
              as={Link}
              href="/contact"
              colorScheme="teal"
              leftIcon={<PhoneIcon />}
            >
              접수하기
            </Button>
          </Stack>
        </Flex>

        {/* 모바일 메뉴 */}
        <Collapse in={isOpen} animateOpacity>
          <VStack
            p={4}
            display={{ md: 'none' }}
            spacing={4}
            divider={<Box borderColor={borderColor} />}
          >
            <Link href="/about" passHref style={{ width: '100%' }}>
              <Button variant="ghost" width="full" onClick={onToggle}>회사소개</Button>
            </Link>
            {SERVICE_MENU.map((item) => (
              <Link key={item.href} href={item.href} passHref style={{ width: '100%' }}>
                <Button variant="ghost" width="full" onClick={onToggle}>
                  <HStack justify="space-between" width="full">
                    <Text>{item.title}</Text>
                    {item.badge && (
                      <Badge colorScheme="teal" variant="solid">
                        {item.badge}
                      </Badge>
                    )}
                  </HStack>
                </Button>
              </Link>
            ))}
            <Button
              width="full"
              colorScheme="teal"
              leftIcon={<PhoneIcon />}
              as={Link}
              href="/contact"
              onClick={onToggle}
            >
              접수하기
            </Button>
          </VStack>
        </Collapse>
      </Container>
    </Box>
  );
}; 