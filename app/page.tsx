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
    title: "오피스 CCTV 설치",
    image: "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800",
    location: "서울 강남구"
  },
  {
    title: "주차장 감시 시스템",
    image: "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=800",
    location: "인천 송도"
  },
  {
    title: "상가 보안 시스템",
    image: "https://images.unsplash.com/photo-1557597883-aac6c4f06b09?w=800",
    location: "부산 해운대"
  },
  {
    title: "아파트 방범 카메라",
    image: "https://images.unsplash.com/photo-1557597883-aac6c4f06b09?w=800",
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
        color="white"
        py={{ base: 20, md: 28 }}
        px={4}
      >
        <Container maxW="container.xl">
          <SimpleGrid columns={{ base: 1, md: 2 }} spacing={10}>
            <VStack align="flex-start" spacing={6}>
              <Badge
                colorScheme="yellow"
                fontSize="lg"
                px={4}
                py={2}
                borderRadius="full"
              >
                아파트 CCTV 전문기업
              </Badge>
              <Heading size="2xl" lineHeight="shorter">
                아파트 단지를 위한<br />
                스마트 통합 보안 솔루션
              </Heading>
              <Text fontSize="xl">
                15년 아파트 CCTV 설치 경험과 24시간 긴급출동 AS로<br />
                입주민의 안전한 생활을 책임집니다
              </Text>
              <ButtonGroup spacing={4}>
                <Button
                  size="lg"
                  colorScheme="white"
                  variant="solid"
                  leftIcon={<PhoneIcon />}
                >
                  아파트 무료 견적
                </Button>
                <Button
                  size="lg"
                  colorScheme="whiteAlpha"
                  variant="outline"
                  leftIcon={<FaBuilding />}
                >
                  아파트 시공사례
                </Button>
              </ButtonGroup>
              <HStack spacing={4} pt={4}>
                <Tag size="lg" variant="subtle" colorScheme="whiteAlpha">
                  <TagLeftIcon as={FaCheckCircle} />
                  <TagLabel>실시간 원격 관제</TagLabel>
                </Tag>
                <Tag size="lg" variant="subtle" colorScheme="whiteAlpha">
                  <TagLeftIcon as={FaClock} />
                  <TagLabel>24시간 긴급출동</TagLabel>
                </Tag>
                <Tag size="lg" variant="subtle" colorScheme="whiteAlpha">
                  <TagLeftIcon as={FaTools} />
                  <TagLabel>무상 AS 2년</TagLabel>
                </Tag>
              </HStack>
            </VStack>
            <Box display={{ base: 'none', md: 'block' }}>
              <Image
                src="/images/apartment-cctv.jpg"
                alt="아파트 CCTV 설치"
                borderRadius="xl"
                shadow="2xl"
              />
            </Box>
          </SimpleGrid>
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

      {/* 통계 섹션 */}
      <Container maxW="container.xl" py={16}>
        <StatGroup>
          {STATS.map((stat, index) => (
            <Stat key={index} textAlign="center">
              <StatLabel fontSize="lg">{stat.label}</StatLabel>
              <StatNumber fontSize="4xl" color="teal.500">
                {stat.number}
                <Text as="span" fontSize="xl" color="gray.500">
                  {stat.unit}
                </Text>
              </StatNumber>
            </Stat>
          ))}
        </StatGroup>
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
          <Heading textAlign="center">최근 설치 사례</Heading>
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

      {/* 문의하기 버튼 */}
      <Box position="fixed" right={4} bottom={4} zIndex={20}>
        <VStack spacing={4}>
          <Button
            colorScheme="teal"
            size="lg"
            leftIcon={<EmailIcon />}
            onClick={() => window.location.href = 'mailto:seoncnc@gmail.com'}
            shadow="lg"
          >
            이메일 문의
          </Button>
          <Button
            colorScheme="teal"
            size="lg"
            leftIcon={<PhoneIcon />}
            onClick={() => window.location.href = 'tel:010-6836-8048'}
            shadow="lg"
          >
            전화 상담
          </Button>
        </VStack>
      </Box>
    </Box>
  );
}
