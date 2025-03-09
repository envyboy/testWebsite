'use client';

import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Image,
  Divider,
  List,
  ListItem,
  ListIcon,
  Card,
  CardBody,
  Icon,
  Stack,
  useColorModeValue,
  Flex,
  Badge,
  HStack,
} from '@chakra-ui/react';
import { CheckCircleIcon, StarIcon } from '@chakra-ui/icons';
import { FaUsers, FaAward, FaCertificate, FaHandshake } from 'react-icons/fa';

const COMPANY_VALUES = [
  {
    icon: FaUsers,
    title: "고객 중심",
    description: "고객의 니즈를 최우선으로 생각합니다"
  },
  {
    icon: FaAward,
    title: "전문성",
    description: "체계적인 교육을 통한 전문 인력 양성"
  },
  {
    icon: FaCertificate,
    title: "품질 보증",
    description: "엄격한 품질관리로 최상의 서비스 제공"
  },
  {
    icon: FaHandshake,
    title: "신뢰성",
    description: "약속을 지키는 정직한 서비스"
  }
];

const HISTORY = [
  { year: "2023", event: "연간 1,000건 이상 설치 달성", badge: "신기록" },
  { year: "2022", event: "기술혁신 중소기업 인증", badge: "인증" },
  { year: "2020", event: "서울시 우수기업 선정", badge: "수상" },
  { year: "2015", event: "CCTV 전문기업 설립", badge: "설립" }
];

export default function About() {
  const bgGradient = useColorModeValue(
    'linear(to-r, gray.100, white)',
    'linear(to-r, gray.700, gray.900)'
  );

  return (
    <Box>
      {/* 히어로 섹션 */}
      <Box
        bg={useColorModeValue('teal.500', 'teal.200')}
        color="white"
        py={20}
        mb={16}
      >
        <Container maxW="container.xl">
          <VStack spacing={6} align="center" textAlign="center">
            <Heading size="2xl">
              최고의 보안 솔루션을 제공하는<br />
              제이제이 시스템
            </Heading>
            <Text fontSize="xl" maxW="container.md">
              10년 이상의 전문성과 기술력으로 고객의 안전을 책임지는
              최고의 파트너가 되겠습니다.
            </Text>
          </VStack>
        </Container>
      </Box>

      <Container maxW="container.xl">
        <VStack spacing={16}>
          {/* 회사 가치 */}
          <Box w="full">
            <Heading textAlign="center" mb={12}>우리의 가치</Heading>
            <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
              {COMPANY_VALUES.map((value, index) => (
                <Card
                  key={index}
                  height="full"
                  variant="elevated"
                  _hover={{ transform: 'translateY(-5px)', transition: '0.3s' }}
                >
                  <CardBody>
                    <VStack spacing={4}>
                      <Icon as={value.icon} boxSize={10} color="teal.500" />
                      <Heading size="md">{value.title}</Heading>
                      <Text textAlign="center" color="gray.600">
                        {value.description}
                      </Text>
                    </VStack>
                  </CardBody>
                </Card>
              ))}
            </SimpleGrid>
          </Box>

          {/* 연혁 섹션 */}
          <Box w="full" bg={useColorModeValue('gray.50', 'gray.700')} p={8} borderRadius="xl">
            <Heading textAlign="center" mb={8}>회사 연혁</Heading>
            <VStack spacing={4} align="stretch">
              {HISTORY.map((item, index) => (
                <Card key={index} variant="filled" bg={useColorModeValue('white', 'gray.800')}>
                  <CardBody>
                    <Flex align="center" justify="space-between">
                      <HStack spacing={4}>
                        <Text fontWeight="bold" fontSize="xl" color="teal.500">
                          {item.year}
                        </Text>
                        <Text fontSize="lg">{item.event}</Text>
                      </HStack>
                      <Badge colorScheme="teal">{item.badge}</Badge>
                    </Flex>
                  </CardBody>
                </Card>
              ))}
            </VStack>
          </Box>

          {/* 비전 섹션 */}
          <Box 
            w="full" 
            bgGradient={bgGradient}
            p={12} 
            borderRadius="xl"
            textAlign="center"
          >
            <VStack spacing={6}>
              <Heading>Our Vision</Heading>
              <Text fontSize="lg" maxW="container.md" lineHeight="tall">
                최신 기술과 전문성을 바탕으로 고객의 안전과 보안을 책임지는 최고의 파트너가 되겠습니다.
                24시간 365일 신속하고 정확한 서비스로 고객만족을 실현하며, 
                지속적인 기술 혁신을 통해 보안 산업의 미래를 선도하겠습니다.
              </Text>
              <HStack spacing={4}>
                <Icon as={StarIcon} color="teal.500" boxSize={6} />
                <Icon as={StarIcon} color="teal.500" boxSize={6} />
                <Icon as={StarIcon} color="teal.500" boxSize={6} />
              </HStack>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
} 