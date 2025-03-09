'use client';

import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Card,
  CardBody,
  Icon,
  List,
  ListItem,
  ListIcon,
  Button,
  useColorModeValue,
  Flex,
  Badge,
  Stat,
  StatLabel,
  StatNumber,
  StatGroup,
  HStack,
  Divider,
  Stack,
} from '@chakra-ui/react';
import { CheckCircleIcon, WarningIcon, RepeatIcon, TimeIcon, PhoneIcon } from '@chakra-ui/icons';
import { FaTools, FaHeadset, FaUserCog, FaShieldAlt } from 'react-icons/fa';

const AS_SERVICES = [
  {
    icon: FaTools,
    title: "긴급 출동 서비스",
    description: "24시간 365일 신속한 출동 서비스를 제공합니다.",
    badge: "24/7"
  },
  {
    icon: RepeatIcon,
    title: "정기 점검",
    description: "월 1회 정기적인 시스템 점검 및 유지보수",
    badge: "정기"
  },
  {
    icon: FaHeadset,
    title: "원격 지원",
    description: "전문 상담원의 실시간 원격 문제 해결",
    badge: "실시간"
  },
  {
    icon: FaUserCog,
    title: "전문가 진단",
    description: "CCTV 전문가의 정확한 문제 진단 및 해결",
    badge: "전문"
  }
];

const AS_STATS = [
  { label: "평균 출동시간", value: "30분", desc: "이내" },
  { label: "월 평균 AS건수", value: "500", desc: "건" },
  { label: "AS 만족도", value: "98", desc: "%" },
  { label: "전문 엔지니어", value: "50", desc: "명" },
];

const AS_PROCESS = [
  {
    step: "AS 접수",
    description: "전화 또는 온라인으로 AS를 신청합니다.",
    icon: PhoneIcon
  },
  {
    step: "증상 확인",
    description: "전문 상담원이 문제 상황을 파악합니다.",
    icon: FaHeadset
  },
  {
    step: "엔지니어 출동",
    description: "숙련된 전문가가 현장을 방문합니다.",
    icon: FaTools
  },
  {
    step: "수리 완료",
    description: "철저한 점검 후 수리를 완료합니다.",
    icon: CheckCircleIcon
  }
];

export default function ASService() {
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
            <Icon as={FaShieldAlt} boxSize={16} />
            <Heading size="2xl">CCTV A/S 서비스</Heading>
            <Text fontSize="xl" maxW="container.md">
              24시간 365일, 전문 엔지니어가 신속하게 해결해드립니다
            </Text>
            <Button
              size="lg"
              colorScheme="white"
              variant="outline"
              leftIcon={<PhoneIcon />}
              onClick={() => window.location.href = 'tel:010-6506-2763'}
              _hover={{ bg: 'whiteAlpha.200' }}
            >
              긴급 출동 요청
            </Button>
          </VStack>
        </Container>
      </Box>

      <Container maxW="container.xl">
        <VStack spacing={16}>
          {/* 통계 섹션 */}
          <Box w="full">
            <StatGroup>
              {AS_STATS.map((stat, index) => (
                <Stat key={index} textAlign="center">
                  <StatLabel fontSize="lg">{stat.label}</StatLabel>
                  <StatNumber fontSize="4xl" color="teal.500">
                    {stat.value}
                    <Text as="span" fontSize="xl" color="gray.500">
                      {stat.desc}
                    </Text>
                  </StatNumber>
                </Stat>
              ))}
            </StatGroup>
          </Box>

          {/* AS 서비스 종류 */}
          <Box w="full">
            <VStack spacing={8}>
              <Heading textAlign="center">서비스 안내</Heading>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8} w="full">
                {AS_SERVICES.map((service, index) => (
                  <Card
                    key={index}
                    variant="outline"
                    _hover={{ transform: 'translateY(-4px)', shadow: 'lg' }}
                    transition="all 0.2s"
                  >
                    <CardBody>
                      <VStack spacing={4}>
                        <Badge colorScheme="teal" fontSize="sm" px={3} py={1}>
                          {service.badge}
                        </Badge>
                        <Icon as={service.icon} boxSize={8} color="teal.500" />
                        <Heading size="md">{service.title}</Heading>
                        <Text textAlign="center" color="gray.600">
                          {service.description}
                        </Text>
                      </VStack>
                    </CardBody>
                  </Card>
                ))}
              </SimpleGrid>
            </VStack>
          </Box>

          {/* AS 프로세스 */}
          <Box w="full" bg="gray.50" p={8} borderRadius="xl">
            <VStack spacing={8}>
              <Heading>AS 처리 절차</Heading>
              <SimpleGrid columns={{ base: 1, md: 2, lg: 4 }} spacing={8} w="full">
                {AS_PROCESS.map((process, index) => (
                  <Card key={index} variant="filled">
                    <CardBody>
                      <VStack spacing={4}>
                        <Flex
                          bg="teal.500"
                          color="white"
                          w={12}
                          h={12}
                          borderRadius="full"
                          align="center"
                          justify="center"
                        >
                          <Icon as={process.icon} boxSize={6} />
                        </Flex>
                        <Stack spacing={2} textAlign="center">
                          <Text fontWeight="bold" fontSize="lg">
                            {index + 1}. {process.step}
                          </Text>
                          <Text color="gray.600">
                            {process.description}
                          </Text>
                        </Stack>
                      </VStack>
                    </CardBody>
                  </Card>
                ))}
              </SimpleGrid>
            </VStack>
          </Box>

          {/* 주의사항 */}
          <Box
            w="full"
            bg="orange.50"
            p={8}
            borderRadius="xl"
            border="1px"
            borderColor="orange.200"
          >
            <VStack spacing={4} align="stretch">
              <HStack spacing={2}>
                <Icon as={WarningIcon} color="orange.500" boxSize={6} />
                <Heading size="md">AS 신청 시 주의사항</Heading>
              </HStack>
              <List spacing={3}>
                <ListItem>
                  <ListIcon as={TimeIcon} color="orange.500" />
                  긴급 출동의 경우 추가 비용이 발생할 수 있습니다.
                </ListItem>
                <ListItem>
                  <ListIcon as={TimeIcon} color="orange.500" />
                  보증기간이 지난 제품은 수리비가 청구됩니다.
                </ListItem>
                <ListItem>
                  <ListIcon as={TimeIcon} color="orange.500" />
                  부품 교체가 필요한 경우 사전 견적을 안내해드립니다.
                </ListItem>
              </List>
            </VStack>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
} 