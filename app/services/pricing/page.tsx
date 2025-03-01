'use client';

import {
  Box,
  Container,
  Heading,
  Text,
  SimpleGrid,
  VStack,
  Card,
  CardHeader,
  CardBody,
  CardFooter,
  Button,
  List,
  ListItem,
  ListIcon,
  Divider,
  Tag,
  Icon,
  useColorModeValue,
  Stack,
  Flex,
  Badge,
  Tooltip,
  HStack,
  Tabs,
  TabList,
  Tab,
  TabPanels,
  TabPanel,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalHeader,
  ModalBody,
  ModalCloseButton,
  useDisclosure,
} from '@chakra-ui/react';
import { CheckIcon, InfoIcon, StarIcon, PhoneIcon, QuestionIcon } from '@chakra-ui/icons';
import { FaCrown, FaRegStar, FaStar, FaCamera, FaServer, FaMobile, FaShieldAlt } from 'react-icons/fa';
import { useState } from 'react';

const PRICING_PACKAGES = [
  {
    name: "기본 패키지",
    price: "300,000",
    description: "소규모 매장 및 가정용",
    features: [
      "2CH HD 카메라",
      "기본형 녹화기",
      "1TB 하드디스크",
      "모니터링 앱 제공",
      "1년 무상 AS"
    ],
    tag: "인기",
    rating: 4,
    recommended: false
  },
  {
    name: "비즈니스 패키지",
    price: "800,000",
    description: "중소기업 및 상가용",
    features: [
      "4CH FHD 카메라",
      "고급형 녹화기",
      "2TB 하드디스크",
      "원격 모니터링",
      "2년 무상 AS",
      "정기 점검 서비스"
    ],
    tag: "추천",
    rating: 4.5,
    recommended: true
  },
  {
    name: "프리미엄 패키지",
    price: "1,500,000",
    description: "대규모 사업장용",
    features: [
      "8CH 4K 카메라",
      "프리미엄 녹화기",
      "4TB 하드디스크",
      "AI 영상분석",
      "3년 무상 AS",
      "월간 정기 점검",
      "긴급출동 서비스"
    ],
    tag: "프리미엄",
    rating: 5,
    recommended: false
  }
];

const ADDITIONAL_INFO = [
  "설치비는 현장 상황에 따라 별도 청구됩니다.",
  "케이블 공사비는 미터당 별도 청구됩니다.",
  "하드디스크 용량 추가는 별도 문의 바랍니다.",
  "패키지 구성은 고객 요청에 따라 변경 가능합니다."
];

const PACKAGE_DETAILS = {
  basic: {
    cameras: ["2MP HD 카메라 2대", "야간 촬영 지원", "방수/방진 설계"],
    recorder: ["4채널 녹화기", "모션 감지", "1TB 저장 용량"],
    monitoring: ["스마트폰 앱 제공", "실시간 알림", "클라우드 백업 옵션"],
    support: ["1년 무상 AS", "전화/원격 지원", "부품 보증"]
  },
  business: {
    cameras: ["4MP FHD 카메라 4대", "야간 컬러 촬영", "IR LED 탑재"],
    recorder: ["8채널 녹화기", "지능형 감지", "2TB 저장 용량"],
    monitoring: ["PC/모바일 관제", "푸시 알림", "영상 백업"],
    support: ["2년 무상 AS", "정기 점검", "우선 출동"]
  },
  premium: {
    cameras: ["8MP 4K 카메라 8대", "AI 컬러 나이트 비전", "자동 추적"],
    recorder: ["16채널 녹화기", "AI 영상 분석", "4TB RAID 구성"],
    monitoring: ["통합 관제 시스템", "얼굴/객체 인식", "데이터 분석"],
    support: ["3년 무상 AS", "월간 점검", "긴급 출동"]
  }
};

export default function Pricing() {
  const [selectedPackage, setSelectedPackage] = useState('basic');
  const { isOpen, onOpen, onClose } = useDisclosure();
  
  const bgGradient = useColorModeValue(
    'linear(to-r, teal.500, blue.500)',
    'linear(to-r, teal.200, blue.200)'
  );

  const renderRating = (rating: number) => {
    return (
      <HStack spacing={1}>
        {Array.from({ length: 5 }).map((_, index) => (
          <Icon
            key={index}
            as={index < rating ? FaStar : FaRegStar}
            color={index < rating ? "yellow.400" : "gray.300"}
          />
        ))}
      </HStack>
    );
  };

  return (
    <Box>
      {/* 히어로 섹션 */}
      <Box
        bgGradient={bgGradient}
        color="white"
        py={20}
        mb={12}
        position="relative"
        overflow="hidden"
      >
        <Box
          position="absolute"
          top={0}
          left={0}
          right={0}
          bottom={0}
          bg="blackAlpha.400"
          zIndex={0}
        />
        <Container maxW="container.xl" position="relative" zIndex={1}>
          <VStack spacing={6} align="center" textAlign="center">
            <Icon as={FaShieldAlt} boxSize={16} />
            <Heading size="2xl">CCTV 설치 패키지</Heading>
            <Text fontSize="xl" maxW="container.md">
              합리적인 가격으로 최고의 보안 서비스를 제공합니다
            </Text>
            <HStack spacing={4}>
              <Button
                size="lg"
                colorScheme="white"
                variant="outline"
                leftIcon={<PhoneIcon />}
                onClick={onOpen}
                _hover={{ bg: 'whiteAlpha.200' }}
              >
                무료 견적 상담
              </Button>
              <Button
                size="lg"
                colorScheme="teal"
                leftIcon={<InfoIcon />}
              >
                패키지 비교
              </Button>
            </HStack>
          </VStack>
        </Container>
      </Box>

      <Container maxW="container.xl">
        <VStack spacing={16}>
          {/* 패키지 선택 탭 */}
          <Tabs variant="soft-rounded" colorScheme="teal" size="lg" width="full">
            <TabList justifyContent="center" mb={8}>
              <Tab>가정/소규모</Tab>
              <Tab>기업/상가</Tab>
              <Tab>대규모/특수</Tab>
            </TabList>
            <TabPanels>
              {Object.entries(PACKAGE_DETAILS).map(([key, details]) => (
                <TabPanel key={key}>
                  <SimpleGrid columns={{ base: 1, md: 2 }} spacing={8}>
                    <Card>
                      <CardHeader>
                        <VStack spacing={4}>
                          <Icon 
                            as={key === 'premium' ? FaCrown : FaCamera} 
                            boxSize={10} 
                            color="teal.500" 
                          />
                          <Heading size="lg">시스템 구성</Heading>
                        </VStack>
                      </CardHeader>
                      <CardBody>
                        <VStack spacing={6} align="stretch">
                          <Box>
                            <Heading size="sm" mb={3}>카메라</Heading>
                            <List spacing={2}>
                              {details.cameras.map((item, i) => (
                                <ListItem key={i}>
                                  <ListIcon as={CheckIcon} color="teal.500" />
                                  {item}
                                </ListItem>
                              ))}
                            </List>
                          </Box>
                          <Box>
                            <Heading size="sm" mb={3}>녹화기</Heading>
                            <List spacing={2}>
                              {details.recorder.map((item, i) => (
                                <ListItem key={i}>
                                  <ListIcon as={CheckIcon} color="teal.500" />
                                  {item}
                                </ListItem>
                              ))}
                            </List>
                          </Box>
                        </VStack>
                      </CardBody>
                    </Card>
                    <Card>
                      <CardHeader>
                        <VStack spacing={4}>
                          <Icon as={FaServer} boxSize={10} color="teal.500" />
                          <Heading size="lg">서비스 지원</Heading>
                        </VStack>
                      </CardHeader>
                      <CardBody>
                        <VStack spacing={6} align="stretch">
                          <Box>
                            <Heading size="sm" mb={3}>모니터링</Heading>
                            <List spacing={2}>
                              {details.monitoring.map((item, i) => (
                                <ListItem key={i}>
                                  <ListIcon as={CheckIcon} color="teal.500" />
                                  {item}
                                </ListItem>
                              ))}
                            </List>
                          </Box>
                          <Box>
                            <Heading size="sm" mb={3}>기술지원</Heading>
                            <List spacing={2}>
                              {details.support.map((item, i) => (
                                <ListItem key={i}>
                                  <ListIcon as={CheckIcon} color="teal.500" />
                                  {item}
                                </ListItem>
                              ))}
                            </List>
                          </Box>
                        </VStack>
                      </CardBody>
                    </Card>
                  </SimpleGrid>
                </TabPanel>
              ))}
            </TabPanels>
          </Tabs>

          {/* 패키지 가격표 */}
          <SimpleGrid columns={{ base: 1, lg: 3 }} spacing={8} w="full">
            {PRICING_PACKAGES.map((pkg, index) => (
              <Card
                key={index}
                variant="outline"
                position="relative"
                overflow="hidden"
                _hover={{ transform: 'translateY(-8px)', shadow: 'xl' }}
                transition="all 0.3s"
              >
                {pkg.recommended && (
                  <Flex
                    position="absolute"
                    top={4}
                    right={-12}
                    bg="teal.500"
                    color="white"
                    px={8}
                    py={1}
                    transform="rotate(45deg)"
                    zIndex={1}
                  >
                    추천
                  </Flex>
                )}
                <CardHeader bg={useColorModeValue('gray.50', 'gray.700')} py={8}>
                  <VStack spacing={4}>
                    <Badge
                      colorScheme="teal"
                      fontSize="md"
                      px={4}
                      py={1}
                      borderRadius="full"
                    >
                      {pkg.tag}
                    </Badge>
                    <Heading size="lg">{pkg.name}</Heading>
                    <Text color="gray.500">{pkg.description}</Text>
                    {renderRating(pkg.rating)}
                  </VStack>
                </CardHeader>
                <CardBody>
                  <VStack spacing={6}>
                    <Stack spacing={1} textAlign="center">
                      <Text fontSize="sm" color="gray.500">
                        기본 설치비 포함
                      </Text>
                      <Heading size="2xl" color="teal.500">
                        {Number(pkg.price).toLocaleString()}
                        <Text as="span" fontSize="lg">원</Text>
                      </Heading>
                    </Stack>
                    <List spacing={3} w="full">
                      {pkg.features.map((feature, i) => (
                        <ListItem key={i} display="flex" alignItems="center">
                          <ListIcon as={CheckIcon} color="teal.500" />
                          <Text>{feature}</Text>
                        </ListItem>
                      ))}
                    </List>
                  </VStack>
                </CardBody>
                <CardFooter>
                  <Button
                    colorScheme="teal"
                    size="lg"
                    width="full"
                    leftIcon={<PhoneIcon />}
                  >
                    상담 신청
                  </Button>
                </CardFooter>
              </Card>
            ))}
          </SimpleGrid>

          {/* 추가 정보 */}
          <Box
            w="full"
            bg={useColorModeValue('blue.50', 'blue.900')}
            p={8}
            borderRadius="xl"
            border="1px"
            borderColor={useColorModeValue('blue.200', 'blue.700')}
          >
            <VStack spacing={4} align="stretch">
              <Heading size="md" display="flex" alignItems="center">
                <Icon as={InfoIcon} color="blue.500" mr={2} />
                추가 안내사항
              </Heading>
              <List spacing={3}>
                {ADDITIONAL_INFO.map((info, index) => (
                  <ListItem key={index} display="flex" alignItems="center">
                    <ListIcon as={InfoIcon} color="blue.500" />
                    <Text>{info}</Text>
                  </ListItem>
                ))}
              </List>
            </VStack>
          </Box>
        </VStack>
      </Container>

      {/* 견적 상담 모달 */}
      <Modal isOpen={isOpen} onClose={onClose} size="xl">
        <ModalOverlay />
        <ModalContent>
          <ModalHeader>무료 견적 상담</ModalHeader>
          <ModalCloseButton />
          <ModalBody pb={6}>
            {/* 견적 상담 폼 내용 */}
          </ModalBody>
        </ModalContent>
      </Modal>
    </Box>
  );
} 