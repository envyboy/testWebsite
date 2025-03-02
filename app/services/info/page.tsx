'use client';

import {
  Box,
  Container,
  Heading,
  Text,
  Accordion,
  AccordionItem,
  AccordionButton,
  AccordionPanel,
  AccordionIcon,
  SimpleGrid,
  Card,
  CardBody,
  VStack,
  Icon,
  List,
  ListItem,
  ListIcon,
  Divider,
  useColorModeValue,
} from '@chakra-ui/react';
import { CheckCircleIcon } from '@chakra-ui/icons';
import { FaCamera, FaHdd, FaWifi, FaShieldAlt, FaInfoCircle } from 'react-icons/fa';

const CCTV_TYPES = [
  {
    icon: FaCamera,
    title: "아날로그 CCTV",
    description: "전통적인 방식의 CCTV 시스템",
    features: [
      "설치가 간단하고 비용이 저렴",
      "안정적인 영상 전송",
      "기존 시스템과 호환성 우수",
      "Full HD 해상도 지원"
    ]
  },
  {
    icon: FaWifi,
    title: "IP 카메라",
    description: "네트워크 기반 디지털 카메라",
    features: [
      "4K 초고화질 영상",
      "원격 모니터링 용이",
      "확장성이 뛰어남"
    ]
  },
  {
    icon: FaShieldAlt,
    title: "PTZ 카메라",
    description: "회전 및 줌이 가능한 고급형 카메라",
    features: [
      "360도 회전 가능",
      "원격 제어 지원",
      "자동 추적 기능",
      "넓은 감시 범위"
    ]
  }
];

const FAQ_ITEMS = [
  {
    question: "CCTV는 얼마나 오래 보관되나요?",
    answer: "일반적으로 하드디스크 용량에 따라 7일~30일 정도 보관이 가능합니다. 1TB 기준으로 Full HD 해상도에서 약 20일 정도의 영상을 저장할 수 있습니다."
  },
  {
    question: "야간에도 촬영이 잘 되나요?",
    answer: "적외선 LED가 탑재된 카메라의 경우 빛이 전혀 없는 환경에서도 선명한 흑백 영상을 촬영할 수 있습니다. 컬러 야간 카메라의 경우 저조도 환경에서도 컬러 영상 촬영이 가능합니다."
  },
  {
    question: "스마트폰으로 실시간 확인이 가능한가요?",
    answer: "네트워크 카메라나 IP 카메라의 경우 전용 앱을 통해 언제 어디서나 실시간 모니터링이 가능합니다. 인터넷만 연결되어 있다면 전 세계 어디서든 확인할 수 있습니다."
  },
  {
    question: "설치 후 AS는 어떻게 되나요?",
    answer: "기본적으로 1년간 무상 AS를 제공하며, 이후에는 유상 서비스로 전환됩니다. 24시간 긴급출동 서비스도 별도로 운영하고 있습니다."
  }
];

const MAINTENANCE_TIPS = [
  "카메라 렌즈는 정기적으로 부드러운 천으로 닦아주세요.",
  "녹화기 내부의 먼지를 주기적으로 제거해주세요.",
  "케이블 연결 상태를 수시로 확인하세요.",
  "하드디스크 상태를 정기적으로 점검하세요.",
  "펌웨어 업데이트를 주기적으로 확인하세요."
];

export default function CCTVInfo() {
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
            <Icon as={FaInfoCircle} boxSize={16} />
            <Heading size="2xl">CCTV 정보</Heading>
            <Text fontSize="xl" maxW="container.md">
              CCTV 시스템의 모든 것을<br />
              알기 쉽게 설명해드립니다
            </Text>
          </VStack>
        </Container>
      </Box>

      {/* 기존 콘텐츠 */}
      <Container maxW="container.xl">
        <VStack spacing={12} align="stretch">
          <Box>
            <Heading size="lg" mb={6}>CCTV 종류</Heading>
            <SimpleGrid columns={[1, 1, 3]} spacing={8}>
              {CCTV_TYPES.map((type, index) => (
                <Card key={index}>
                  <CardBody>
                    <VStack spacing={4}>
                      <Icon as={type.icon} boxSize={8} color="teal.500" />
                      <Heading size="md">{type.title}</Heading>
                      <Text color="gray.600">{type.description}</Text>
                      <List spacing={2}>
                        {type.features.map((feature, i) => (
                          <ListItem key={i}>
                            <ListIcon as={CheckCircleIcon} color="teal.500" />
                            {feature}
                          </ListItem>
                        ))}
                      </List>
                    </VStack>
                  </CardBody>
                </Card>
              ))}
            </SimpleGrid>
          </Box>

          <Divider />

          {/* 자주 묻는 질문 */}
          <Box>
            <Heading size="lg" mb={6}>자주 묻는 질문</Heading>
            <Accordion allowMultiple>
              {FAQ_ITEMS.map((item, index) => (
                <AccordionItem key={index}>
                  <h2>
                    <AccordionButton>
                      <Box flex="1" textAlign="left" fontWeight="bold">
                        {item.question}
                      </Box>
                      <AccordionIcon />
                    </AccordionButton>
                  </h2>
                  <AccordionPanel pb={4}>
                    {item.answer}
                  </AccordionPanel>
                </AccordionItem>
              ))}
            </Accordion>
          </Box>

          {/* 유지보수 팁 */}
          <Box p={6} bg="blue.50" borderRadius="lg">
            <Heading size="md" mb={4}>유지보수 팁</Heading>
            <List spacing={3}>
              {MAINTENANCE_TIPS.map((tip, index) => (
                <ListItem key={index} display="flex">
                  <ListIcon as={CheckCircleIcon} color="blue.500" mt={1} />
                  <Text>{tip}</Text>
                </ListItem>
              ))}
            </List>
          </Box>
        </VStack>
      </Container>
    </Box>
  );
} 