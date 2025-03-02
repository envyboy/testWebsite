'use client';

import { 
  Box, 
  Container, 
  Heading, 
  Text, 
  SimpleGrid, 
  Button, 
  VStack,
  HStack,
  Image,
  Badge,
  Icon,
  useColorModeValue,
  Card,
  CardBody,
  Stack,
  Divider,
  ButtonGroup,
  Stat,
  StatLabel,
  StatNumber,
  StatGroup,
  Flex,
  Tag,
  TagLabel,
  TagLeftIcon,
} from '@chakra-ui/react';
import { PhoneIcon, EmailIcon, CheckCircleIcon, StarIcon } from '@chakra-ui/icons';
import { FaCamera, FaShieldAlt, FaUserShield, FaClock, FaBuilding, FaCheckCircle, FaTools, FaMobile } from 'react-icons/fa';
import Link from 'next/link';

const SAMPLE_PRODUCTS = [
  {
    title: "하이크비전 Turbo HD 8.0",
    description: "8MP 고해상도 CCTV 시스템",
    badge: "신제품"
  },
  {
    title: "스마트 AI CCTV",
    description: "딥러닝 기반 지능형 감시 시스템",
    badge: "인기"
  }
];

const SAMPLE_INSTALLATIONS = [
  {
    title: "CCTV 긴급 출동 AS",
    image: "https://images.unsplash.com/photo-1580983218628-b231f6b4fa5f",
    location: "서울 강남구"
  },
  {
    title: "CCTV 정기 점검",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9",
    location: "인천 송도"
  },
  {
    title: "카메라 각도 조정",
    image: "https://images.unsplash.com/photo-1557597883-aac6c4f06b09",
    location: "부산 해운대"
  },
  {
    title: "녹화기 장애 처리",
    image: "https://images.unsplash.com/photo-1557597516-da75c0c6d3fb",
    location: "대구 수성구"
  }
];

const STATS = [
  { label: "설치 실적", number: "1,000+", unit: "건" },
  { label: "전문 엔지니어", number: "50+", unit: "명" },
  { label: "고객 만족도", number: "98", unit: "%" },
  { label: "연중무휴", number: "24/7", unit: "시간" },
];

const FEATURES = [
  {
    icon: FaCamera,
    title: "최신 장비",
    description: "고화질 4K/8K 카메라"
  },
  {
    icon: FaShieldAlt,
    title: "완벽한 보안",
    description: "AI 기반 감시 시스템"
  },
  {
    icon: FaUserShield,
    title: "전문 설치",
    description: "숙련된 전문가 시공"
  },
  {
    icon: FaClock,
    title: "신속 대응",
    description: "24시간 긴급출동"
  }
];

const APARTMENT_FEATURES = [
  {
    icon: FaBuilding,
    title: "단지 통합 관제",
    description: "지하주차장, 놀이터, 주출입구 등 단지 전체 통합 모니터링"
  },
  {
    icon: FaShieldAlt,
    title: "24시간 보안",
    description: "경비실 연동 및 실시간 알림으로 신속한 대응 가능"
  },
  {
    icon: FaTools,
    title: "신속한 AS",
    description: "24시간 긴급출동 서비스로 즉시 장애 처리"
  },
  {
    icon: FaMobile,
    title: "스마트폰 연동",
    description: "입주민 전용 앱으로 언제 어디서나 모니터링"
  }
];

export default function Home() {
  const bgGradient = useColorModeValue(
    'linear(to-r, teal.500, blue.500)',
    'linear(to-r, teal.200, blue.200)'
  );

  return (
    <Box>
      {/* Hero 섹션 */}
      <Box
        bgGradient={bgGradient}
        bgImage="url('https://images.pexels.com/photos/430208/pexels-photo-430208.jpeg')"
        bgBlendMode="overlay"
        bgSize="cover"
        bgPosition="center"
        color="white"
        py={{ base: 16, md: 28 }}
        px={{ base: 4, md: 8 }}
        position="relative"
        _before={{
          content: '""',
          position: 'absolute',
          top: 0,
          left: 0,
          right: 0,
          bottom: 0,
          bg: 'blackAlpha.600',
          zIndex: 0,
        }}
      >
        <Container maxW="container.xl" position="relative" zIndex={1}>
          <SimpleGrid columns={{ base: 1, md: 1 }} spacing={{ base: 8, md: 10 }}>
            <VStack align={{ base: "center", md: "flex-start" }} spacing={6}>
              <Badge
                colorScheme="yellow"
                fontSize={{ base: "lg", md: "xl" }}
                px={6}
                py={3}
                borderRadius="full"
              >
                아파트·오피스텔 CCTV AS 전문기업
              </Badge>
              <Heading 
                size={{ base: "xl", md: "2xl" }} 
                lineHeight="shorter"
                textAlign={{ base: "center", md: "left" }}
              >
                24시간 365일<br />
                CCTV 긴급출동 AS
              </Heading>
              <Text 
                fontSize={{ base: "lg", md: "xl" }}
                textAlign={{ base: "center", md: "left" }}
              >
                15년 CCTV AS 전문 기술력으로<br />
                신속하고 정확한 장애 처리,<br />
                전문 엔지니어가 책임집니다
              </Text>
              <Stack
                direction={{ base: "column", sm: "row" }}
                spacing={4}
                w={{ base: "full", sm: "auto" }}
                justify={{ base: "center", md: "flex-start" }}
              >
                <Button
                  size="lg"
                  colorScheme="white"
                  variant="solid"
                  leftIcon={<PhoneIcon />}
                  w={{ base: "full", sm: "auto" }}
                  onClick={() => window.location.href = 'tel:1688-8048'}
                >
                  긴급 출동 요청
                </Button>
                <Button
                  size="lg"
                  colorScheme="whiteAlpha"
                  variant="outline"
                  leftIcon={<FaTools />}
                  w={{ base: "full", sm: "auto" }}
                  as={Link}
                  href="/services/as"
                >
                  AS 서비스 안내
                </Button>
              </Stack>
              <Stack
                direction={{ base: "column", sm: "row" }}
                spacing={4}
                pt={4}
                w={{ base: "full", sm: "auto" }}
                justify={{ base: "center", md: "flex-start" }}
              >
                <Tag size="lg" variant="subtle" colorScheme="whiteAlpha">
                  <TagLeftIcon as={FaClock} />
                  <TagLabel>24시간 긴급출동</TagLabel>
                </Tag>
                <Tag size="lg" variant="subtle" colorScheme="whiteAlpha">
                  <TagLeftIcon as={FaTools} />
                  <TagLabel>당일 AS 처리</TagLabel>
                </Tag>
                <Tag size="lg" variant="subtle" colorScheme="whiteAlpha">
                  <TagLeftIcon as={FaCheckCircle} />
                  <TagLabel>무상 AS 2년</TagLabel>
                </Tag>
              </Stack>
            </VStack>
          </SimpleGrid>
        </Container>
      </Box>

      {/* AS 서비스 특징 */}
      <Container maxW="container.xl" py={16}>
        <SimpleGrid columns={{ base: 1, md: 3 }} spacing={10}>
          <Card>
            <CardBody>
              <VStack spacing={4} align="flex-start">
                <Icon as={FaClock} boxSize={8} color="teal.500" />
                <Heading size="md">24시간 긴급출동</Heading>
                <Text>
                  365일 24시간 대기 중인 전문 엔지니어가 신속하게 출동하여 문제를 해결해드립니다.
                </Text>
              </VStack>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <VStack spacing={4} align="flex-start">
                <Icon as={FaTools} boxSize={8} color="teal.500" />
                <Heading size="md">전문 기술력</Heading>
                <Text>
                  15년 경력의 CCTV 전문가들이 정확한 진단과 수리로 완벽한 AS를 보장합니다.
                </Text>
              </VStack>
            </CardBody>
          </Card>
          <Card>
            <CardBody>
              <VStack spacing={4} align="flex-start">
                <Icon as={FaShieldAlt} boxSize={8} color="teal.500" />
                <Heading size="md">품질 보증</Heading>
                <Text>
                  모든 수리에 대해 6개월 품질보증을 제공하며, 신규 설치 시 2년 무상 AS를 지원합니다.
                </Text>
              </VStack>
            </CardBody>
          </Card>
        </SimpleGrid>
      </Container>

      {/* 통계 섹션 */}
      <Box bg={useColorModeValue('gray.50', 'gray.800')} py={16}>
        <Container maxW="container.xl">
          <StatGroup>
            <Stat>
              <StatLabel>연간 AS 처리</StatLabel>
              <StatNumber>5,000+</StatNumber>
              <Text>건</Text>
            </Stat>
            <Stat>
              <StatLabel>AS 만족도</StatLabel>
              <StatNumber>98%</StatNumber>
              <Text>고객 만족</Text>
            </Stat>
            <Stat>
              <StatLabel>평균 출동시간</StatLabel>
              <StatNumber>30분</StatNumber>
              <Text>이내</Text>
            </Stat>
            <Stat>
              <StatLabel>전문 엔지니어</StatLabel>
              <StatNumber>50+</StatNumber>
              <Text>명</Text>
            </Stat>
          </StatGroup>
        </Container>
      </Box>

      {/* 아파트 특화 서비스 섹션 */}
      <Container maxW="container.xl" py={16}>
        <VStack spacing={12}>
          <Heading textAlign="center">
            아파트 CCTV 특화 서비스
          </Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
            {APARTMENT_FEATURES.map((feature, index) => (
              <Card key={index}>
                <CardBody>
                  <VStack spacing={4}>
                    <Icon as={feature.icon} boxSize={8} color="teal.500" />
                    <Heading size="md">{feature.title}</Heading>
                    <Text color="gray.600" textAlign="center">
                      {feature.description}
                    </Text>
                  </VStack>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>

      {/* 특징 섹션 */}
      <Box bg="gray.50" py={16}>
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
            {FEATURES.map((feature, index) => (
              <Card key={index} variant="elevated" height="full">
                <CardBody>
                  <VStack spacing={4}>
                    <Icon as={feature.icon} boxSize={10} color="teal.500" />
                    <Heading size="md">{feature.title}</Heading>
                    <Text color="gray.600" textAlign="center">
                      {feature.description}
                    </Text>
                  </VStack>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>
        </Container>
      </Box>

      {/* 설치 사례 섹션 */}
      <Container maxW="container.xl" py={16}>
        <VStack spacing={12}>
          <Heading textAlign="center">최근 A/S 사례</Heading>
          <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8}>
            {SAMPLE_INSTALLATIONS.map((install, index) => (
              <Card key={index} overflow="hidden">
                <Image
                  src={install.image}
                  alt={install.title}
                  height="200px"
                  objectFit="cover"
                />
                <CardBody>
                  <VStack align="start" spacing={2}>
                    <Heading size="md">{install.title}</Heading>
                    <Text color="gray.500">{install.location}</Text>
                    <HStack>
                      <Icon as={CheckCircleIcon} color="green.500" />
                      <Text fontSize="sm">설치 완료</Text>
                    </HStack>
                  </VStack>
                </CardBody>
              </Card>
            ))}
          </SimpleGrid>
        </VStack>
      </Container>
    </Box>
  );
}
