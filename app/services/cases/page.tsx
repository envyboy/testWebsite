'use client';

import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Image,
  Card,
  CardBody,
  Badge,
  Flex,
  Tag,
  Grid,
  GridItem,
} from '@chakra-ui/react';

const INSTALLATION_CASES = [
  {
    title: "대형 쇼핑몰 보안 시스템",
    location: "서울 강남구",
    description: "200개 이상의 카메라로 전 구역 모니터링 시스템 구축",
    images: [
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800",
      "https://images.unsplash.com/photo-1557597883-aac6c4f06b09?w=800"
    ],
    tags: ["대규모", "AI 감지", "원격 모니터링"],
    specs: [
      "8K 고화질 카메라 32대",
      "AI 얼굴 인식 시스템",
      "차량 번호 인식 시스템",
      "365일 녹화 시스템"
    ]
  },
  {
    title: "아파트 단지 방범 시스템",
    location: "인천 송도",
    description: "지하주차장 및 주요 출입구 통합 관제 시스템",
    images: [
      "https://images.unsplash.com/photo-1590856029826-c7a73142bbf1?w=800",
      "https://images.unsplash.com/photo-1557597883-aac6c4f06b09?w=800"
    ],
    tags: ["주거시설", "야간감시", "주차관제"],
    specs: [
      "적외선 카메라 64대",
      "차량 출입 통제 시스템",
      "비상벨 연동",
      "관제실 통합 모니터링"
    ]
  },
  {
    title: "물류창고 보안 시스템",
    location: "경기도 용인",
    description: "대규모 물류창고 내외부 통합 보안 시스템",
    images: [
      "https://images.unsplash.com/photo-1557597774-9d273605dfa9?w=800",
      "https://images.unsplash.com/photo-1557597883-aac6c4f06b09?w=800"
    ],
    tags: ["물류", "화재감지", "동작감지"],
    specs: [
      "열화상 카메라 시스템",
      "동작 감지 센서",
      "비상 경보 시스템",
      "24시간 모니터링"
    ]
  }
];

export default function InstallationCases() {
  return (
    <Box py={10}>
      <Container maxW="container.xl">
        <VStack spacing={12} align="stretch">
          {/* 헤더 섹션 */}
          <Box textAlign="center">
            <Heading size="2xl" mb={4}>시공 사례</Heading>
            <Text fontSize="xl" color="gray.600">
              다양한 환경에서의 성공적인 설치 사례를 소개합니다
            </Text>
          </Box>

          {/* 시공 사례 목록 */}
          <SimpleGrid columns={[1, 1, 1]} spacing={10}>
            {INSTALLATION_CASES.map((case_, index) => (
              <Card key={index} overflow="hidden">
                <CardBody>
                  <VStack spacing={6} align="stretch">
                    <Flex justify="space-between" align="center">
                      <Box>
                        <Heading size="lg">{case_.title}</Heading>
                        <Text color="gray.500">{case_.location}</Text>
                      </Box>
                      <Flex gap={2}>
                        {case_.tags.map((tag, i) => (
                          <Tag key={i} colorScheme="teal">{tag}</Tag>
                        ))}
                      </Flex>
                    </Flex>

                    <Text>{case_.description}</Text>

                    {/* 이미지 그리드 */}
                    <Grid templateColumns="repeat(2, 1fr)" gap={4}>
                      {case_.images.map((img, i) => (
                        <GridItem key={i}>
                          <Image
                            src={img}
                            alt={`Installation case ${i + 1}`}
                            borderRadius="lg"
                            objectFit="cover"
                            height="300px"
                            width="100%"
                          />
                        </GridItem>
                      ))}
                    </Grid>

                    {/* 설치 스펙 */}
                    <Box bg="gray.50" p={4} borderRadius="lg">
                      <Text fontWeight="bold" mb={2}>설치 스펙</Text>
                      <SimpleGrid columns={[1, 2]} spacing={2}>
                        {case_.specs.map((spec, i) => (
                          <Text key={i} fontSize="sm">• {spec}</Text>
                        ))}
                      </SimpleGrid>
                    </Box>
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