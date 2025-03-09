import Coolsms from 'coolsms-node-sdk';

const messageService = new Coolsms(
  process.env.COOLSMS_API_KEY as string,
  process.env.COOLSMS_API_SECRET as string
);

export async function POST(request: Request) {
  const { phone, name, email, message } = await request.json();
  const adminPhone = process.env.ADMIN_PHONE_NUMBER as string;
  
  console.log('관리자 번호:', adminPhone); // 디버깅용

  try {
    // 사용자에게 발송
    await messageService.sendOne({
      to: phone,
      from: process.env.COOLSMS_SENDER_NUMBER as string,
      text: `[제이제이 시스템] ${name}님의 문의가 접수되었습니다. 빠른 시일 내에 답변 드리겠습니다.`,
      autoTypeDetect: true
    });

    if (!adminPhone) {
      throw new Error('관리자 전화번호가 설정되지 않았습니다.');
    }

    // 관리자에게 발송
    await messageService.sendOne({
      to: adminPhone,
      from: process.env.COOLSMS_SENDER_NUMBER as string,
      text: `[새로운 문의] 
이름: ${name}
연락처: ${phone}
이메일: ${email}
문의내용: ${message}`,
      autoTypeDetect: true
    });

    return Response.json({ success: true });
  } catch (error) {
    console.error('SMS 발송 실패:', error);
    return Response.json({ success: false, error }, { status: 500 });
  }
} 