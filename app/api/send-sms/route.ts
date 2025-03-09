import Coolsms from 'coolsms-node-sdk';

const messageService = new Coolsms(
  process.env.COOLSMS_API_KEY as string,
  process.env.COOLSMS_API_SECRET as string
);

export async function POST(request: Request) {
  const { phone, name, email, message } = await request.json();
  const adminPhone = process.env.ADMIN_PHONE_NUMBER;
  
  try {
    // 사용자에게 발송
    await messageService.sendOne({
      to: phone,
      from: process.env.COOLSMS_SENDER_NUMBER as string,
      text: `[제이제이 시스템] ${name}님의 문의가 접수되었습니다. 빠른 시일 내에 답변 드리겠습니다.`,
      autoTypeDetect: true
    });

    // 관리자 번호가 있는지 확인하고 로깅
    console.log('관리자 번호 확인:', {
      adminPhone,
      isString: typeof adminPhone === 'string',
      length: adminPhone?.length
    });

    if (!adminPhone || adminPhone.trim() === '') {
      throw new Error('관리자 전화번호가 설정되지 않았습니다.');
    }

    // 관리자에게 발송
    const adminResult = await messageService.sendOne({
      to: adminPhone.trim(),
      from: process.env.COOLSMS_SENDER_NUMBER as string,
      text: `[새로운 문의]
이름: ${name}
연락처: ${phone}
이메일: ${email}
문의내용: ${message}`,
      autoTypeDetect: true
    });

    console.log('관리자 문자 발송 결과:', adminResult);

    return new Response(JSON.stringify({ 
      success: true,
      adminPhone: adminPhone.trim(),
      adminResult 
    }), {
      headers: {
        'Content-Type': 'application/json',
      },
    });
  } catch (error) {
    console.error('SMS 발송 실패:', error);
    return new Response(JSON.stringify({ 
      success: false, 
      error: error instanceof Error ? error.message : 'Unknown error',
      adminPhone: adminPhone
    }), {
      status: 200,
      headers: {
        'Content-Type': 'application/json',
      },
    });
  }
} 