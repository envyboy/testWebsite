'use client';

import {
  Box,
  Container,
  VStack,
  Heading,
  Text,
  Icon,
  useColorModeValue,
  SimpleGrid,
  Card,
  CardBody,
  Image,
  Badge,
  HStack,
} from '@chakra-ui/react';
import { FaTools, FaBuilding } from 'react-icons/fa';

const INSTALLATION_CASES = [
  {
    title: "래미안 아파트 CCTV 교체",
    image: "/images/as/img1.jpeg",
    type: "아파트",
    description: "노후화된 CCTV 200대 교체 및 신규 설치",
    details: "지하주차장 사각지대 해소, Full HD 고화질 카메라 교체"
  },
  {
    title: "자이 아파트 통합 관제",
    image: "/images/as/img2.jpeg",
    type: "아파트",
    description: "통합관제시스템 구축 및 설치",
    details: "AI 기반 지능형 감시 시스템 도입"
  },
  {
    title: "푸르지오 시티 보안강화",
    image: "/images/as/img3.jpeg",
    type: "오피스텔",
    description: "출입구 및 주차장 보안 강화",
    details: "차량번호 인식 시스템 및 얼굴인식 시스템 설치"
  },
  {
    title: "힐스테이트 CCTV 증설",
    image: "/images/as/img4.jpeg",
    type: "아파트",
    description: "단지 내 사각지대 CCTV 증설",
    details: "놀이터, 정원 등 안전 취약구역 중점 보강"
  },
  {
    title: "더샵 스마트시티",
    image: "/images/as/img5.jpeg",
    type: "주상복합",
    description: "스마트시티 통합 보안 시스템",
    details: "IoT 기반 스마트 보안 시스템 구축"
  },
  {
    title: "SK VIEW 보안시스템",
    image: "/images/as/img6.jpeg",
    type: "아파트",
    description: "단지 전체 보안시스템 고도화",
    details: "4K Ultra HD 카메라 설치 및 나이트비전 시스템 도입"
  }
];

export default function Cases() {
  const bgGradient = useColorModeValue(
    'linear(to-r, teal.500, blue.500)',
    'linear(to-r, teal.200, blue.200)'
  );

  return (
    <Box>
      {/* 히어로 섹션 */}
      <Box
        bgGradient={bgGradient}
        color="white"
        py={20}
        mb={12}
      >
        <Container maxW="container.xl">
          <VStack spacing={6} align="center" textAlign="center">
            <Icon as={FaTools} boxSize={16} />
            <Heading size="2xl">CCTV 설치사례</Heading>
            <Text fontSize="xl" maxW="container.md">
              15년 전통의 전문 기술력으로<br />
              아파트 CCTV 설치를 책임집니다
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* 시공사례 그리드 */}
      <Container maxW="container.xl" py={8}>
        <SimpleGrid columns={{ base: 1, md: 2, lg: 3 }} spacing={8}>
          {INSTALLATION_CASES.map((caseItem, index) => (
            <Card key={index} overflow="hidden" variant="outline">
              <Image
                src={caseItem.image}
                alt={caseItem.title}
                height="240px"
                objectFit="cover"
              />
              <CardBody>
                <VStack align="start" spacing={3}>
                  <HStack spacing={2}>
                    <Badge colorScheme="teal">{caseItem.type}</Badge>
                    <Icon as={FaBuilding} color="gray.500" />
                  </HStack>
                  <Heading size="md">{caseItem.title}</Heading>
                  <Text fontWeight="bold" color="gray.700">
                    {caseItem.description}
                  </Text>
                  <Text fontSize="sm" color="gray.600">
                    {caseItem.details}
                  </Text>
                </VStack>
              </CardBody>
            </Card>
          ))}
        </SimpleGrid>
      </Container>
    </Box>
  );
} 