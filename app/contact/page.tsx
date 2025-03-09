'use client';

import {
  Box,
  Container,
  VStack,
  Heading,
  FormControl,
  FormLabel,
  Input,
  Textarea,
  Button,
  SimpleGrid,
  Text,
  Icon,
  Card,
  CardBody,
  useColorModeValue,
  FormErrorMessage,
  InputGroup,
  InputLeftElement,
  Alert,
  AlertIcon,
  useToast,
  Divider,
} from '@chakra-ui/react';
import { PhoneIcon, EmailIcon, TimeIcon, CheckIcon } from '@chakra-ui/icons';
import { FaMapMarkerAlt, FaUser } from 'react-icons/fa';
import { useState } from 'react';
import { RiKakaoTalkFill } from 'react-icons/ri';

const CONTACT_INFO = [
  {
    icon: PhoneIcon,
    title: "전화 문의",
    content: "010-6506-2763",
    subContent: "010-6506-2763",
    action: "tel:010-6506-2763"
  },
  {
    icon: RiKakaoTalkFill,
    title: "카카오톡 상담",
    content: "카카오톡 채널",
    subContent: "실시간 상담",
    action: "https://pf.kakao.com/_XQVnn" // 실제 카카오톡 채널 URL로 변경 필요
  },
  {
    icon: EmailIcon,
    title: "이메일 문의",
    content: "cctvpro11@naver.com",
    action: "mailto:cctvpro11@naver.com"
  },
  {
    icon: FaMapMarkerAlt,
    title: "찾아오시는 길",
    content: "경기도 고양시 덕양구 행신로 351-8",
    action: "https://maps.google.com"
  }
];

interface FormData {
  name: string;
  phone: string;
  email: string;
  message: string;
}

export default function Contact() {
  const [formData, setFormData] = useState<FormData>({
    name: '',
    phone: '',
    email: '',
    message: ''
  });
  const [errors, setErrors] = useState<Partial<FormData>>({});
  const [isSubmitting, setIsSubmitting] = useState(false);
  const toast = useToast();

  const validateForm = () => {
    const newErrors: Partial<FormData> = {};
    if (!formData.name) newErrors.name = '이름을 입력해주세요';
    if (!formData.phone) newErrors.phone = '연락처를 입력해주세요';
    if (!formData.email) newErrors.email = '이메일을 입력해주세요';
    if (!formData.message) newErrors.message = '문의내용을 입력해주세요';
    setErrors(newErrors);
    return Object.keys(newErrors).length === 0;
  };

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    if (!validateForm()) return;

    setIsSubmitting(true);
    
    try {
      const response = await fetch('/api/send-sms', {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify({
          phone: formData.phone,
          name: formData.name,
          email: formData.email,
          message: formData.message
        }),
      });

      const data = await response.json();
      console.log('API 응답:', data); // 디버깅용

      if (data.success) {
        toast({
          title: "문의가 접수되었습니다.",
          description: "접수 확인 문자가 발송되었습니다.",
          status: "success",
          duration: 5000,
          isClosable: true,
        });

        setFormData({ name: '', phone: '', email: '', message: '' });
      } else {
        throw new Error(data.error?.message || 'SMS 발송 실패');
      }
    } catch (error) {
      console.error('에러:', error);
      toast({
        title: "접수 중 오류가 발생했습니다.",
        description: error instanceof Error ? error.message : "잠시 후 다시 시도해주세요.",
        status: "error",
        duration: 5000,
        isClosable: true,
      });
    }

    setIsSubmitting(false);
  };

  const handleChange = (e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>) => {
    const { name, value } = e.target;
    setFormData(prev => ({ ...prev, [name]: value }));
    if (errors[name as keyof FormData]) {
      setErrors(prev => ({ ...prev, [name]: '' }));
    }
  };

  const cardBg = useColorModeValue('white', 'gray.700');
  const borderColor = useColorModeValue('gray.200', 'gray.600');

  return (
    <Box>
      {/* 히어로 섹션 */}
      <Box bg="teal.500" color="white" py={16} mb={12}>
        <Container maxW="container.xl">
          <VStack spacing={4} textAlign="center">
            <Heading size="2xl">접수하기</Heading>
            <Text fontSize="xl">
              궁금하신 사항이나 견적 문의를 남겨주시면<br />
              신속하게 답변 드리겠습니다.
            </Text>
          </VStack>
        </Container>
      </Box>

      <Container maxW="container.xl">
        <SimpleGrid columns={{ base: 1, lg: 2 }} spacing={10}>
          {/* 문의 폼 */}
          <Card variant="outline" p={6}>
            <CardBody>
              <form onSubmit={handleSubmit}>
                <VStack spacing={4}>
                  <FormControl isInvalid={!!errors.name}>
                    <FormLabel>이름</FormLabel>
                    <InputGroup>
                      <InputLeftElement>
                        <Icon as={FaUser} color="gray.500" />
                      </InputLeftElement>
                      <Input
                        name="name"
                        value={formData.name}
                        onChange={handleChange}
                        placeholder="이름을 입력해주세요"
                      />
                    </InputGroup>
                    <FormErrorMessage>{errors.name}</FormErrorMessage>
                  </FormControl>

                  <FormControl isInvalid={!!errors.phone}>
                    <FormLabel>연락처</FormLabel>
                    <InputGroup>
                      <InputLeftElement>
                        <PhoneIcon color="gray.500" />
                      </InputLeftElement>
                      <Input
                        name="phone"
                        value={formData.phone}
                        onChange={handleChange}
                        placeholder="연락처를 입력해주세요"
                      />
                    </InputGroup>
                    <FormErrorMessage>{errors.phone}</FormErrorMessage>
                  </FormControl>

                  <FormControl isInvalid={!!errors.email}>
                    <FormLabel>이메일</FormLabel>
                    <InputGroup>
                      <InputLeftElement>
                        <EmailIcon color="gray.500" />
                      </InputLeftElement>
                      <Input
                        name="email"
                        type="email"
                        value={formData.email}
                        onChange={handleChange}
                        placeholder="이메일을 입력해주세요"
                      />
                    </InputGroup>
                    <FormErrorMessage>{errors.email}</FormErrorMessage>
                  </FormControl>

                  <FormControl isInvalid={!!errors.message}>
                    <FormLabel>문의내용</FormLabel>
                    <Textarea
                      name="message"
                      value={formData.message}
                      onChange={handleChange}
                      placeholder="문의하실 내용을 입력해주세요"
                      minH="200px"
                    />
                    <FormErrorMessage>{errors.message}</FormErrorMessage>
                  </FormControl>

                  <Button
                    type="submit"
                    colorScheme="teal"
                    size="lg"
                    w="full"
                    isLoading={isSubmitting}
                    loadingText="접수중..."
                  >
                    접수하기
                  </Button>
                </VStack>
              </form>
            </CardBody>
          </Card>

          {/* 연락처 정보 */}
          <VStack spacing={6} align="stretch">
            {CONTACT_INFO.map((info, index) => (
              <Card
                key={index}
                variant="outline"
                _hover={{ transform: 'translateY(-2px)', shadow: 'md' }}
                transition="all 0.2s"
                cursor={info.action ? 'pointer' : 'default'}
                onClick={() => info.action && window.open(info.action, '_blank')}
                bg={info.icon === RiKakaoTalkFill ? '#FEE500' : 'white'}
              >
                <CardBody>
                  <VStack spacing={3} align="flex-start">
                    <Icon 
                      as={info.icon} 
                      boxSize={6} 
                      color={info.icon === RiKakaoTalkFill ? 'black' : 'teal.500'} 
                    />
                    <Box>
                      <Heading size="md" mb={2}>{info.title}</Heading>
                      <Text 
                        fontSize="lg" 
                        fontWeight="medium"
                        color={info.icon === RiKakaoTalkFill ? 'black' : 'inherit'}
                      >
                        {info.content}
                      </Text>
                      {info.subContent && (
                        <Text color={info.icon === RiKakaoTalkFill ? 'blackAlpha.700' : 'gray.500'}>
                          {info.subContent}
                        </Text>
                      )}
                    </Box>
                  </VStack>
                </CardBody>
              </Card>
            ))}
          </VStack>
        </SimpleGrid>
      </Container>
    </Box>
  );
} 